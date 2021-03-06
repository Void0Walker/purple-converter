import nextConnect from "next-connect";
import db from "../../middlewares/mongo-middleware";
import Currency from "../../models/currency";
const handler = nextConnect();

handler.use(db);

handler.get(async (req, res) => {
  try {
    const currencies = await Currency.find({});
    res.json({ currencies });
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
});

export default handler;
