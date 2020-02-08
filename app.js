const express = require("express");
const bodyParser = require("body-parser");
require("dotenv/config");

const app = express();

const mongoose = require("mongoose");

const userRoutes = require("./routes/users");
app.use(bodyParser.json());

app.use("/api/users", userRoutes);

//ROUTES

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log("db connected");
});
app.listen(3000);
