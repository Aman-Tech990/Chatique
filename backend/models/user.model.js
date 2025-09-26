import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    sender: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now()
    }
});

export const User = mongoose.model("User", userSchema);