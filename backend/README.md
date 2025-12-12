# Spa & Wellness Backend Microservices

This directory contains the backend microservices for the Spa & Wellness application.

## Services

1. **API Gateway** - Entry point for all client requests (Port: 3001)
2. **User Service** - User management and authentication (Port: 3002)
3. **Booking Service** - Appointment scheduling and management (Port: 3003)
4. **Service Catalog Service** - Spa services and treatments (Port: 3004)
5. **Notification Service** - Email, SMS, and push notifications (Port: 3005)
6. **Payment Service** - Process transactions and handle refunds (Port: 3006)
7. **Review Service** - Customer testimonials and ratings (Port: 3007)
8. **Admin Service** - Dashboard and analytics (Port: 3008)
9. **Search Service** - Enhanced search capabilities (Port: 3009)

## Getting Started

1. Install dependencies for each service:
   ```bash
   cd backend
   npm install
   ```

2. Start all services using Docker:
   ```bash
   docker-compose up
   ```

3. Or start individual services:
   ```bash
   cd backend/user-service
   npm run dev
   ```

## Service Ports

- API Gateway: 3001
- User Service: 3002
- Booking Service: 3003
- Service Catalog Service: 3004
- Notification Service: 3005
- Payment Service: 3006
- Review Service: 3007
- Admin Service: 3008
- Search Service: 3009

## Health Checks

Each service has a `/health` endpoint to check its status.

## Database Setup

Each service has its own PostgreSQL database with initialization scripts in the `init.sql` files. The databases are automatically created and initialized when running with Docker Compose.