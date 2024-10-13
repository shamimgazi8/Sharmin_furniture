'use client';
import React, { useState } from 'react';
import {
  MdOutlineSpaceDashboard,
  MdAddchart,
  MdMenu,
  MdChevronRight,
  MdChevronLeft,
} from 'react-icons/md';
import { IoSettings } from 'react-icons/io5';
import { FaSitemap } from 'react-icons/fa';

// Define navItems as your type
const navItems = [
  { item: 'Dashboard', icon: <MdOutlineSpaceDashboard /> },
  { item: 'Setting', icon: <IoSettings /> },
  { item: 'Items', icon: <FaSitemap /> },
  { item: 'Category', icon: <MdAddchart /> },
];

const DashboardPageCustom: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(prevState => !prevState);
  };

  return (
    <div className="flex h-screen">
      <div
        className={`flex flex-col bg-black ${isExpanded ? 'w-[200px]' : 'w-16'} h-full transition-width duration-300 p-2`}
      >
        <div className="flex items-center justify-between p-2 ml-2 h-[80px]">
          {/* Conditionally show the logo */}
          {isExpanded && (
            <div className="text-white font-bold">
              <img src="https://i.ibb.co.com/ZhsyH47/Sharmin-white.png" />
            </div>
          )}
          {/* Toggle Icon */}
          <button className="text-white" onClick={toggleSidebar}>
            {isExpanded ? (
              <MdChevronLeft className=" hover:scale-150 transition-all " />
            ) : (
              <MdMenu />
            )}
          </button>
        </div>

        <ul
          className={`${!isExpanded ? 'flex flex-col  space-y-3' : 'flex flex-col  space-y-3  '}  `}
        >
          {navItems.map(({ item, icon }, index) => (
            <li
              key={index}
              className={`${!isExpanded ? 'h-[30px] flex items-center justify-center text-white hover:bg-blue-700 transition-all rounded cursor-pointer ' : 'h-[30px] flex items-center justify-center text-white hover:bg-blue-700 transition-all rounded cursor-pointer pl-3 '}  `}
            >
              <span className="flex-shrink-0">{icon}</span>
              <span
                className={`ml-2 overflow-hidden transition-all duration-300 ${isExpanded ? 'w-full flex' : 'w-0 hidden'}`}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 p-4">
        <h1 className="text-2xl">Dashbboard</h1>
        {/* Place for additional content */}
      </div>
    </div>
  );
};

export default DashboardPageCustom;
