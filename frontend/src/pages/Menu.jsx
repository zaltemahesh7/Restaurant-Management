import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom'
import Animation from '../components/Animation';

function Menu() {
  const [selected, setSelected] = useState('All Catagories')

  const populerMenu = [
    {
      id: 1,
      menu: "All Catagories",
    },
    {
      id: 2,
      menu: "Lunch",
    },
    {
      id: 3,
      menu: "Dinner",
      items: [
        {
          id: 1,
          name: "Pav Bhaji"
        }
      ]
    },
    {
      id: 4,
      menu: "Dessert",
    },
    {
      id: 5,
      menu: "Drink",
    },
  ]

  function GoTo(menu) {
    // console.log(menu);
    setSelected(menu)
    return menu;
  }

  return (
    <>
      <Navbar />
      <div className=' flex gap-5 justify-center'>
        {
          populerMenu.map((i) => (
            <div
              key={i.id}
              className={`cursor-pointer flex items-center justify-center overflow-hidden h-10 mt-8 p-6 rounded-2xl w-96 md:ml-[0] ml-[25px] text-center text-s ${selected == i.menu ? ' bg-[#f54748]' : ' bg-[#e9e5e5] '}`}
              shape="round"
              color="red_400"
              size="sm"
              variant="fill"
              onClick={() => (GoTo(i.menu))}
            >
              {/* <Link to="/dinner">{i.menu}</Link> */}
              <Link to='/menu' className=' bg-transparent'>{i.menu}</Link>

            </div>

          ))
        }
        {/* <h1>{GoTo()}</h1> */}
      </div>

      <React.Suspense fallback={<Animation />}>
        <Routes>
          <Route path={`/${selected}`} element={<Navbar />} />
        </Routes>
      </React.Suspense>
    </>
  )
}

export default Menu