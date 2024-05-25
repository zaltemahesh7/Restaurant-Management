import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold" style={{ color: '#b81d1d' }}>Hotel Surbhi Pure Veg</h2>
            <p className="text-gray-400">Delighting your taste buds with pure vegetarian cuisine.</p>
          </div>
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="https://www.facebook.com" className="text-gray-400 hover:text-white transition duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.5v15c0 2.5-2 4.5-4.5 4.5h-15c-2.5 0-4.5-2-4.5-4.5v-15c0-2.5 2-4.5 4.5-4.5h15c2.5 0 4.5 2 4.5 4.5zM20.9 2.1h-16c-2.1 0-3.8 1.7-3.8 3.8v16c0 2.1 1.7 3.8 3.8 3.8h16c2.1 0 3.8-1.7 3.8-3.8v-16c0-2.1-1.7-3.8-3.8-3.8zM18.6 8.4h-2.3c-.4 0-.7.3-.7.7v1.8h3.3v2.8h-3.3v8.4h-3.3v-8.4h-2.6v-2.8h2.6v-2.3c0-2.6 1.6-4 3.9-4h2.6v2.8z"/>
              </svg>
            </a>
            <a href="https://www.twitter.com" className="text-gray-400 hover:text-white transition duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.6c-.9.4-1.9.7-2.9.8 1-.6 1.8-1.6 2.2-2.7-.9.5-2 .9-3.1 1.1-1.8-1.9-4.8-2-6.8-.1-1.6 1.4-2.2 3.6-1.5 5.6-4.1-.2-7.8-2.1-10.2-5-1.3 2.3-.6 5.3 1.5 6.8-.8 0-1.6-.2-2.3-.6v.1c0 2.4 1.7 4.5 4 5-.7.2-1.5.3-2.3.1.7 2.1 2.8 3.5 5 3.5-2.4 1.9-5.5 2.8-8.6 2.4 2.9 1.8 6.4 2.8 9.9 2.8 11.8 0 18.2-9.8 18.2-18.3v-.8c1.3-1 2.4-2.2 3.3-3.5z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com" className="text-gray-400 hover:text-white transition duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-1.6 0-1.8 0-4.9.1-3 .1-5.1.7-6.8 2.3-1.6 1.7-2.2 3.8-2.3 6.8-.1 3.1-.1 3.3-.1 4.9 0 1.6 0 1.8.1 4.9.1 3 .7 5.1 2.3 6.8 1.7 1.6 3.8 2.2 6.8 2.3 3.1.1 3.3.1 4.9.1 1.6 0 1.8 0 4.9-.1 3-.1 5.1-.7 6.8-2.3 1.6-1.7 2.2-3.8 2.3-6.8.1-3.1.1-3.3.1-4.9 0-1.6 0-1.8-.1-4.9-.1-3-.7-5.1-2.3-6.8-1.7-1.6-3.8-2.2-6.8-2.3-3.1-.1-3.3-.1-4.9-.1zm0 1.8c1.6 0 1.8 0 4.8.1 2.9.1 4.5.6 5.6 1.5 1.1 1.1 1.4 2.7 1.5 5.6.1 3 .1 3.2.1 4.8 0 1.6 0 1.8-.1 4.8-.1 2.9-.6 4.5-1.5 5.6-1.1 1.1-2.7 1.4-5.6 1.5-3 .1-3.2.1-4.8.1-1.6 0-1.8 0-4.8-.1-2.9-.1-4.5-.6-5.6-1.5-1.1-1.1-1.4-2.7-1.5-5.6-.1-3-.1-3.2-.1-4.8 0-1.6 0-1.8.1-4.8.1-2.9.6-4.5 1.5-5.6 1.1-1.1 2.7-1.4 5.6-1.5 3-.1 3.2-.1 4.8-.1zm0 3.5c-2.9 0-5.2 2.3-5.2 5.2s2.3 5.2 5.2 5.2 5.2-2.3 5.2-5.2-2.3-5.2-5.2-5.2zm0 1.8c1.9 0 3.5 1.5 3.5 3.5s-1.5 3.5-3.5 3.5-3.5-1.5-3.5-3.5 1.5-3.5 3.5-3.5zm6.4-.4c-.7 0-1.3.6-1.3 1.3s.6 1.3 1.3 1.3 1.3-.6 1.3-1.3-.6-1.3-1.3-1.3z"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="mt-4 border-t border-gray-700 pt-4 text-center text-gray-400">
          <p>&copy; 2024 Surbhi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
