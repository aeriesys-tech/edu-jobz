const jwt = require("jsonwebtoken");
const { EmployerToken } = require("../../models");

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
    const employerToken = await EmployerToken.findOne({
      where: {
        token,
        employer_id: decoded.employer_id,
      },
    });

    if (!employerToken) {
      console.log("Token not found in database.");
      return res.status(401).json({ error: "Invalid or expired token." });
    }

    const currentDate = new Date();
    const expireDate = new Date(employerToken.expire_at);

    if (currentDate > expireDate) {
      console.log("Token expired.");
      return res.status(401).json({ error: "Token expired." });
    }

    console.log("Token valid.");
    // Attach user info to response locals
    req.employer = decoded;
    res.locals.employer = decoded; // Store the decoded user data in res.locals
    next();
  } catch (error) {
    console.error("Token verification error:", error.message);
    res.status(400).json({ error: "Invalid token." });
  }
};

module.exports = authMiddleware;
