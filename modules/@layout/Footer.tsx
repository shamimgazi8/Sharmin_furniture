import Link from 'next/link';
import { BsCashStack, BsTelephone } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { IoIosArrowRoundForward, IoMdMail } from 'react-icons/io';
import { SlLocationPin } from 'react-icons/sl';
import SocialLinks from '../@common/SocialLinks';
import { IoCall } from 'react-icons/io5';
import { FaCcVisa } from 'react-icons/fa';
import { SiMastercard } from 'react-icons/si';
import Image from 'next/image';
const mailtoLink = `mailto:${'sharminfurniture@gmail.com'}?subject=${encodeURIComponent('furniture')}&body=${encodeURIComponent('')}`;

const data = [
  {
    children: [
      {
        title: 'About',
        link: '/about-us',
      },
      {
        title: 'Contact',
        link: '/contact-us',
      },
      {
        title: 'Privacy',
        link: '/privacy-policy',
      },
      {
        title: 'Users',
        link: '/study-abroad/oceania/new-zeland',
      },
      {
        title: 'Cookies',
        link: '/study-abroad/north-america/new-zeland',
      },
      {
        title: 'Data Copyright',
        link: '/study-abroad/europe/germany',
      },
      {
        title: 'Terms & Conditions',
        link: '/terms-and-conditions',
      },
    ],
  },

  {
    title: 'Contact Info',
    jsx: (
      <div className="flex flex-col gap-4">
        <div className="flex gap-3">
          <SlLocationPin className="text-lg flex-shrink-0 mt-1" />
          <span>275 Quadra Street Victoria Road, New York</span>
        </div>
        <a className="flex gap-3 group" href="tel:+12 345 6789">
          <BsTelephone className="text-lg flex-shrink-0 mt-1" />
          <span className="group-hover:text-gradient">+12 345 6789</span>
        </a>
        <a className="flex gap-3 group" href="mailto:info@worldunihub.com">
          <FiMail className="text-lg flex-shrink-0 mt-1" />
          <span className="group-hover:text-gradient">
            info@worldunihub.com
          </span>
        </a>
      </div>
    ),
  },
];

const Footer = () => {
  return (
    <footer className="dark:bg-gray-800 bg-gray-200 mt-auto bg-footer text-footertext lg:pt-[20px] py-[40px] ">
      <div className=" lg:w-[30%] container mb-10 lg:px-0 px-10">
        <h1 className=" gradient-text lg:text-3xl text-xl font-semibold text-center">
          INSPIRATION, DELIVERED
        </h1>
        <p className=" mb-2 lg:text-xl text-sm text-center">
          Discover our products, places, services and space
        </p>
        <div className=" relative group">
          <input
            type="text"
            name=""
            id=""
            className="w-full py-3 px-5 focus:outline-none text-black"
            placeholder="Enter your email"
          />
          <IoIosArrowRoundForward className=" text-[32px] absolute right-0 top-2 text-purple-400 mr-3 group-hover:scale-125 transition-all" />
        </div>
      </div>
      <div className="container flex lg:flex-row flex-col gap-5  items-center justify-around  ">
        <div className=" flex justify-center items-center gap-4 flex-col">
          <h1 className="text-xl font-semibold gradient-text ">About Us</h1>
          <div className="text-sm flex flex-col gap-2 justify-center items-center">
            <Link href={'/'}>Contact Us</Link>
            <Link href={'/'}>Our Story</Link>
            <Link href={'/'}>Company Profile</Link>
            <Link href={'/'}>License & CertificatedS</Link>
          </div>
        </div>
        <div className=" flex justify-center items-center gap-4 flex-col">
          <h1 className="text-xl font-semibold gradient-text ">OUR COMPANY</h1>
          <div className="text-sm flex flex-col gap-2 justify-center items-center">
            <Link href={'/'}>Product Catalog</Link>
            <Link href={'/'}>Our Showroom</Link>
            <Link href={'/'}>Career</Link>
            <Link href={'/'}>Press</Link>
          </div>
        </div>
        <div className=" flex justify-center items-center gap-4 flex-col">
          <h1 className="text-xl font-semibold gradient-text ">
            CUSTOMER SERVICE
          </h1>
          <div className="text-sm flex flex-col gap-2 justify-center items-center">
            <Link href={'/'}>Terms & Conditions</Link>
            <Link href={'/'}>Privacy & Policy</Link>
            <Link href={'/'}>Return & Refund Policy</Link>
            <Link href={'/'}>Delivery and Shipping Information</Link>
          </div>
        </div>
        <div className=" flex justify-center items-center gap-4 flex-col">
          <h1 className="text-xl font-semibold gradient-text ">Follow Us</h1>
          <SocialLinks classes={{ root: '!mb-0' }} />
          <div className=" flex gap-2 items-center">
            {' '}
            <IoCall />
            <a href={`tel:${'+880 1960475783'}`}>{'+880 1960475783'}</a>
          </div>
          <div className=" flex gap-2 items-center">
            {' '}
            <IoMdMail />
            <a href={mailtoLink}>{'sharminfurniture@gmail.com'}</a>
          </div>
        </div>
        <div className=" flex justify-center items-center gap-4 flex-col">
          <h1 className="text-xl font-semibold gradient-text ">We Accept</h1>
          <div className=" flex gap-2 items-center text-3xl">
            {' '}
            <FaCcVisa />
            <SiMastercard />
            <BsCashStack />
          </div>
          <Image
            height={20}
            width={120}
            alt="bkash"
            src={
              'https://i0.wp.com/milvikbd.com/wp-content/uploads/2024/05/Bkash-1.png?w=1080'
            }
          />
          <Image
            height={20}
            width={120}
            alt="bkash"
            src={'https://sslcommerz.com/wp-content/uploads/2021/11/logo.png'}
          />
        </div>
        {/* <div className="lg:pb-8 grid grid-cols-1 lg:grid-cols-[2.43fr_1fr] gap-5 lg:gap-[143px] text-grey text-sm">
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 ">
              {data?.map((item, i) => {
                return (
                  <div key={i}>
                    <ul className="grid lg:grid-flow-col gap-8">
                      {item?.children?.map((list, i) => {
                        return (
                          <li key={i}>
                            <Link
                              className="block text-p3 group"
                              href={list.link}
                            >
                              <span className="group-hover:text-gradient transition-all">
                                {list?.title}
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
            <SocialLinks classes={{ root: '!mb-0' }} />
            <div className="container px-0">
              Copyright {new Date().getFullYear()} World University Hub |
              Developed By{' '}
              <Link href={'https://m4yours.com/'}>M4YOURS IT.</Link> All Rights
              Reserved
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <p className="text-p2 mb-4">
                Subscribe to get latest update & news
              </p>
            
            </div>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
