# Spa & Wellness Landing Page

This is a code bundle for Spa & Wellness Landing Page. The original project is available at https://www.figma.com/design/lw1SGnUk9gXEDdn2kQnU5R/Spa---Wellness-Landing-Page.

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

## Backend Microservices

This project now includes a backend microservices architecture in the `backend/` directory:

### Services
- **API Gateway** - Entry point for all client requests (Port: 3001)
- **User Service** - User management and authentication (Port: 3002)
- **Booking Service** - Appointment scheduling and management (Port: 3003)
- **Service Catalog Service** - Spa services and treatments (Port: 3004)
- **Notification Service** - Email, SMS, and push notifications (Port: 3005)
- **Payment Service** - Process transactions and handle refunds (Port: 3006)
- **Review Service** - Customer testimonials and ratings (Port: 3007)
- **Admin Service** - Dashboard and analytics (Port: 3008)
- **Search Service** - Enhanced search capabilities (Port: 3009)

### Starting the Backend

You can start all services using Docker:
```bash
docker-compose up
```

Or start individual services:
```bash
cd backend/user-service
npm run dev
```

### Health Checks

Each service has a `/health` endpoint to check its status.

### Database Setup

Each service has its own PostgreSQL database with initialization scripts. The databases are automatically created and initialized when running with Docker Compose.