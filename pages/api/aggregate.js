import nextConnect from "next-connect";
import db from "../../middlewares/mongo-middleware";
import TotalConversions from "../../models/total-conversions";
const handler = nextConnect();

handler.use(db);

handler.get(async (req, res) => {
  try {
    const aggregate = await TotalConversions.find({});
    res.json({ aggregate });
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
});

export default handler;
