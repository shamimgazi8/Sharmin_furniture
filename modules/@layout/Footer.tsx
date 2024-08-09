import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 ">
      <div className="container mx-auto flex flex-wrap justify-between">
        {/* About Section */}
        <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p>
            Welcome to Sharmin Furniture Shop, your destination for
            high-quality, stylish furniture pieces that transform your living
            spaces into a home.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul>
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="w-full sm:w-1/3">
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p>Phone: (123) 456-7890</p>
          <p>Email: contact@sharminfurnitureshop.com</p>
          <p>Address: 123 Furniture Lane, City, State, ZIP</p>
        </div>
      </div>
      <div className="container mx-auto mt-8 text-center text-gray-500">
        <p>&copy; 2024 Sharmin Furniture Shop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
