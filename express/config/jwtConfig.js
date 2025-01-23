require("dotenv").config();
module.exports = {
  jwt_constant: process.env.JWT_SECRET,
  jwt_expire: process.env.TOKEN_EXPIRY,
};
