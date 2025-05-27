const axios = require('axios');
require('dotenv').config();

const PAGSEGURO_API = 'https://ws.sandbox.pagseguro.uol.com.br';

async function createSession() {
  const res = await axios.post(`${PAGSEGURO_API}/v2/sessions`, null, {
    params: {
      email: process.env.PAGSEGURO_EMAIL,
      token: process.env.PAGSEGURO_TOKEN,
    },
  });
  return res.data.match(/<id>(.+)<\/id>/)[1];
}

async function createTransaction(payload) {
  const res = await axios.post(`${PAGSEGURO_API}/v2/transactions`, new URLSearchParams(payload), {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  });
  return res.data;
}

module.exports = {
  createSession,
  createTransaction,
};
