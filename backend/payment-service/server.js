const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 3006;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', service: 'Payment Service' });
});

// Payment routes
app.get('/', (req, res) => {
  res.json({ message: 'Get all payments' });
});

app.post('/', (req, res) => {
  res.status(201).json({ message: 'Process new payment' });
});

app.get('/:id', (req, res) => {
  res.json({ message: `Get payment with ID: ${req.params.id}` });
});

app.put('/:id', (req, res) => {
  res.json({ message: `Update payment with ID: ${req.params.id}` });
});

app.delete('/:id', (req, res) => {
  res.json({ message: `Delete payment with ID: ${req.params.id}` });
});

app.listen(PORT, () => {
  console.log(`Payment Service running on port ${PORT}`);
});