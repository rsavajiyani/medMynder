const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const medicineSchema = new Schema({
    medicine: {
        type: String,
        required: true
    },
    indication: {
        type: String
    },
    dosage: {
        type: String,
    },
    frequency: {
        type: Number,
        required: true
    },
    instructions: {
        type: String
    },
    notes: {
        type: String
    },
    patient: {
        type: Schema.Types.ObjectId,
        ref: 'Patient'
    } //referencing the Patient model
});

const Medicine = mongoose.model("Medicine", medicineSchema);
module.exports = Medicine;