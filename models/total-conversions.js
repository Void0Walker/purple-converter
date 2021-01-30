var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var TotalConversionSchema = new Schema(
  {
    TotalAmountUSD: { type: Number, required: false },
    TotalConversions: { type: Number, required: false },
    MostPopularCurrency: { type: String, required: false },
    LastConversionAmountUSD: { type: Number, required: false },
  },
  { timestamps: true }
);

export default mongoose.models.TotalConversions ||
  mongoose.model("TotalConversions", TotalConversionSchema);
