const express = require("express");
const router = express.Router();
const userController = require("../controllers/users.controller");

router.get("/", userController.getUsers);
router.post("/", userController.createUser);
router.get("/:username", userController.getUserByUsername);

module.exports = router;
