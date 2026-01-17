import mongoose from "mongoose"
import bcrypt from "bcryptjs"

const userSchema = new mongoose.Schema({
    email : {
        type: String,
        required: true
    },
    userName : {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

userSchema.pre("save", async function () {
    //if password is not changed, save data to database
    if (!this.isModified("password")) return;

    //otherwise, hash the password and then save to the database
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    } catch (error) {
        console.error("Error hashing password:", error);
        throw error; // still throws to Mongoose
    }
});

//checks if user pass matches the hashed pass to validate in /login
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};




export default mongoose.model("User", userSchema);
   




//TODO NEXT TIME:
//1. Input user and pass from frontend
//2. connect frontend to backend
//3. set up api call for user and pass 