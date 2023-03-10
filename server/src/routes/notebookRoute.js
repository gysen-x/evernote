const express = require('express');

const router = express.Router();

const { getNotebooks } = require('../controllers/authControllers');

router.get('/', getNotebooks);

module.exports = router;
