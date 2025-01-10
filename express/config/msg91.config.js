require("dotenv").config();
module.exports = {
  authKey: process.env.MSG91_AUTH_KEY,
  url: process.env.MSG91_API_URL,
  sender_id: process.env.MSG91_SENDER_ID,
  temp_id: process.env.MSG91_TEMP_ID,
};
