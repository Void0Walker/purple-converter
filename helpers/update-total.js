import nextConnect from "next-connect";
import db from "../middlewares/mongo-middleware";
import TotalConversions from "../models/total-conversions";

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
            result[0].TotalAmountUSD + Number(apiConversionUSD.data.amount),
          TotalConversions: result[0].TotalConversions + 1,
          LastConversionAmountUSD: Number(apiConversionUSD.data.amount),
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
        apiConversionUSD = apiConversionUSD.data;

        const totalSave = new TotalConversions({
          TotalAmountUSD: Number(apiConversionUSD.data.amount),
          TotalConversions: 1,
          LastConversionAmountUSD: Number(apiConversionUSD.data.amount),
        });
        await totalSave.save();
      }
    }
  } catch (error) {
    throw error;
  }
}

export default updateTotal;
