import nextConnect from "next-connect";
import db from "../../middlewares/mongo-middleware";
import Conversion from "../../models/conversion";
const handler = nextConnect();

handler.use(db);

handler.get(async (req, res) => {
  try {
    const conversions = await Conversion.find({});
    res.json({ conversions });
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
});

export default handler;
