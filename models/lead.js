const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const leadSchema = new Schema({
    firstName:{ type: String, required: true },
    lastName: { type: String, required: true },
    email: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
    message: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const Lead = mongoose.model("Lead", leadSchema);

module.exports = Lead;

