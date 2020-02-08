const express = require("express");
const router = express.Router();
const User = require("../model/User");

router.get("/", (req, res) => {
  User.find()
    .limit(2)
    .then((users) => res.json(users));
  // console.log(users);
  // res.json("workiung");
});

router.get("/:id", (req, res) => {
  // console.log(req.params.firstName);
  User.findById(req.params.id)
    .then((user) => res.status(200).json(user))
    .catch((err) => {
      console.log(err);
      res.status(400).send("error");
    });
});

router.get("/by-firstname/:fname", async (req, res) => {
  console.log("finding by name", req.params.fname);
  try {
    const user = await User.findOne({ firstName: req.params.fname });
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send("could not user with name " + req.params.fname);
  }
});

router.get("/by-lastname/:lname", async (req, res) => {
  console.log("finding by name", req.params.lname);
  try {
    const user = await User.findOne({ lastName: req.params.lname });
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send("could not user with name " + req.params.fname);
  }
});

router.get("/by-country/:country", async (req, res) => {
  console.log("finding by country", req.params.country);
  try {
    const user = await User.findOne({ country: req.params.country });
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send("could not user with country " + req.params.fname);
  }
});

router.post("/", (req, res) => {
  console.log("addition user", req.body);
  // const user = new User({ firstName: req.body.firstName, lastName: req.body.lastName, country: req.body.country, skills: req.body.skills });

  const user = new User({ ...req.body });
  console.log("user modal created ", user);
  user
    .save()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).send("error " + err.message);
    });
  // res.send("adding user");
});

router.patch("/:id", (req, res) => {
  console.log("updating user", req.body);
  User.updateOne({ _id: req.params.id }, req.body)
    .then((updated) => {
      console.log("updated ", updated);
      res.status(200).send(updated);
    })
    .catch((err) => {
      res.status(400).send("failed to update " + err.message);
    });
});

router.delete("/:userid", (req, res) => {
  console.log("deleting user " + req.params.userid);
  User.deleteOne({ _id: req.params.userid })
    .then((removed) => res.status(200).send(removed))
    .catch((err) => res.status(400).send("error " + err.message));
});
module.exports = router;
