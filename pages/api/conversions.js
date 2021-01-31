import nextConnect from "next-connect";
import db from "../../middlewares/mongo-middleware";
import Conversion from "../../models/conversion";
import updateTotal from "../../helpers/update-total";
import findMostPopularCurrency from "../../helpers/update-favourite-currency";
import { ObjectId } from "mongodb";
import axios from "axios";

const errors = {
  400: "Malformed request, please adjust the body and try again",
};

function isValidId(id) {
  return new ObjectId(id).toString() === id;
}

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

handler.post(async (req, res) => {
  try {
    const conversion = { ...req.body };

    if (
      isValidId(conversion.SourceCurrency.id) &&
      isValidId(conversion.TargetCurrency.id)
    ) {
      let apiConversion = await axios.get(
        `${process.env.CURRENCY_LAYER}&from=${conversion.SourceCurrency.ISO}&to=${conversion.TargetCurrency.ISO}&amount=${conversion.SourceAmount}`
      );

      apiConversion = apiConversion.data;

      if (apiConversion.success) {
        const conversionSave = new Conversion({
          SourceCurrency: conversion.SourceCurrency.id,
          SourceAmount: apiConversion.query.amount,
          TargetCurrency: conversion.TargetCurrency.id,
          TargetAmount: apiConversion.result,
          ConversionRate: apiConversion.info.quote,
        });

        await conversionSave.save();

        // using a helper function to asyncronously update the TotalConversions table

        updateTotal(
          conversion.SourceCurrency.ISO,
          conversion.TargetCurrency.ISO,
          conversion.SourceAmount,
          apiConversion.result
        );

        findMostPopularCurrency(conversion.TargetCurrency.ISO);

        res.json({ conversionSave });
      } else {
        res.json(400).send(errors[400]);
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "internal server error" });
  }
});

export default handler;
