const express = require("express");
const router = express.Router();
const users_controller = require("../controllers/users");
// get user by email
router.get("/:email", users_controller.getByEmail);

module.exports = router;