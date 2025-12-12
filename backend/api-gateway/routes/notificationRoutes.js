const express = require('express');
const router = express.Router();

// Notification routes
router.post('/email', (req, res) => {
  res.json({ message: 'Send email notification' });
});

router.post('/sms', (req, res) => {
  res.json({ message: 'Send SMS notification' });
});

router.post('/push', (req, res) => {
  res.json({ message: 'Send push notification' });
});

module.exports = router;