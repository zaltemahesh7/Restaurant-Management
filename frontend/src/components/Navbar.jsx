import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [selected, setSelected] = useState("");
  console.log(selected);
  return (
    <nav className='flex z-10 rounded-full z-1 justify-between p-7 text-xl'>
      <ul className='flex gap-8 '>
        <li className='hover:text-red-500 hover:underline translate-x-2'>
          <Link to='/Home' className='' onClick={() =>( setSelected('Home') )}>Home</Link>
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

      {/* <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/orderonline" element={<Orderonline />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/homepage" element={<Homepage />} />
        </Routes> */}
    </nav>
  )
}

export default Navbar