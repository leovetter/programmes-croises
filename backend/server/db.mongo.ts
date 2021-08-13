import { MongoClient } from "mongodb";

export function mongoClient() {

    const uri = "mongodb://vetouz:programmes@127.0.0.1:27017/programmes?retryWrites=true&w=majority";
    const client = new MongoClient(uri);

    return client;
}