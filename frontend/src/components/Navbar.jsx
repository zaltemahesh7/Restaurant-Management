import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '/LogoPlusText.svg';

// const Navlink = useNavigate()

function Navbar() {
  const [selected, setSelected] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>

      {/* === Top Navbar toggle ================================================================== */}

      <div className="top-port h-10 bg-[#ecd1bf] flex justify-between max-sm:hidden">
        <div className=' bg-transparent flex items-center justify-center gap-2 cursor-pointer ml-2'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className='w-4 bg-transparent'
            viewBox="0 0 384 512">
            <path
              d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
            />
          </svg>
          <span className='bg-transparent'>310 West 14th North Street, NY</span>
        </div>
        <div className=' bg-transparent'>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" /></svg>
          </div>
        </div>

        <div className='flex items-center justify-center '>
          <button className='h-full bg-red-500 px-5'>Map</button>
        </div>
      </div>

      {/* ======================================================================================== */}


      {/* Main Navigation bar */}

      <nav className='flex justify-between gap-3 z-10  p- overflow-hidden sticky top-0 navbar'>
        <div className='flex justify-between bg-transparent w-full'>
          <div className='mr-4 bg-transparent'>
            <Link to='/' className=' bg-transparent ' onClick={() => (setSelected('Home'))}>
              <img src={logo} className='bg-transparent' width='230px' />
            </Link>
          </div>
          <div className='md:flex hidden bg-transparent justify-center items-center '>
            <ul className='flex  gap-4 bg-transparent'>
              <li onClick={() => (setSelected('Menu'))} className={`hover:text-red-500 hover:underline bg-transparent ${selected == 'Menu' ? 'text-red-500' : ' '}`}>
                <Link className='bg-transparent' to='/menu'>Menu</Link>
              </li>
              <li onClick={() => (setSelected('About Us'))} className={`hover:text-red-500 hover:underline bg-transparent ${selected == 'About Us' ? 'text-red-500' : ' '}`}>
                <Link className='bg-transparent' to='/aboutus'>About Us</Link>
              </li>
              <li onClick={() => (setSelected('Reservation'))} className={`hover:text-red-500 hover:underline bg-transparent ${selected == 'Reservation' ? 'text-red-500' : ' '}`}>
                <Link className='bg-transparent' to='/reservation'>Reservation</Link>
              </li>
              <li onClick={() => (setSelected('Contact'))} className={`hover:text-red-500 hover:underline bg-transparent ${selected == 'Contact' ? 'text-red-500' : ' '}`}>
                <Link className='bg-transparent' to='/contact'>Contact Us</Link>
              </li>
              <li onClick={() => (setSelected('Order'))} className={`hover:text-red-500 hover:underline bg-transparent ${selected == 'Order' ? 'text-red-500' : ' '}`}>
                <Link className='bg-transparent' to='/orderonline'>Order Online</Link>
              </li>
              <li onClick={() => (setSelected('Check'))} className={`hover:text-red-500 hover:underline bg-transparent ${selected == 'Check' ? 'text-red-500' : ' '}`}>
                <Link className='bg-transparent' to='/checkout'>Check Out</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='md:hidden bg-transparent'>
          <button onClick={toggleNavbar}>
            <svg className="w-6 h-6 bg-transparent mt-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-transparent w-40`}>
          <ul className='flex flex-col mt-8 gap-1 bg-transparent'>
            <li className='hover:text-red-500 hover:underline bg-transparent'>
              <Link className='bg-transparent' onClick={toggleNavbar} to='/menu'>Menu</Link>
            </li>
            <li className='hover:text-red-500 hover:underline bg-transparent'>
              <Link className='bg-transparent' onClick={toggleNavbar} to='/aboutus'>About Us</Link>
            </li>
            <li className='hover:text-red-500 hover:underline bg-transparent'>
              <Link className='bg-transparent' onClick={toggleNavbar} to='/reservation'>Reservation</Link>
            </li>
            <li className='hover:text-red-500 hover:underline bg-transparent'>
              <Link className='bg-transparent' onClick={toggleNavbar} to='/contact'>Contact Us</Link>
            </li>
            <li className='hover:text-red-500 hover:underline bg-transparent'>
              <Link className='bg-transparent' onClick={toggleNavbar} to='/orderonline'>Order Online</Link>
            </li>
            <li className='hover:text-red-500 hover:underline bg-transparent'>
              <Link className='bg-transparent' onClick={toggleNavbar} to='/checkout'>Check Out</Link>
            </li>
          </ul>
        </div>
        <Link className='bg-transparent m-auto' to='/login'>
          <button className=' border px-2 py-0.5 rounded-md bg-red-400 ' onClick={() => setSelected('/login')}>login</button>
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
