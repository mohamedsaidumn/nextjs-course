function handler(req, res) {
  const eventId = req.query.eventId;
  console.log(req.query);

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
      client.close();
      return;
    }

    const newComment = {
      id: new Date.now(),
      name: name,
      email: email,
      text: text,
    };

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
}

export default handler;
