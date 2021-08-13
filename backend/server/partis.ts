import {Request, Response} from "express";
import { mongoClient } from "./db.mongo";

export async function partis(req: Request, res:Response) {

    const client = mongoClient();
    let partis;

    try {
        await client.connect();
    
        partis = await getPartis(client);
     
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
    
    res.status(200).json(partis);
}

async function getPartis(client) {

    const partis = await client.db().collection("propositions").distinct('parti')
    
    return partis;
};