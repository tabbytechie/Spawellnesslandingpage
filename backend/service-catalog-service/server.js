const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 3004;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', service: 'Service Catalog Service' });
});

// Service catalog routes
app.get('/', (req, res) => {
  res.json({ message: 'Get all services' });
});

app.post('/', (req, res) => {
  res.status(201).json({ message: 'Create new service' });
});

app.get('/:id', (req, res) => {
  res.json({ message: `Get service with ID: ${req.params.id}` });
});

app.put('/:id', (req, res) => {
  res.json({ message: `Update service with ID: ${req.params.id}` });
});

app.delete('/:id', (req, res) => {
  res.json({ message: `Delete service with ID: ${req.params.id}` });
});

app.listen(PORT, () => {
  console.log(`Service Catalog Service running on port ${PORT}`);
});