import { MongoClient } from "mongodb";

export async function connectDatabase() {
  const uri =
    "mongodb+srv://mohamedsaidumn:3kRu3Ni2fucYhLGp@cluster04211.3e1hgkn.mongodb.net/events?retryWrites=true&w=majority";
  const client = await MongoClient.connect(uri);

  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();

  const result = await db.collection(collection).insertOne(document);

  return result;
}

export async function getAllDocuments(client, collection, sort) {
  const db = client.db();
  const documents = await db.collection(collection).find().sort(sort).toArray();

  return documents;
}
