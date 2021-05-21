
const mongoose = require("mongoose");

const _sample = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,

});

module.exports = mongoose.model("_sample", _sample);
