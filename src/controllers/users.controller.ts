const bcrypt = require("bcrypt");
const User = require("../models");

export const getUsers = async (req, res) => {
  try {
    const users = await User.find().exec();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const createUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ username }).exec();

    if (existingUser) {
      return res.status(404).send({ error: "this username is already used" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      username,
      email,
      password: hashedPassword,
    });

    await user.save();
    res.status(201).send({ message: "User created successfully" });
  } catch (err) {
    res.status(500).send({ error: "Internal server error" });
  }
};

export const deleteUser = async (req, res) => {
  const username = req.params.username;

  try {
    const deletedUser = await User.findOneAndDelete({ username: username });

    if (!deletedUser) {
      return res.status(404).send({ error: "User not found" });
    }

    res.status(200).send({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).send({ error: err });
  }
};

export const getUserByUserName = async (req, res) => {
  const username = req.params.username;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }

    res.status(200).send(user);
  } catch (err) {
    return res.status(500).json({ error: "Internal server error" });
  }
};
