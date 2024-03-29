import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [selected, setSelected] = useState("Home");
  // console.log(selected);
  return (
    <nav className='flex z-10 z-1 justify-between p-4 overflow-hidden border border-gray-500 rounded-md sticky top-5 my-3'>
      <ul className='flex gap-8 '>
        <li className='hover:text-red-500 hover:underline translate-x-2'>
          <Link to='/Home' className='' onClick={() => (setSelected('Home'))}>Home</Link>
        </li>
        <li className='hover:text-red-500 hover:underline'>
          <Link to='/menu'>Menu</Link>
        </li>
        <li className='hover:text-red-500 hover:underline'>
          <Link to='/aboutus'>About Us</Link>
        </li>
        <li className='hover:text-red-500 hover:underline'>
          <Link to='/reservation'>Reservation</Link>
        </li>
        <li className='hover:text-red-500 hover:underline'>
          <Link to='/contact'>Contact Us</Link>
        </li>
        <li className='hover:text-red-500 hover:underline'>
          <Link to='/orderonline'>Order Online</Link>
        </li>
        <li className='hover:text-red-500 hover:underline'>
          <Link to='/checkout'>Check Out</Link>
        </li>
        {/* <li className='hover:text-red-500 hover:underline'>
          <Link to='/homepage'>Home</Link>
        </li> */}
      </ul>

      <div>
        <Link to='/profile'><img src="https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553_1280.jpg" alt="User Profile" className='rounded-full w-8 h-8' /></Link>
      </div>
    </nav>
  )
}

export default Navbar