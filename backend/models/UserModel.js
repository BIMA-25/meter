import mongoose from "mongoose";

const meter = mongoose.Schema({
    nomermeteran: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    habis: {
        type: Number,
        required: true
    },
    ket: {
        type: String,
        required: true
    },
})
const User = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    pass:{
        type: String,
        required:true,

    },
    meterair: [
        meter,
    ],
});

export default mongoose.model('Users', User);