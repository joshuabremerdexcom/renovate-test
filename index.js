const express = require("express");
const axios = require("axios");
const _ = require("lodash");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from renovate-test!");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
