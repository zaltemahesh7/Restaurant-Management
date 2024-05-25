const Checkout = require('../models/Checkout');

exports.processCheckout = async (req, res) => {
  const { name, email, address, paymentMethod } = req.body;

  if (!name || !email || !address || !paymentMethod) {
    return res.status(400).json({ message: 'Please fill out all required fields.' });
  }

  const newCheckout = new Checkout({
    name,
    email,
    address,
    paymentMethod
  });

  try {
    const savedCheckout = await newCheckout.save();
    res.status(200).json({ message: 'Checkout successful', checkout: savedCheckout });
  } catch (error) {
    console.error('Error saving checkout data:', error.message);
    res.status(500).json({ message: 'Checkout failed. Please try again.' });
  }
};
