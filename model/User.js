const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  country: { type: String, required: true },
  skills: { type: String, required: false },
  dateRegisterd: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Users", UserSchema);
