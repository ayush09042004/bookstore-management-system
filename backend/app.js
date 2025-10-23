const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
const connectDB = require("./connection/conn");
connectDB();

// require("./connections/conn");

// Routes
const bookRoute = require("./routes/booksRoute");
const authRoute = require("./routes/authRoute");
const cartRoute = require("./routes/cartRoute");

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/books", bookRoute);
app.use("/api/v1/cart", cartRoute);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("✅ SERVER STARTED SUCCESSFULLY on port " + PORT);
});
