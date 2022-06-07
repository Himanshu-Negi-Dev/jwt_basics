const express = require('express');
const { login, dashboardController } = require('../controllers/main');
const router = express.Router();

router.post('/', login);
router.get('/dashboard', dashboardController)

module.exports = router;