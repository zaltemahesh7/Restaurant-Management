import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleCheckout = async (e) => {
    e.preventDefault();

    if (!name || !email || !address) {
      setError('Please fill out all required fields.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, address, paymentMethod }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Checkout successful:', data);

        // Navigate to the order confirmation page or home page
        navigate('/confirmation');
      } else {
        setError('Checkout failed. Please try again.');
      }
    } catch (error) {
      console.error('Checkout error:', error.message);
      setError('Checkout error. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-10 bg-transparent">
      <div className="grid gap-6 sm:w-[440px]">
        <h2 className="text-5xl font-bold bg-transparent">Checkout</h2>
        <form onSubmit={handleCheckout} className="bg-transparent">
          <div className="flex flex-col bg-transparent">
            <label htmlFor="name" className="bg-transparent">Name:</label>
            <input
              className="p-2 border my-2 rounded-md bg-transparent"
              type="text"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col bg-transparent">
            <label htmlFor="email" className="bg-transparent">Email:</label>
            <input
              className="p-2 border my-2 rounded-md bg-transparent"
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col bg-transparent">
            <label htmlFor="address" className="bg-transparent">Address:</label>
            <input
              className="p-2 border my-2 rounded-md bg-transparent"
              type="text"
              id="address"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col bg-transparent">
            <label htmlFor="paymentMethod" className="bg-transparent">Payment Method:</label>
            <select
              className="p-2 border my-2 rounded-md bg-transparent"
              id="paymentMethod"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="Credit Card">Credit Card</option>
              <option value="Debit Card">Debit Card</option>
              <option value="PayPal">PayPal</option>
              <option value="Net Banking">Net Banking</option>
            </select>
          </div>
          <div className="bg-transparent">
            <button type="submit" className="bg-pink-600 px-2 py-1 rounded-md">Checkout</button>
          </div>
          {error && <div style={{ color: 'red' }}>{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default Checkout;
