const mongoose = require("../config/mongoose");

const newSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true }
});

const collection = mongoose.model("report1", newSchema);
module.exports = collection;
