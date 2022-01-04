const mongoose = require("mongoose");

const warnSchema = mongoose.Schema({
    id: { type: String, required: true },
    reason: { type: String, required: true },
    date: { type: String, required: true },
    mod: { type: String, required: true }
})

module.exports = mongoose.model("Warn", warnSchema)