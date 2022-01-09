const mongoose = require("mongoose");

const warnSchema = mongoose.Schema({
    id: { type: String, required: true },
    reason: { type: Array, required: true },
    date: { type: Array, required: true },
    mod: { type: String, required: true }
})

module.exports = mongoose.model("Warn", warnSchema)