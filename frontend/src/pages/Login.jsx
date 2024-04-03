import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

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
      // alert('Login success');
      navigate('/')
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
    <div className='grid gap-8 bg-transparent sm:w-96 sm:h-96 duration-75'>
      <h2 className=' text-5xl font-bold bg-transparent'>Login</h2>
      <form onSubmit={handleLogin} className='bg-transparent'>
        <div className='flex flex-col bg-transparent'>
          <label htmlFor="username" className='bg-transparent'>Username:</label>
          <input
            className='p-2 border m-2 rounded-md bg-transparent'
            type="text"
            id="username"
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className='flex flex-col bg-transparent'>
          <label htmlFor="password" className='bg-transparent'>Password:</label>
          <input
            className='p-2 border m-2 rounded-md bg-transparent'
            type="password"
            id="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className='bg-transparent'>
          <button type="submit" className=' bg-pink-600 px-2 py-1 rounded-md'>Login</button>
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </form>
      <div className='bg-transparent'>
        <button onClick={handleForgotPassword}>Forgot Password?</button>
      </div>
    </div>
  );
};

export default Login;