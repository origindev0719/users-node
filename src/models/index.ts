import userSchema from "./user.model";
const mongoose = require("mongoose");

const UserModel = mongoose.model("User", userSchema, "Users");

module.exports = UserModel;
