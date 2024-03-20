import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Invalid username or password');
      }

      const data = await response.json();
      console.log('Login successful:', data);
      // Here you can handle successful login, e.g., redirect to dashboard
    } catch (error) {
      console.error('Login error:', error.message);
      setError('Invalid username or password');
    }
  };

  const handleForgotPassword = () => {
    console.log('Forgot password clicked');
    // Here you can implement the logic for forgot password functionality
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </form>
      <div>
        <button onClick={handleForgotPassword}>Forgot Password?</button>
      </div>
    </div>
  );
};

export default Login;
