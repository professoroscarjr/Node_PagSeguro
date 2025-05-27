const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const paymentRoutes = require('./routes/paymentRoutes');
app.use('/', paymentRoutes);

// Servir frontend
app.use(express.static(path.join(__dirname, '..', 'client')));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
