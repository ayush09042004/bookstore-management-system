const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    // Handles both "authorization" and "Authorization"
    const authHeader = req.headers["authorization"] || req.headers["Authorization"];

    if (!authHeader) {
        return res.status(401).json({ message: "No token provided" });
    }

    // Ensure proper Bearer format
    const parts = authHeader.split(" ");
    if (parts.length !== 2 || parts[0] !== "Bearer") {
        return res.status(401).json({ message: "Invalid token format" });
    }

    const token = parts[1];
    console.log("Auth Header:", authHeader);
    console.log("JWT_SECRET from env:", process.env.JWT_SECRET);


    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // { id, role, iat, exp }
        next();
    } catch (err) {
        console.error("JWT verification error:", err.message);
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};
