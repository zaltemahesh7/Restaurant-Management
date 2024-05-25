const mongoose = require('mongoose');

const checkoutSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  paymentMethod: { type: String, required: true }
});

const Checkout = mongoose.model('Checkout', checkoutSchema);

module.exports = Checkout;
