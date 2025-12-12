const express = require('express');
const router = express.Router();

// Auth routes
router.post('/register', (req, res) => {
  res.json({ message: 'Register new user' });
});

router.post('/login', (req, res) => {
  res.json({ message: 'User login' });
});

router.post('/logout', (req, res) => {
  res.json({ message: 'User logout' });
});

module.exports = router;