import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentConfirmation = ({ checkoutData }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cashOnDelivery, setCashOnDelivery] = useState(false);
  const navigate = useNavigate();

  const handlePayment = async (e) => {
    e.preventDefault();

    const paymentData = {
      ...checkoutData,
      paymentMethod: checkoutData.paymentMethod,
      cardDetails: checkoutData.paymentMethod !== 'cash' ? { cardNumber, expiryDate, cvv } : null,
      cashOnDelivery: checkoutData.paymentMethod === 'cash' ? cashOnDelivery : null
    };

    try {
      const response = await fetch('http://localhost:3000/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Payment successful:', data);
        navigate('/success');
      } else {
        const error = await response.json();
        console.error('Payment error:', error.message);
      }
    } catch (error) {
      console.error('Payment error:', error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-2xl font-bold">Payment Confirmation</h2>
        <form onSubmit={handlePayment}>
          {checkoutData.paymentMethod !== 'cash' ? (
            <>
              <div className="mb-4">
                <label htmlFor="cardNumber" className="block mb-2">Card Number:</label>
                <input
                  type="text"
                  id="cardNumber"
                  className="w-full p-2 border rounded-md"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="expiryDate" className="block mb-2">Expiry Date:</label>
                <input
                  type="text"
                  id="expiryDate"
                  className="w-full p-2 border rounded-md"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="cvv" className="block mb-2">CVV:</label>
                <input
                  type="text"
                  id="cvv"
                  className="w-full p-2 border rounded-md"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  required
                />
              </div>
            </>
          ) : (
            <div className="mb-4">
              <label className="block mb-2">Cash on Delivery:</label>
              <input
                type="checkbox"
                checked={cashOnDelivery}
                onChange={(e) => setCashOnDelivery(e.target.checked)}
                required
              />
              <span className="ml-2">I agree to pay upon delivery</span>
            </div>
          )}
          <button type="submit" className="w-full py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600">
            Confirm Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentConfirmation;
