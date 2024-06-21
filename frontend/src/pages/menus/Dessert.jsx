import React from 'react'

function Dessert() {

  const menuItems = [
    {
      "id": 1,
      "name": "Paneer Butter Masala",
      "image": "https://example.com/images/paneer_butter_masala.jpg",
      "description": "A rich and creamy curry made with paneer, tomatoes, and butter, seasoned with aromatic spices.",
      "price": 12.99
    },
    {
      "id": 2,
      "name": "Chole Bhature",
      "image": "https://example.com/images/chole_bhature.jpg",
      "description": "A popular North Indian dish consisting of spicy chickpeas (chole) served with deep-fried bread (bhature).",
      "price": 9.99
    },
    {
      "id": 3,
      "name": "Vegetable Biryani",
      "image": "https://example.com/images/vegetable_biryani.jpg",
      "description": "A fragrant rice dish cooked with a variety of mixed vegetables, spices, and herbs.",
      "price": 10.99
    },
    {
      "id": 4,
      "name": "Aloo Gobi",
      "image": "https://example.com/images/aloo_gobi.jpg",
      "description": "A flavorful vegetarian dish made with potatoes (aloo) and cauliflower (gobi) cooked with spices and herbs.",
      "price": 8.99
    },
    {
      "id": 5,
      "name": "Palak Paneer",
      "image": "https://example.com/images/palak_paneer.jpg",
      "description": "A nutritious and delicious curry made with spinach (palak) and paneer, seasoned with spices.",
      "price": 11.99
    },
    {
      "id": 6,
      "name": "Masala Dosa",
      "image": "https://example.com/images/masala_dosa.jpg",
      "description": "A South Indian dish consisting of a crispy rice crepe filled with a spiced potato filling, served with chutney and sambar.",
      "price": 7.99
    },
    {
      "id": 7,
      "name": "Baingan Bharta",
      "image": "https://example.com/images/baingan_bharta.jpg",
      "description": "A smoky and flavorful dish made with roasted eggplant (baingan) cooked with onions, tomatoes, and spices.",
      "price": 9.49
    },
    {
      "id": 8,
      "name": "Dal Tadka",
      "image": "https://example.com/images/dal_tadka.jpg",
      "description": "A classic Indian lentil dish made with yellow lentils cooked with tomatoes, onions, and tempered with spices.",
      "price": 6.99
    },
    {
      "id": 9,
      "name": "Malai Kofta",
      "image": "https://example.com/images/malai_kofta.jpg",
      "description": "Fried vegetable and paneer balls served in a rich and creamy tomato-based gravy.",
      "price": 12.49
    },
    {
      "id": 10,
      "name": "Matar Paneer",
      "image": "https://example.com/images/matar_paneer.jpg",
      "description": "A popular North Indian dish made with peas (matar) and paneer cooked in a tomato-based gravy.",
      "price": 10.49
    }
  ]

  return (
    <div className='gap-7 border grid md:justify-center grid-cols-1 mt-10 md:grid-cols-3 sm:grid-cols-2' >
      {menuItems.map((menuItem) => (
        <div key={menuItem.id} className='flex flex-col border md:w-96 bg-[#FFFFFF] -z-0 rounded-2xl gap-4 items-center p-10'>
          <img className=' rounded-lg h-60 w-full cursor-pointer ' src={menuItem.image} alt="--------" />
          <div className='bg-transparent flex flex-col items-center gap-3'>
            <h3 className='bg-transparent text-3xl text-center'>{menuItem.name}</h3>
            <p className=' bg-transparent text-center'>{menuItem.description}</p>
            <p className=' bg-transparent text-2xl text-center'>Price: <span className='text-green-500 bg-white'>&#8377;{menuItem.price * 10}</span></p>
            <button className='hover:shadow-lg hover:shadow-green-500/50 rounded-md bg-green-600 text-center px-3.5 py-2.5 text-sm font-semibold text-gray-300 shadow-sm hover:bg-green-600 focus-visible:outline' onClick={() => { addToCart(menuItem.id) }}>Add</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Dessert