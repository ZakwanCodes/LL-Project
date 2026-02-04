import mongoose from "mongoose"
const loomiansSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    event:{
        type: String, 
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    demand: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true  
    }
});

export default mongoose.model("Loomian", loomiansSchema);