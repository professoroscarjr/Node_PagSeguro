const { createSession, createTransaction } = require('../services/pagseguroService');

async function getSession(req, res) {
  try {
    const sessionId = await createSession();
    res.json({ sessionId });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar sessão', detail: err.message });
  }
}

async function processPayment(req, res) {
  try {
    const { token, senderName, senderEmail, amount } = req.body;

    const payload = {
      email: process.env.PAGSEGURO_EMAIL,
      token: process.env.PAGSEGURO_TOKEN,
      paymentMode: 'default',
      paymentMethod: 'creditCard',
      receiverEmail: process.env.PAGSEGURO_EMAIL,
      currency: 'BRL',
      itemId1: '0001',
      itemDescription1: 'Produto Teste',
      itemAmount1: amount,
      itemQuantity1: '1',
      senderName,
      senderEmail,
      senderCPF: '99999999999',
      senderAreaCode: '11',
      senderPhone: '999999999',
      billingAddressStreet: 'Rua Teste',
      billingAddressNumber: '100',
      billingAddressDistrict: 'Centro',
      billingAddressPostalCode: '01001000',
      billingAddressCity: 'São Paulo',
      billingAddressState: 'SP',
      billingAddressCountry: 'BRA',
      creditCardToken: token,
      installmentQuantity: '1',
      installmentValue: amount,
      creditCardHolderName: senderName,
      creditCardHolderCPF: '99999999999',
      creditCardHolderBirthDate: '1980-01-01',
      creditCardHolderAreaCode: '11',
      creditCardHolderPhone: '999999999',
      shippingAddressRequired: 'false'
    };

    const result = await createTransaction(payload);
    res.type('text/xml').send(result);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao processar pagamento', detail: err.message });
  }
}

module.exports = {
  getSession,
  processPayment,
};
