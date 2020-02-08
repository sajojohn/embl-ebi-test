const express = require("express");

require("dotenv/config");

const app = express();

const mongoose = require("mongoose");

const userRoutes = require("./routes/users");

app.use("/api/users", userRoutes);

app.use("/", () => {
  console.log("middleware running");
});

//ROUTES

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log("db connected");
});
app.listen(3000);
