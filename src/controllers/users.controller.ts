const User = require("../models");

export const getUsers = (req, res) => {
  console.log("getUsers");
  res.json(User);
};

export const createUser = () => {
  console.log("createuser");
};

export const deleteUser = () => {
  console.log("deleteUSer");
};

export const updateUser = () => {
  console.log("update user");
};

export const getUserByUserName = () => {
  console.log("getUserByUsername");
};
