import mongoose from "mongoose"
import bcrypt from "bcryptjs"

const inventoryItemSchema = new mongoose.Schema({
    loomianId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Loomian",
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        default: 1
    }
});


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
    inventory : {
        type: [inventoryItemSchema],
        default: []
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
   