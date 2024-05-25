import React, { useState } from 'react';
import Menu from './Menu';
// import OrderSummary from './OrderSummary';
// import Header from './Header';
// import Footer from './Footer';

const menuItems = [
  { id: 1, name: 'Paneer Butter Masala', price: 200 },
  { id: 2, name: 'Veg Biryani', price: 150 },
  { id: 3, name: 'Aloo Gobi', price: 120 },
  // Add more menu items here
];

const OrderOnline = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + quantity }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const updateQuantity = (itemId, quantity) => {
    setCart(cart.map(cartItem =>
      cartItem.id === itemId
        ? { ...cartItem, quantity }
        : cartItem
    ));
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter(cartItem => cartItem.id !== itemId));
  };

  return (
    <div>
      {/* <Header /> */}
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Order Online</h1>
        <div className="flex justify-center mb-8">
          <div className="w-[1200px]">
            <h2 className="text-2xl font-semibold mb-4">Menu</h2>
            {menuItems.map(item => (
              <Menu key={item.id} item={item} addToCart={addToCart} />
            ))}
          </div>
          <div className="w-1/2">
            {/* <OrderSummary
              cart={cart}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            /> */}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default OrderOnline;
