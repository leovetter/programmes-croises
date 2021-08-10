import {Request, Response} from "express";
import { Admin } from "mongodb";
const { MongoClient } = require('mongodb');

export async function programmes(req: Request, res:Response) {

    const programmes = await mongo();

    res.status(200).json(programmes);
}

async function mongo() {

    const uri = "mongodb://vetouz:programmes@127.0.0.1:27017/programmes?retryWrites=true&w=majority";
    
    const client = new MongoClient(uri);
    try {
        await client.connect();
    
        const programmes = await getProgrammes(client);

        return programmes;
     
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function getProgrammes(client){

    const programmes = await client.db().collection("propositions").find({}).toArray();

    return programmes;
};