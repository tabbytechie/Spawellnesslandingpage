const express = require('express');
const router = express.Router();

// Review routes
router.get('/', (req, res) => {
  res.json({ message: 'Get all reviews' });
});

router.post('/', (req, res) => {
  res.status(201).json({ message: 'Create new review' });
});

router.get('/:id', (req, res) => {
  res.json({ message: `Get review with ID: ${req.params.id}` });
});

router.put('/:id', (req, res) => {
  res.json({ message: `Update review with ID: ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
  res.json({ message: `Delete review with ID: ${req.params.id}` });
});

module.exports = router;