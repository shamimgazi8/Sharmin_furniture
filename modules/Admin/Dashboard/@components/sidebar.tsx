'use client';
import React, { useState } from 'react';
import { FaSitemap } from 'react-icons/fa';
import { IoSettings } from 'react-icons/io5';
import {
  MdAddchart,
  MdOutlineClose,
  MdOutlineSpaceDashboard,
} from 'react-icons/md';
import { TiThMenu } from 'react-icons/ti';

interface SidebarProps {
  logo: string;
}
const navItems = [
  { item: 'Dashboard', icon: <MdOutlineSpaceDashboard /> },
  { item: 'Setting', icon: <IoSettings /> },
  { item: 'Items', icon: <FaSitemap /> },
  { item: 'Add Items', icon: <MdAddchart /> },
];

const Sidebar: React.FC<SidebarProps> = ({ logo }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-gray-900 min-h-screen">
      <aside
        className={`fixed top-0 left-0 h-full ${
          isOpen ? 'w-64' : 'w-14'
        } bg-purple-700 transition-all duration-400 overflow-hidden`}
      >
        <div className="relative h-full w-64">
          <header className="flex items-center h-16 px-2 bg-black bg-opacity-25">
            <button
              type="button"
              className="w-11 h-18 grid place-items-center text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="material-symbols-outlined">
                {isOpen ? <MdOutlineClose /> : <TiThMenu />}
              </span>
            </button>
            <img
              src={logo}
              className={`h-7 ml-2 ${isOpen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
            />
          </header>
          <nav className="grid p-2 gap-0.5">
            {navItems.map((item: any, i: any) => (
              <button
                key={i}
                type="button"
                className={`flex items-center gap-3 h-11 ${
                  isOpen ? 'w-full' : 'w-11'
                } text-white bg-transparent hover:bg-black hover:bg-opacity-30 transition-all rounded-lg px-3`}
              >
                <span className="material-symbols-outlined">{item?.icon}</span>
                <p
                  className={`${isOpen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
                >
                  {item?.item}
                </p>
              </button>
            ))}
          </nav>
        </div>
      </aside>
    </section>
  );
};

export default Sidebar;
