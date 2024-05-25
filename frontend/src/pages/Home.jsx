import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gray-100">
      {/* <header className="bg-red-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">Hotel Surbhi Pure Veg</h1>
          <nav className="space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/reservation" className="hover:underline">Reservation</Link>
            <Link to="/menu" className="hover:underline">Menu</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </nav>
        </div>
      </header> */}

      <div className="relative">
        <img src="https://www.kayak.co.in/news/wp-content/uploads/sites/76/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg" alt="Restaurant" className="w-full h-64 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-6xl font-bold text-[#b81d1d]">Delicious Vegetarian Cuisine</h2>
        </div>
      </div>

      <section className="container mx-auto px-4 py-12">
        <h3 className="text-3xl font-bold mb-6">Discover Our Menu</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="https://media.istockphoto.com/id/1077980738/photo/green-peas-or-matar-paneer-curry-recipe-served-in-a-bowl-selective-focus.jpg?s=1024x1024&w=is&k=20&c=huM_B1l5YiWjteWhL8jZvGUpSAHfVIYi4wIsXaKhIpQ=" alt="Dish 1" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="text-xl font-bold">Paneer Butter Masala</h4>
              <p className="mt-2 text-gray-600">A rich and creamy dish made with paneer and a buttery tomato-based gravy.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="https://media.istockphoto.com/id/495188382/photo/indian-pulav-vegetable-rice-veg-biryani-basmati-rice.jpg?s=1024x1024&w=is&k=20&c=UfSBeQpK2Swnd6aEERRmGhi848rZd5ltqPDrfCxUQuE=" alt="Dish 2" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="text-xl font-bold">Veg Biryani</h4>
              <p className="mt-2 text-gray-600">A fragrant and flavorful rice dish loaded with mixed vegetables and spices.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src="https://media.istockphoto.com/id/1306083166/photo/masala-sin.jpg?s=1024x1024&w=is&k=20&c=z7-tfOQlqG08dnakPCM1ay1OaR_fPvSiaOlwleAk-l4=" alt="Dish 3" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="text-xl font-bold">Masala Dosa</h4>
              <p className="mt-2 text-gray-600">A crispy and savory dosa filled with spicy potato filling, served with chutneys and sambar.</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link to="/menu" className="inline-block bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700">View Full Menu</Link>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-6 text-center">Why Choose Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img src="https://cdn.pixabay.com/photo/2016/03/05/19/14/onions-1238332_640.jpg" alt="Quality Ingredients" className="mx-auto mb-4" />
              <h4 className="text-xl font-bold">Quality Ingredients</h4>
              <p className="mt-2 text-gray-600">We use only the freshest and highest quality ingredients in all our dishes.</p>
            </div>
            <div className="text-center">
              <img src="https://cdn.pixabay.com/photo/2019/06/18/10/46/platting-4282016_1280.jpg" alt="Expert Chefs" className="mx-auto mb-4" />
              <h4 className="text-xl font-bold">Expert Chefs</h4>
              <p className="mt-2 text-gray-600">Our chefs are highly skilled and experienced in creating delicious vegetarian cuisine.</p>
            </div>
            <div className="text-center">
              <img src="https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_1280.jpg" alt="Excellent Service" className="mx-auto mb-4" />
              <h4 className="text-xl font-bold">Excellent Service</h4>
              <p className="mt-2 text-gray-600">We pride ourselves on providing exceptional service to all our guests.</p>
            </div>
          </div>
        </div>
      </section>

      {/* <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Hotel Surbhi Pure Veg. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
            <Link to="/terms" className="hover:underline">Terms of Service</Link>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default Home;
