import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

// import home from "./routes/home-routes.js";
const home = require('./routes/home-routes.js')
const sell = require('./routes/sell.js')
// import sell from "./routes/sell-routes.js";
// import buy from "./routes/buy-page.js";
const buy  = require("./routes/buy-page.js");
const app = express();
app.use(bodyParser.json())
app.use('/',home);
app.use('/sell',sell);
app.use('/buy',buy);

mongoose
  .connect(
    "mongodb+srv://AlFareed:Oyl1MxjZiH5FY96l@cluster0.urwkxxh.mongodb.net/soebms?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to database ");
    app.listen(5000);
  })
  .catch(() => {
    console.log("Error in connecting");
  });