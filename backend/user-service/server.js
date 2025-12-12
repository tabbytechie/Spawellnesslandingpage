const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', service: 'User Service' });
});

// User routes
app.get('/profile', (req, res) => {
  res.json({ message: 'Get user profile' });
});

app.put('/profile', (req, res) => {
  res.json({ message: 'Update user profile' });
});

app.listen(PORT, () => {
  console.log(`User Service running on port ${PORT}`);
});