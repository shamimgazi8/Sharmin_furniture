import React, { useState } from 'react';
import { BiSolidSun } from 'react-icons/bi';
import { FaMoon } from 'react-icons/fa';
function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className={`relative inline-flex items-center justify-center p-2 rounded-md border border-gray-300 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus-ring-offset-2 focus-ring-indigo-500 ${isDarkMode ? 'dark' : ''}`}
    >
      {isDarkMode ? (
        <BiSolidSun className="h-6 w-6" />
      ) : (
        <FaMoon className="h-6 w-6" />
      )}
    </button>
  );
}

export default ThemeToggle;
