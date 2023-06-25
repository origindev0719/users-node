const express = require("express");
const router = express.Router();
const userController = require("../controllers/users.controller");

router.get("/", userController.getUsers);
router.get("/:username", userController.getUserByUserName);
router.post("/", userController.createUser);
router.delete("/:username", userController.deleteUser);

module.exports = router;
