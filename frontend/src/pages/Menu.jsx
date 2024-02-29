import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Link, useNavigate } from 'react-router-dom'

function Menu() {
  const [selected, setSelected] = useState('All Catagories');
  const navigate = useNavigate('');

  const populerMenu = [
    {
      id: 1,
      menu: "All Catagories",
      route: '/allcatagoties',
    },
    {
      id: 2,
      menu: "Lunch",
      route: '/allcatagoties',
    },
    {
      id: 3,
      menu: "Dinner",
      items: [
        {
          id: 1,
          name: "Pav Bhaji"
        }
      ],
      route: '/Dinner',
    },
    {
      id: 4,
      menu: "Dessert",
      route: '/Dessert',
    },
    {
      id: 5,
      menu: "Drink",
      route: '/Drink',
    },
  ]

  function GoTo(menu) {
    // console.log(menu);
    setSelected(menu)
    return menu;
  }

  return (
    <>
      {/* <Navbar /> */}
      <div>
        <h1>List</h1>
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
                onClick={() => (setSelected(i.menu))}
              >
                {/* <Link to="/dinner">{i.menu}</Link> */}
                <Link to='/menu' className=' bg-transparent'>{i.menu}</Link>
              </div>
            ))
          }
          {/* <h1>{GoTo()}</h1> */}
        </div>
          <h1>{populerMenu.map((i) => (i.menu == selected? selected: ''))}</h1>
      </div>
    </>
  )
}

export default Menu