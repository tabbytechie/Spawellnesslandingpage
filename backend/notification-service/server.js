const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 3005;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', service: 'Notification Service' });
});

// Notification routes
app.post('/email', (req, res) => {
  res.json({ message: 'Send email notification' });
});

app.post('/sms', (req, res) => {
  res.json({ message: 'Send SMS notification' });
});

app.post('/push', (req, res) => {
  res.json({ message: 'Send push notification' });
});

app.listen(PORT, () => {
  console.log(`Notification Service running on port ${PORT}`);
});