const { Router } = require("express");
const express = require("express");

// functions can be declared and used specifically in routes route.use(function)
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Users List");
});
router.get("/new", (req, res) => {
  res.send("User New Form");
});

router.post("/", (req, res) => {
  res.send("Create User");
});

router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user);
    res.send(`Get user with ID: ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update user with ID: ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete user with ID: ${req.params.id}`);
  });
const users = [{ name: "Kyle" }, { name: "John" }];
// param is on version of middleware
router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});

module.exports = router;
