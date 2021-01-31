import nextConnect from "next-connect";
import db from "../middlewares/mongo-middleware";
import Conversion from "../models/conversion";
import TotalConversions from "../models/total-conversions";

const handler = nextConnect();

handler.use(db);

//borrowed from https://www.w3resource.com/javascript-exercises/javascript-array-exercise-8.php not to reinvent the wheel 😊

function findMostFrequentOccurence(arr) {
  let mf = 1;
  let m = 0;
  let item;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] == arr[j]) m++;
      if (mf < m) {
        mf = m;
        item = arr[i];
      }
    }
    m = 0;
  }
  return [item, mf];
}

async function findMostPopularCurrency(target) {
  const conversionHistory = await Conversion.find({})
    .populate("TargetCurrency")
    .lean();
  const totalConversions = await TotalConversions.find({}).lean();

  if (conversionHistory.length > 0 && totalConversions.length > 0) {
    let targetCurrencyMap = conversionHistory.map(
      (e) => e.TargetCurrency.CurrencyISO
    );

    let mf = findMostFrequentOccurence(targetCurrencyMap);

    await TotalConversions.findByIdAndUpdate(totalConversions[0]._id, {
      MostPopularCurrency: mf[0],
    });
  } else {
    const totalSave = new TotalConversions({
      MostPopularCurrency: target,
    });

    await totalSave.save();
  }

  try {
  } catch (error) {
    throw error;
  }
}

export default findMostPopularCurrency;
