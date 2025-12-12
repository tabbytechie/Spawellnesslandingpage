const express = require('express');
const router = express.Router();

// Health check for all services
router.get('/', (req, res) => {
  // In a real implementation, this would check the health of all microservices
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    services: {
      'api-gateway': 'healthy',
      'user-service': 'unknown',
      'booking-service': 'unknown',
      'service-catalog-service': 'unknown',
      'notification-service': 'unknown'
    }
  });
});

module.exports = router;