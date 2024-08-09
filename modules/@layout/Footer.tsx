import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import logo from './../../public/misc/logo.png';
function Footer() {
  return (
    <footer className=" bg-blue-900 text-white py-[50px]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
            <img
              src={'/misc/sharmin.png'}
              alt="Nadia Furniture Limited"
              className="w-[300px] h-24 mb-4"
            />
            <div className=" h-[200px] w-[200px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d20658.190789038403!2d90.42873186002464!3d23.751419431382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1723214193265!5m2!1sen!2sbd"
                width="300"
                height="200"
                // allowfullscreen="false"
                loading="lazy"
                // referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="flex flex-col md:flex-row space-x-8">
            <div className="flex flex-col space-y-2">
              <h3 className="text-lg font-bold">Information</h3>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Warranty And Services</a>
                </li>
                <li>
                  <a href="#">Support 24/7</a>
                </li>
                <li>
                  <a href="#">Product Support</a>
                </li>
                <li>
                  <a href="#">Trade License</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col space-y-2">
              <h3 className="text-lg font-bold">Services</h3>
              <ul>
                <li>
                  <a href="#">Returns</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <a href="#">Site Map</a>
                </li>
                <li>
                  <a href="#">Leave a Complain</a>
                </li>
                <li>
                  <a href="#">Appointment Booking</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col space-y-2">
              <h3 className="text-lg font-bold">Explore</h3>
              <ul>
                <li>
                  <a href="#">IPDC EZ</a>
                </li>
                <li>
                  <a href="#">EMI</a>
                </li>
                <li>
                  <a href="#">Catalog</a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col space-y-2">
              <h3 className="text-lg font-bold">Address</h3>
              <p>Nadia Furniture Ltd.</p>
              <p>62. East Hazipara, DIT Road, Malibagh, Dhaka-1219</p>
              <p>
                <FaMapMarkerAlt className="inline-block mr-2" />
                View larger map
              </p>
              <p>
                <FaPhone className="inline-block mr-2" />
                +8809617444777
              </p>
              <p>
                <FaEnvelope className="inline-block mr-2" />
                your_email@example.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
