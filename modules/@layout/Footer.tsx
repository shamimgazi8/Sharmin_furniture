import React from 'react';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaYoutube,
} from 'react-icons/fa';
import logo from './../../public/misc/logo.png';
import { LuInstagram } from 'react-icons/lu';
function Footer() {
  const partners = [
    {
      name: 'bKash',
      logo: 'https://www.bssnews.net/assets/news_photos/2024/06/08/image-194040-1717851006.jpg',
      url: 'https://www.bkash.com/',
    },
    {
      name: 'Nagad',
      logo: 'https://play-lh.googleusercontent.com/9GNDxgkN8hWzBub3bYbmFummUAHRFTe0vhLNv8wYL1-ESxKx1zJLL6eGhn8oAWiEZLNj=w240-h480-rw',
      url: 'https://www.nagad.com.bd/',
    },
    {
      name: 'SSLCommerz',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRptztEaor3TF8NjFZC9XGsW926pzTpWtc5ww&s',
      url: 'https://www.sslcommerz.com/',
    },
    {
      name: 'OneBank',
      logo: 'https://bdnewsnet.com/wp-content/uploads/2020/02/one-bank-logo.png',
      url: 'https://www.onebank.com.bd/',
    },
  ];

  const shareUrl = 'https://yourwebsite.com'; // Replace with your actual URL
  const message = 'Check this out!'; // Replace with your custom message
  return (
    <footer className=" bg-gray-900 text-white pt-[50px] pb-[10px]">
      <div className="container mx-auto">
        <div className="grid grid-cols-[1fr_3fr] gap-5">
          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
            <div className=" ">
              <div className="flex flex-col space-y-2">
                <h3 className="text-lg font-bold">Address</h3>
                <p>Sharmin Frniture</p>
                <p>Rampura, Banasree Block-E Road-4 House-7 , Dhaka-1219</p>
              </div>
              <p className=" mb-5">
                <FaMapMarkerAlt className="inline-block mr-2" />
                View larger map
              </p>
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
          <div className="grid grid-cols-4 grid-rows-2 gap-5">
            <div className="flex flex-col gap-2 space-y-2">
              <h3 className="text-lg font-bold">Information</h3>
              <ul className=" flex flex-col gap-2">
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
              <ul className=" flex flex-col gap-2">
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
              <ul className=" flex flex-col gap-2">
                <li>
                  <a href="#">Factory</a>
                </li>
                <li>
                  <a href="#">EMI</a>
                </li>
                <li>
                  <a href="#">Catalog</a>
                </li>
              </ul>
            </div>

            <div className=" mt-5">
              <img
                src={'/misc/sharmin.png'}
                alt="Nadia Furniture Limited"
                className="w-[300px] h-24 mb-4"
              />

              <div className="flex justify-center space-x-4">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    shareUrl
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition duration-300"
                  aria-label="Share on Facebook"
                >
                  <FaFacebook size={32} />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                    shareUrl
                  )}&text=${encodeURIComponent(message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600 transition duration-300"
                  aria-label="Share on Twitter"
                >
                  <FaTwitter size={32} />
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
                    shareUrl
                  )}&title=${encodeURIComponent(message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900 transition duration-300"
                  aria-label="Share on LinkedIn"
                >
                  <FaYoutube size={32} />
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
                    shareUrl
                  )}&title=${encodeURIComponent(message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900 transition duration-300"
                  aria-label="Share on LinkedIn"
                >
                  <FaLinkedin size={32} />
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
                    shareUrl
                  )}&title=${encodeURIComponent(message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900 transition duration-300"
                  aria-label="Share on LinkedIn"
                >
                  <LuInstagram size={32} />
                </a>
              </div>
              <div className=" mt-5 flex flex-col gap-2">
                <p>
                  <FaPhone className="inline-block mr-2" />
                  +8801960475783
                </p>
                <p className="text-sm">
                  <FaEnvelope className="inline-block mr-2" />
                  sharminfurniture@gmail.com
                </p>
              </div>
            </div>
            <div className=" flex  items-center justify-center col-span-4">
              <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-center mb-4">
                  Our Payment Partners
                </h2>
                <div className="flex flex-wrap justify-center items-center">
                  {partners.map((partner: any) => (
                    <a
                      key={partner.name}
                      href={partner.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="m-4 hover:opacity-80 transition-opacity duration-300"
                      aria-label={`Visit ${partner.name}`}
                    >
                      <img
                        src={partner.logo}
                        alt={`${partner.name} Logo`}
                        className="h-16"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full flex justify-center items-center">
        <p className="text-sm text-white/30">
          &copy; {new Date().getFullYear()} Sharmin Furniture Shop. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
