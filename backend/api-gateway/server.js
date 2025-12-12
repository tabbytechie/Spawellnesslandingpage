const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', service: 'API Gateway' });
});

// User Service Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));

// Service Catalog Routes
app.use('/api/services', require('./routes/serviceRoutes'));

// Booking Routes
app.use('/api/bookings', require('./routes/bookingRoutes'));

// Notification Routes
app.use('/api/notifications', require('./routes/notificationRoutes'));

// Payment Routes
app.use('/api/payments', require('./routes/paymentRoutes'));

// Review Routes
app.use('/api/reviews', require('./routes/reviewRoutes'));

// Admin Routes
app.use('/api/admin', require('./routes/adminRoutes'));

// Search Routes
app.use('/api/search', require('./routes/searchRoutes'));

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});