import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from '../pages/Login';
import logo from '/LogoPlusText.svg'

function Navbar() {
  const [selected, setSelected] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);
  const [loginp, setLoginp] = useState(false)

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleLogin = () => {
    console.log('close');
  }

  const showLogin = (data) => {
    setLoginp(data)
  }

  return (
    <>
      <div className="top-port h-10 bg-[#ecd1bf] flex justify-between max-sm:hidden">
        <div className=' bg-transparent flex items-center justify-center gap-2 cursor-pointer ml-2'>
          <svg xmlns="http://www.w3.org/2000/svg" className='w-4 bg-transparent' viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
          <span className='bg-transparent'>310 West 14th North Street, NY</span>
        </div>
        <div className=' bg-transparent'>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" /></svg>
          </div>
        </div>
      </div>

      <nav className='flex justify-between z-10  p-4 overflow-hidden sticky top-0 my- bg-[#ffffff]'>
        <div className='flex items-center justify-between bg-transparent w-full'>
          <div className='mr-4 bg-transparent'>
            <Link to='/Home' className=' bg-transparent ' onClick={() => (setSelected('Home'))}>
              <img src={logo} className='bg-transparent' width='80px' />
            </Link>
          </div>
          <div className='md:flex hidden bg-transparent '>
            <Link to='/menu' className='mr-4 bg-transparent'>Menu</Link>
            <Link to='/aboutus' className='mr-4 bg-transparent'>About Us</Link>
            <Link to='/reservation' className='mr-4 bg-transparent'>Reservation</Link>
            <Link to='/contact' className='mr-4 bg-transparent'>Contact Us</Link>
            <Link to='/orderonline' className='mr-4 bg-transparent'>Order Online</Link>
            <Link to='/checkout' className='mr-4 bg-transparent'>Check Out</Link>
          </div>
          <div className='md:ml-4 max-sm:hidden'>
            <button onClick={() => showLogin(true)} className='border border-gray-500 bg-[#ffdfdf] rounded-md px-3 py-1'>Login</button>
          </div>
        </div>

        <div className='md:hidden'>
          <button onClick={toggleNavbar}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} grid gap-2`}>
          <ul className='flex flex-col mt-4'>
            <li className='hover:text-red-500 hover:underline'><Link to='/menu'>Menu</Link></li>
            <li className='hover:text-red-500 hover:underline'><Link to='/aboutus'>About Us</Link></li>
            <li className='hover:text-red-500 hover:underline'><Link to='/reservation'>Reservation</Link></li>
            <li className='hover:text-red-500 hover:underline'><Link to='/contact'>Contact Us</Link></li>
            <li className='hover:text-red-500 hover:underline'><Link to='/orderonline'>Order Online</Link></li>
            <li className='hover:text-red-500 hover:underline'><Link to='/checkout'>Check Out</Link></li>
          </ul>
        </div>

        {/* <div className='hidden md:block'>
        <Link to='/profile'><img src="https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553_1280.jpg" alt="User Profile" className='rounded-full w-8 h-8' /></Link>
      </div> */}

        {/* Login button */}

        {/* <div className='md:ml-4'>
        <button onClick={() => (showLogin(true) || toggleLogin())} className='border border-gray-500 rounded-md px-3 py-1'>Login</button>
      </div> */}

        {/* Login popup */}
        {loginp == true && <div className='fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center'>
          <div className='bg-white p-4 rounded-md duration-75'>
            <Login />
            <button onClick={() => showLogin(false)} className='absolute sm:top-32 sm:right-[36%]'>X</button>
          </div>
        </div>}
      </nav>
    </>
  );
}

export default Navbar;
