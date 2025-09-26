import mongoose from "mongoose";

const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("Connected to MongoDB Successfully!");
        })
        .catch((error) => {
            console.log("Failed to connect to MongoDB", error);
        });
}

export default connectDB;