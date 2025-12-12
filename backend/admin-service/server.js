const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 3008;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', service: 'Admin Service' });
});

// Admin routes
app.get('/dashboard', (req, res) => {
  res.json({ message: 'Get dashboard data' });
});

app.get('/analytics', (req, res) => {
  res.json({ message: 'Get analytics data' });
});

app.get('/staff', (req, res) => {
  res.json({ message: 'Get all staff members' });
});

app.post('/staff', (req, res) => {
  res.status(201).json({ message: 'Create new staff member' });
});

app.listen(PORT, () => {
  console.log(`Admin Service running on port ${PORT}`);
});