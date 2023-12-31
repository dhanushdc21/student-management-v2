const express = require('express');
const router = express.Router();

const detailsRouter = require('./details');
// Import other routers if needed

router.use('/api', detailsRouter); // Mount the detailsRouter at /api

module.exports = router;
