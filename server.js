require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect to database
connectDB();

// Body parser
app.use(express.json());

// Routes
app.use('/api/recipes', require('./routes/recipeRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 