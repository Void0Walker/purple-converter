var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ConversionSchema = new Schema(
  {
    SourceCurrency: {
      type: Schema.Types.ObjectId,
      ref: "Currency",
      required: true,
    },
    SourceAmount: { type: Number, required: true },
    TargetCurrency: {
      type: Schema.Types.ObjectId,
      ref: "Currency",
      required: true,
    },
    TargetAmount: { type: Number, required: true },
    ConversionRate: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Conversion ||
  mongoose.model("Conversion", ConversionSchema);
