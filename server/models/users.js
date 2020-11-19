const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema describe User
const UsersSchema = new Schema({
  name: { type: String, required: true},
  email: { type: String },
  department: { type: String },
  password: { type: String, required: true }
}, { collection : 'users' });

module.exports = mongoose.model("Users", UsersSchema);
