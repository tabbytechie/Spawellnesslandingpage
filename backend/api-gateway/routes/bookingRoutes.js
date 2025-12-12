const express = require('express');
const router = express.Router();

// Booking routes
router.get('/', (req, res) => {
  res.json({ message: 'Get all bookings' });
});

router.post('/', (req, res) => {
  res.status(201).json({ message: 'Create new booking' });
});

router.get('/:id', (req, res) => {
  res.json({ message: `Get booking with ID: ${req.params.id}` });
});

router.put('/:id', (req, res) => {
  res.json({ message: `Update booking with ID: ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
  res.json({ message: `Delete booking with ID: ${req.params.id}` });
});

module.exports = router;