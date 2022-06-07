const express = require('express');
const { login, dashboardController } = require('../controllers/main');
const { authMiddleware } = require('../middleware/auth');
const router = express.Router();

router.post('/', login);
router.get('/dashboard', authMiddleware, dashboardController)

module.exports = router;