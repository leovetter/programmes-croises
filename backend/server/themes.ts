import {Request, Response} from "express";
import { mongoClient } from "./db.mongo";

export async function themes(req: Request, res:Response) {

    const client = mongoClient();
    let themes;

    try {
        await client.connect();
    
        themes = await getThemes(client);
     
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
    
    res.status(200).json(themes);
}

async function getThemes(client) {

    const mr = await client.db().collection("propositions").mapReduce(
        `function() {
          for (var key in this) { 
                if (key !== '_id' && key !== 'parti' && key !== 'site') {
                    emit(key, null); 
                }
            }
        }`,
        `function(key, stuff) { return null; }`, 
        {
            "out": "propositions" + "_keys"
        }
      )
    
    return client.db().collection("propositions_keys").distinct("_id");
};