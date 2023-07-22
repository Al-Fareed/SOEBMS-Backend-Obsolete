const bodyParser = require("body-parser");
const express = require("express");

const home = require("./routes/home-routes");
const sell = require("./routes/sell-routes");
const buy = require("./routes/buy-routes");
const { default: mongoose } = require("mongoose");

const app = express();

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