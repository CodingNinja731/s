require('dotenv').config(); // Load .env file at the very top
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig');

// --- Environment Variable Checks ---
if (!process.env.JWT_SECRET || !process.env.MONGO_URI) {
  console.error('FATAL ERROR: JWT_SECRET and MONGO_URI must be defined.');
  process.exit(1);
}
// ------------------------------------

const app = express();
const PORT = process.env.PORT || 5000;

// --- Middleware Setup ---
// Security Headers
app.use(helmet());

// CORS Configuration
const corsOptions = {
  origin: process.env.NODE_ENV === 'production'
    ? process.env.FRONTEND_URL
    : '*', // Allow all origins in development
};
app.use(cors(corsOptions));

// Request Logging
app.use(morgan('combined'));

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

// Body Parser
app.use(express.json());
// -------------------------

// --- Database Connection ---
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected successfully.'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });
// -------------------------

// --- API Docs ---
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// ----------------

// --- Routes ---
app.get('/', (req, res) => {
  res.send('Student Guidance Platform API is running!');
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.use('/api/auth', require('./routes/auth'));
app.use('/api/colleges', require('./routes/colleges'));
app.use('/api/courses', require('./routes/courses'));
app.use('/api/quizzes', require('./routes/quizzes'));
// ----------------

// --- Error Handling Middleware ---
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message
  });
});
// -------------------------------

// --- Server Startup ---
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
// --------------------

module.exports = app;
