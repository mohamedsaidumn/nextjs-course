import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://mohamedsaidumn:3kRu3Ni2fucYhLGp@cluster04211.3e1hgkn.mongodb.net/events?retryWrites=true&w=majority";

async function handler(req, res) {
  const eventId = req.query.eventId;

  const client = await MongoClient.connect(uri);

  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    const newComment = {
      name: name,
      email: email,
      text: text,
      eventId: eventId,
    };
    console.log(newComment);

    const db = client.db();
    const result = await db.collection("comments").insertOne(newComment);

    console.log(result);

    console.log(newComment);
    res.status(201).json({ message: "added comment", comment: newComment });
  }

  if (req.method === "GET") {
    const dummyList = [
      { id: "c1", name: "mohamed", text: "wow that is amazing" },
      { id: "c2", name: "sadiq", text: "That is crazy" },
    ];

    res.status(200).json({ comments: dummyList });
  }

  client.close();
}

export default handler;
