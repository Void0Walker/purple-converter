import nextConnect from "next-connect";
import db from "../middlewares/mongo-middleware";
import TotalConversions from "../models/total-conversions";
import axios from "axios";

const handler = nextConnect();

handler.use(db);

async function updateTotal(source, target, sourceAmount, targetAmount) {
  try {
    const result = await TotalConversions.find({}).lean();

    //if first convertion already occured > continue

    if (result.length > 0) {
      // if target currency is USD > update the TotalConversions table, else convert source into USD and update TotalConversions table

      if (target === "USD") {
        const totalSave = {
          TotalAmountUSD: result[0].TotalAmountUSD + Number(targetAmount),
          TotalConversions: result[0].TotalConversions + 1,
          LastConversionAmountUSD: Number(targetAmount),
        };

        await TotalConversions.findByIdAndUpdate(result[0]._id, totalSave);
      } else {
        let apiConversionUSD = await axios.get(
          `${process.env.CURRENCY_LAYER}&from=${source}&to=USD&amount=${sourceAmount}`
        );
        apiConversionUSD = apiConversionUSD.data;

        const totalSave = {
          TotalAmountUSD:
            result[0].TotalAmountUSD + Number(apiConversionUSD.query.amount),
          TotalConversions: result[0].TotalConversions + 1,
          LastConversionAmountUSD: Number(apiConversionUSD.query.amount),
        };
        await TotalConversions.findByIdAndUpdate(result[0]._id, totalSave);
      }
    } else {
      if (target === "USD") {
        const totalSave = new TotalConversions({
          TotalAmountUSD: targetAmount,
          TotalConversions: 1,
          LastConversionAmountUSD: targetAmount,
        });

        await totalSave.save();
      } else {
        let apiConversionUSD = await axios.get(
          `${process.env.CURRENCY_LAYER}&from=${source}&to=USD&amount=${sourceAmount}`
        );

        const totalSave = new TotalConversions({
          TotalAmountUSD: Number(apiConversionUSD.query.amount),
          TotalConversions: 1,
          LastConversionAmountUSD: Number(apiConversionUSD.query.amount),
        });
        await totalSave.save();
      }
    }
  } catch (error) {
    throw error;
  }
}

export default updateTotal;
