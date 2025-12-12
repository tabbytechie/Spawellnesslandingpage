const express = require('express');
const router = express.Router();

// Service catalog routes
router.get('/', (req, res) => {
  res.json({ message: 'Get all services' });
});

router.post('/', (req, res) => {
  res.status(201).json({ message: 'Create new service' });
});

router.get('/:id', (req, res) => {
  res.json({ message: `Get service with ID: ${req.params.id}` });
});

router.put('/:id', (req, res) => {
  res.json({ message: `Update service with ID: ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
  res.json({ message: `Delete service with ID: ${req.params.id}` });
});

module.exports = router;