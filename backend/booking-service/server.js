const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 3003;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', service: 'Booking Service' });
});

// Booking routes
app.get('/', (req, res) => {
  res.json({ message: 'Get all bookings' });
});

app.post('/', (req, res) => {
  res.status(201).json({ message: 'Create new booking' });
});

app.get('/:id', (req, res) => {
  res.json({ message: `Get booking with ID: ${req.params.id}` });
});

app.put('/:id', (req, res) => {
  res.json({ message: `Update booking with ID: ${req.params.id}` });
});

app.delete('/:id', (req, res) => {
  res.json({ message: `Delete booking with ID: ${req.params.id}` });
});

app.listen(PORT, () => {
  console.log(`Booking Service running on port ${PORT}`);
});