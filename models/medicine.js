const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const medicineSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    indication: {
        type: String,
        required: true
    },
    dosage: {
        type: Number,
    },
    frequency: {
        type: Number,
        required: true
    },
    patient: {
        type: Schema.Types.ObjectId,
        ref: 'Patient'
    }
});

const Medicine = mongoose.model("Medicine", medicineSchema);
module.exports = Medicine;