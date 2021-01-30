var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ConversionSchema = new Schema(
  {
    SourceCurrency: { type: String, required: true },
    SourceAmount: { type: Number, required: true },
    TargetCurrency: { type: String, required: true },
    TargetAmount: { type: Number, required: true },
    ConversionRate: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Conversion ||
  mongoose.model("Conversion", ConversionSchema);
