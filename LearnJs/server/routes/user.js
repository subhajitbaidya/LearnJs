const express = require("express");
const router = express.Router();
const { handleUserLogin } = require("../controllers/user");

router.post("/login", handleUserLogin);

module.exports = router;
