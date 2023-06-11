const bodyParser = require("body-parser");
const express = require("express");

const usersRoutes = require("./routes/users-routes");

const app = express();

app.use(usersRoutes);

app.listen(5000);
