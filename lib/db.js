import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const url = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.3e1hgkn.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

  const client = await MongoClient.connect(url);

  return client;
}
