const jwt = require("jsonwebtoken");
const { AdminToken } = require("../../models");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  if (!token) {
    console.log("No token provided.");
    return res.status(401).json({ error: "Access denied. No token provided." });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Check if the token exists in the database and is not expired
    const adminToken = await AdminToken.findOne({
      where: {
        token,
        admin_id: decoded.admin_id,
      },
    });

    if (!adminToken) {
      console.log("Token not found in database.");
      return res.status(401).json({ error: "Invalid or expired token." });
    }

    const currentDate = new Date();
    const expireDate = new Date(adminToken.expire_at);

    if (currentDate > expireDate) {
      console.log("Token expired.");
      return res.status(401).json({ error: "Token expired." });
    }

    console.log("Token valid.");
    // Attach user info to response locals
    req.admin = decoded;
    res.locals.admin = decoded; // Store the decoded user data in res.locals
    next();
  } catch (error) {
    console.error("Token verification error:", error.message);
    res.status(400).json({ error: "Invalid token." });
  }
};

module.exports = authMiddleware;
