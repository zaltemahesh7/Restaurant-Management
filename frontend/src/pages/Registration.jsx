import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Store/auth';

function Registration() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

    // To Redirect to the login Page for login.
    const navigate = useNavigate();
    const { StoreToken } = useAuth()


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, phone, email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                // alert('Registration success');
                if (data.msg !== 'User Exist') {
                    console.log('Registration successful:', data);
                    StoreToken(data.token)
                    navigate('/')
                }
                else console.log({ msg: "Exist" });
                // Here you can handle successful login, e.g., redirect to dashboard
            }


        } catch (error) {
            console.error('Registration error:', error);
            setError('Invalid username or password');
            throw new Error('Invalid username or password');
        }
    };


    return (
        <div className='flex flex-col w-full gap-8 justify-center items-center '>
            <div >
                <h1 className='text-4xl'>Registration Page</h1>
            </div>
            <div className='w-[80%]'>
                <hr className='border-gray-600' />
            </div>
            <div className='flex flex-col w-full'>
                <form method='POST' onSubmit={handleSubmit} className='flex flex-col gap-4 w-full items-center justify-center'>
                    <label htmlFor="username">UserName</label>
                    <input className='border px-4 py-2 rounded m-0 w-96' value={username}
                        onChange={(e) => setUsername(e.target.value)} placeholder='Username' type="text" id='username' name='username' required />

                    <label htmlFor="email">Email</label>
                    <input className='border px-4 py-2 rounded m-0 w-96' placeholder='Email' value={email}
                        onChange={(e) => setEmail(e.target.value)} type="email" id='email' name='email' />

                    <label htmlFor="phone">Phone</label>
                    <input className='border px-4 py-2 rounded m-0 w-96' placeholder='Phone' value={phone}
                        onChange={(e) => setPhone(e.target.value)} type="Number" name='phone' id='phone' />

                    <label htmlFor="password">Password</label>
                    <input className='border px-4 py-2 rounded m-0 w-96' value={password}
                        onChange={(e) => setPassword(e.target.value)} placeholder='Password' type="password" name='password' id='password' />

                    <button type="submit" className='box-shadow px-4 py-2 m-4 bg-red-200 rounded'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Registration;