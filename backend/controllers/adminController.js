const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");

// POST Login
const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }
};  



module.exports = {
  login,
};
