// =======================================
//              DEPENDENCIES
// =======================================
require('dotenv').config()
const log = require("debug")("paper-trading:server")
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT ?? 8000;


app.use(express.urlencoded({extended:false}));

app.get("/", (req, res) => {
  res.send("Hello");
});



app.listen(PORT, () => {
  console.log("I am listening");
});
