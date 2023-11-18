import { MongoClient, ServerApiVersion } from "mongodb";

const uri =
  "mongodb+srv://mohamedsaidumn:3kRu3Ni2fucYhLGp@cluster04211.3e1hgkn.mongodb.net/newsletter?retryWrites=true&w=majority";

async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address." });
      return;
    }
    console.log(userEmail);

    const client = await MongoClient.connect(uri);
    const db = client.db();

    await db.collection("emails").insertOne({ email: userEmail });

    client.close();

    res.status(201).json({ message: "Signed up" });
  }
}

export default handler;
