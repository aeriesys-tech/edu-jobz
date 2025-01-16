// const express = require("express");
// require("dotenv").config();
// const bodyParser = require("body-parser");
// const routes = require("./routes");
// const cors = require("cors");
// const path = require("path");

// const app = express();
// const PORT = process.env.PORT;

// app.use(cors());
// app.use(bodyParser.json());

// app.use("/api/", routes);
// app.use(
//   "/uploads/avatars",
//   express.static(path.join(__dirname, "uploads/avatars"))
// );

// app.listen(PORT, () => {
//   console.log(`Server is running on port no  ${PORT}`);
// });

const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const routes = require("./routes/index");
// Set default values for environment variables
const PORT = process.env.APP_PORT || 3000;
const URL = process.env.APP_URL || "http://192.168.0.217:3000/api";
// CORS configuration
const corsOptions = {
  origin: "*", // Allow all origins. Replace '*' with specific domains for more control.
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: ["Content-Type", "Authorization"],
};
// Apply CORS middleware
app.use(cors(corsOptions));
// Middleware to parse incoming requests
app.use(express.json()); // Parse JSON payloads
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded payloads
// Root route
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
app.use("/api/", routes);
// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});
// Start the server
app.listen(PORT, () => {
  console.log(`PERP listening at ${URL}:${PORT}`);
});
// Export the app for testing or further use
module.exports = app;
