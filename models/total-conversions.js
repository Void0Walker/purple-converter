var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var TotalConversionSchema = new Schema(
  {
    TotalAmountUSD: { type: Number, required: true },
    TotalConversions: { type: Number, required: true },
    MostPopularCurrency: { type: String, required: false },
  },
  { timestamps: true }
);

export default mongoose.models.TotalConversions ||
  mongoose.model("TotalConversions", TotalConversionSchema);
