const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const Module = require('../models/Module');
const router = express.Router();

// Register a user
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ name, email, password: hashedPassword });
  await newUser.save();
  res.status(201).json({ name, email });
});

// Login a user
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && await bcrypt.compare(password, user.password)) {
    res.json({ _id: user._id, name: user.name, progress: user.progress });
  } else {
    res.status(401).send('Invalid email or password');
  }
});

// Fetch learning modules
router.get('/modules', async (req, res) => {
  const modules = await Module.find();
  res.json(modules);
});

// Complete a module and update progress
router.post('/complete/:moduleId', async (req, res) => {
  const { userId } = req.body;
  const user = await User.findById(userId);
  if (user) {
    user.progress += 10; // Increase progress by 10% per completed module
    await user.save();
    res.json({ progress: user.progress });
  } else {
    res.status(404).send('User not found');
  }
});

module.exports = router;
