const express = require("express");
// Allows usage of routes via express.Router method
const router = express.Router();

// Route HTTP Requests
router.get("/", (req, res) => {
  res.send("Sending user info...");
});

router.post("/create", (req, res) => {
  res.send("Creating a new user...");
});

module.exports = router;
