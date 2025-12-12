const express = require('express');
const router = express.Router();

// Payment routes
router.get('/', (req, res) => {
  res.json({ message: 'Get all payments' });
});

router.post('/', (req, res) => {
  res.status(201).json({ message: 'Process new payment' });
});

router.get('/:id', (req, res) => {
  res.json({ message: `Get payment with ID: ${req.params.id}` });
});

router.put('/:id', (req, res) => {
  res.json({ message: `Update payment with ID: ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
  res.json({ message: `Delete payment with ID: ${req.params.id}` });
});

module.exports = router;