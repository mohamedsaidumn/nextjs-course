import { MongoClient, ServerApiVersion } from "mongodb";

export async function connectDatabase() {
  const uri =
    "mongodb+srv://mohamedsaidumn:3kRu3Ni2fucYhLGp@cluster04211.3e1hgkn.mongodb.net/newsletter?retryWrites=true&w=majority";
  const client = await MongoClient.connect(uri);

  return client;
}

export async function insertDocument(client, document) {
  const db = client.db();

  const result = await db.collection("emails").insertOne({ email: document });

  return result;
}

async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address." });
      return;
    }
    console.log(userEmail);

    let client;

    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: "Connecting to the database failed!" });
      return;
    }

    try {
      await insertDocument(client, "newsletter", { email: userEmail });
      client.close();
    } catch (error) {
      res.status(500).json({ message: "Inserting data failed!" });
      return;
    }

    client.close();

    res.status(201).json({ message: "Signed up" });
  }
}

export default handler;
