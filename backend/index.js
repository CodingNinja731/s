const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');

// --- Security Check for Environment Variables ---
if (!process.env.JWT_SECRET) {
  console.error('FATAL ERROR: JWT_SECRET is not defined.');
  process.exit(1); // 1 indicates an error exit
}
// ---------------------------------------------

const app = express();
const PORT = process.env.PORT || 5000;

// --- Database Connection ---
// Replace with your MongoDB connection string.
// It's recommended to use environment variables for this.
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/student-guidance';

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected successfully.'))
  .catch(err => console.error('MongoDB connection error:', err));
// -------------------------

// Middleware
app.use(cors());
app.use(express.json());

// --- Routes ---
// Define a root route for basic testing
app.get('/', (req, res) => {
  res.send('Student Guidance Platform API is running!');
});

// Import and use routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/colleges', require('./routes/colleges'));
app.use('/api/courses', require('./routes/courses'));
app.use('/api/quizzes', require('./routes/quizzes'));

// Start server only if this file is run directly
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;
