const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB connected successfully.");
    } catch (err) {
        console.log("MongoDB connection failed.");
        console.error(err.message);
    }
};

module.exports = connectDB;