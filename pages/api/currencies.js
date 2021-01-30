import nextConnect from "next-connect";
import db from "../../middlewares/mongo-middleware";
import Entry from "../../models/entry";
const handler = nextConnect();

handler.use(db);

handler.get(async (req, res) => {
  try {
    const allEntries = await Entry.find().lean();
    res.json({ allEntries });
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
});

handler.post(async (req, res) => {
  try {
    const entry = new Entry(req.body);

    let addedEntry = await entry.save();

    res.json({ addedEntry });
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
});

export default handler;
