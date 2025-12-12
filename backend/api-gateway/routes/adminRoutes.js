const express = require('express');
const router = express.Router();

// Admin routes
router.get('/dashboard', (req, res) => {
  res.json({ message: 'Get dashboard data' });
});

router.get('/analytics', (req, res) => {
  res.json({ message: 'Get analytics data' });
});

router.get('/staff', (req, res) => {
  res.json({ message: 'Get all staff members' });
});

router.post('/staff', (req, res) => {
  res.status(201).json({ message: 'Create new staff member' });
});

module.exports = router;