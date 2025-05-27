const express = require('express');
const router = express.Router();
const { getSession, processPayment } = require('../controllers/paymentController');

router.get('/session', getSession);
router.post('/pagar', processPayment);

module.exports = router;
