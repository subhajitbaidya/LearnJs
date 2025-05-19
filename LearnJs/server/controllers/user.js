const User = require("../models/user.js");

async function handleUserLogin(req, res) {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json("login error");

  const available = await User.findOne({ email });
  if (available)
    return res.status(400).json({ error: "User already registered" });

  try {
    const newUser = await User.create({
      email: email,
      password: password,
    });
    res.status(201).json({
      message: newUser,
    });
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  handleUserLogin,
};
