import React from 'react'

function AllMenus() {

    const cartArray = [{}]
    function addToCart(item) {
        if (cartArray.includes({item})) console.log('present');
        else {
            cartArray.push({item});
        }
        console.log(cartArray, item);
    }

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
    return (
        <>
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
        </>
    )
}

export default AllMenus