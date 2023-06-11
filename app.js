const bodyParser = require("body-parser");
const express = require("express");

const sellersRoutes = require("./routes/sellers-routes");

const app = express();

app.use('/buy',sellersRoutes);

app.listen(5000);
