const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var CurrencySchema = new Schema(
  {
    CurrencyISO: { type: String, required: true },
    CurrencyDescription: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Currency ||
  mongoose.model("Currency", CurrencySchema);
