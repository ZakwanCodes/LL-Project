import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    userName : {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
}, {
    timestamp: true
})

export default mongoose.model("User", userSchema);
   




//TODO NEXT TIME:
//1. Input user and pass from frontend
//2. connect frontend to backend
//3. set up api call for user and pass 