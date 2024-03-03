import React, { useState } from 'react'
// import Navbar from '../components/Navbar'
import { Link, useNavigate } from 'react-router-dom'

function Menu() {
  const [selected, setSelected] = useState('All Catagories');
  const navigate = useNavigate('');

  const menuItems = [
    {
      id: 1,
      image: "https://cdn.pixabay.com/photo/2021/04/23/07/43/pizza-6200962_640.jpg",
      name: "Margherita Pizza",
      description: "Classic pizza with tomato, mozzarella, and basil",
      price: 10.99
    },
    {
      id: 2,
      image: 'https://cdn.pixabay.com/photo/2024/02/01/03/49/ai-generated-8545202_1280.jpg',
      name: "Spaghetti Carbonara",
      description: "Pasta with bacon, eggs, and cheese",
      price: 12.99
    },
    {
      id: 3,
      image: "https://cdn.pixabay.com/photo/2017/08/11/00/32/salad-2629262_1280.jpg",
      name: "Caesar Salad",
      description: "Romaine lettuce, croutons, Parmesan cheese, and Caesar dressing",
      price: 8.99
    },
    {
      id: 4,
      image: "https://cdn.pixabay.com/photo/2017/08/11/00/32/salad-2629262_1280.jpg",
      name: "Caesar Salad",
      description: "Romaine lettuce, croutons, Parmesan cheese, and Caesar dressing",
      price: 8.99
    },
    {
      id: 5,
      image: "https://cdn.pixabay.com/photo/2017/08/11/00/32/salad-2629262_1280.jpg",
      name: "Caesar Salad",
      description: "Romaine lettuce, croutons, Parmesan cheese, and Caesar dressing",
      price: 8.99
    },
    {
      id: 6,
      image: "https://cdn.pixabay.com/photo/2017/08/11/00/32/salad-2629262_1280.jpg",
      name: "Caesar Salad",
      description: "Romaine lettuce, croutons, Parmesan cheese, and Caesar dressing",
      price: 8.99
    },
    {
      id: 7,
      image: "https://cdn.pixabay.com/photo/2017/08/11/00/32/salad-2629262_1280.jpg",
      name: "Caesar Salad",
      description: "Romaine lettuce, croutons, Parmesan cheese, and Caesar dressing",
      price: 8.99
    },
    {
      id: 8,
      image: "https://cdn.pixabay.com/photo/2017/08/11/00/32/salad-2629262_1280.jpg",
      name: "Caesar Salad",
      description: "Romaine lettuce, croutons, Parmesan cheese, and Caesar dressing",
      price: 8.99
    },
    {
      id: 9,
      image: "https://cdn.pixabay.com/photo/2017/08/11/00/32/salad-2629262_1280.jpg",
      name: "Caesar Salad",
      description: "Romaine lettuce, croutons, Parmesan cheese, and Caesar dressing",
      price: 8.99
    },
    {
      id: 10,
      image: "https://cdn.pixabay.com/photo/2017/08/11/00/32/salad-2629262_1280.jpg",
      name: "Caesar Salad",
      description: "Romaine lettuce, croutons, Parmesan cheese, and Caesar dressing",
      price: 8.99
    },
    {
      id: 11,
      image: "https://cdn.pixabay.com/photo/2017/08/11/00/32/salad-2629262_1280.jpg",
      name: "Caesar Salad",
      description: "Romaine lettuce, croutons, Parmesan cheese, and Caesar dressing",
      price: 8.99
    },
    {
      id: 12,
      image: "https://cdn.pixabay.com/photo/2017/08/11/00/32/salad-2629262_1280.jpg",
      name: "Caesar Salad",
      description: "Romaine lettuce, croutons, Parmesan cheese, and Caesar dressing",
      price: 8.99
    },
    {
      id: 13,
      image: "https://cdn.pixabay.com/photo/2017/08/11/00/32/salad-2629262_1280.jpg",
      name: "Caesar Salad",
      description: "Romaine lettuce, croutons, Parmesan cheese, and Caesar dressing",
      price: 8.99
    },
    // Add more menu items as needed
  ];

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
      <div className='m-6'>
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
        <h1 className=' m-6'>{populerMenu.map((i) => (i.menu == selected ? selected : ''))}</h1>
      </div>

      <div className='flex gap-10 grid grid-cols-1 m-10 md:grid-cols-3 sm:grid-cols-2 '>
        {menuItems.map((menuItem) => (
          <div key={menuItem.id} className='flex flex-col shadow-gray-500 shadow-md rounded-lg gap-4 items-center  hover:shadow-lg hover:shadow-gray-900 border-gray-500 hover:translate-y-[-10px] transition-all p-10'>
            <img className=' rounded-lg h-60 w-full cursor-pointer ' src={menuItem.image} alt="--------" />
            <div className='flex flex-col items-center gap-3'>
              <h3 className='text-3xl text-center'>{menuItem.name}</h3>
              <p className=' text-center'>{menuItem.description}</p>
              <p className=' text-2xl text-center'>Price: <span className='text-green-500'>&#8377;{menuItem.price * 10}</span></p>
              <button className='hover:shadow-lg hover:shadow-green-500/50 rounded-md bg-green-600 text-center px-3.5 py-2.5 text-sm font-semibold text-gray-300 shadow-sm hover:bg-green-600 focus-visible:outline'>Add</button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Menu