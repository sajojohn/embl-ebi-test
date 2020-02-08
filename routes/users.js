const express = require("express");
const router = express.Router();
const User = require("../model/User");

router.get("/", (req, res) => {
  res.send("working on it");
});

router.post("/", (req, res) => {
  console.log("addition user", req.body);
});

router.put("/", (req, res) => {
  console.log("updating user", req.body);
});

router.delete("/", (req, res) => {
  console.log("deleting user");
});
module.exports = router;
