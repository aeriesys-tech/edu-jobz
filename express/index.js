const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const routes = require("./routes");
const cors = require("cors");
const path = require("path");

// Require the token cleanup script
// require('./services/tokenCleanup');

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

app.use("/api/", routes);
app.use(
  "/uploads/avatars",
  express.static(path.join(__dirname, "uploads/avatars"))
);

app.listen(PORT, () => {
  console.log(`Server is running on port no  ${PORT}`);
});
