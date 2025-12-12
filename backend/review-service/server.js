const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 3007;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', service: 'Review Service' });
});

// Review routes
app.get('/', (req, res) => {
  res.json({ message: 'Get all reviews' });
});

app.post('/', (req, res) => {
  res.status(201).json({ message: 'Create new review' });
});

app.get('/:id', (req, res) => {
  res.json({ message: `Get review with ID: ${req.params.id}` });
});

app.put('/:id', (req, res) => {
  res.json({ message: `Update review with ID: ${req.params.id}` });
});

app.delete('/:id', (req, res) => {
  res.json({ message: `Delete review with ID: ${req.params.id}` });
});

app.listen(PORT, () => {
  console.log(`Review Service running on port ${PORT}`);
});