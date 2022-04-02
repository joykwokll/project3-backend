// =======================================
//              DEPENDENCIES
// =======================================
require('dotenv').config()
const log = require("debug")("paper-trading:server")
const express = require("express");
const mongoose = require("mongoose");
const Holiday = require("./models/Holiday")
const HolidayController = require("./controllers/holidayController")

const app = express();
const PORT = process.env.PORT ?? 8000;
const MONGODB_URI = process.env.MONGODB_URI ?? "mongodb://localhost:27017/holidays"

// Error / Disconnection
mongoose.connection.on("error", (err) =>
  console.log(err.message + " is Mongod not running?")
);
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));

//...farther down the page

mongoose.connect("mongodb://localhost:27017/holidays", {
  useNewUrlParser: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongoose...");
});

app.use("/api/holidays", HolidayController)

app.use(express.urlencoded({extended:false}));

app.get("/", (req, res) => {
  res.send("Hello2");
});



app.listen(PORT, () => {
  console.log("I am listening");
});
