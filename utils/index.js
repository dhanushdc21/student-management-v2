// utils/index.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Middleware setup
app.use(bodyParser.json());

// Database connection (assuming you are using mongoose)
mongoose.connect('mongodb://localhost:27017/Classroom', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Import and use the main router
const mainRouter = require('../routers/index');
app.use('/api', mainRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
