// backend/db.js
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("YOUR_MONGO_URI", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1); // exit the app if DB connection fails
    }
};

module.exports = connectDB;
