import mongoose from "mongoose";

const botSchema = mongoose.model({
    text: {
        type: String,
        required: true
    },
    timeStamp: {
        type: Date,
        default: Date.now
    }
});

export const Bot = mongoose.model("Bot", botSchema);