const { model } = require("mongoose");
const { HoldingsSchema } = require("../schemas/HoldingsSchema");

// No "new" here — just call model()
const HoldingsModel = model("holding", HoldingsSchema);

module.exports = { HoldingsModel };
