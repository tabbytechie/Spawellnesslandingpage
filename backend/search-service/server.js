const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 3009;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', service: 'Search Service' });
});

// Search routes
app.get('/', (req, res) => {
  res.json({ message: 'Search services and content' });
});

app.post('/index', (req, res) => {
  res.json({ message: 'Index new content for search' });
});

app.delete('/index/:id', (req, res) => {
  res.json({ message: `Remove content with ID: ${req.params.id} from search index` });
});

app.listen(PORT, () => {
  console.log(`Search Service running on port ${PORT}`);
});