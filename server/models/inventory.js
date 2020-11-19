let mongoose = require("mongoose");
let Schema = mongoose.Schema;

// Schema describe Inventory
let InventorySchema = new Schema({
  name: { type: String, required: true},
  request: { type: String },
  available: { type: Boolean },
  missing: { type: Boolean },
  guid: { type: String, required: true },
  qty: { type: Number, required: true }
}, { collection : 'inventory' });

module.exports = mongoose.model("Inventory", InventorySchema);
