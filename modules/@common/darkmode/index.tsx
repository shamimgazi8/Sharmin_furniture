'use client';
import React, { useState, useEffect } from 'react';
import { BiSolidSun } from 'react-icons/bi';
import { FaMoon } from 'react-icons/fa';
const themeDark = {
  name: 'dark',
};
const themeLight = {
  name: 'light',
};
const ThemeToggleButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme based on stored preference or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (
      savedTheme === 'dark' ||
      (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);

  // Toggle theme and update local storage
  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', JSON.stringify(themeLight));
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', JSON.stringify(themeDark));
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-6 p-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 dark:bg-gray-200 dark:text-gray-800 dark:hover:bg-gray-300 transition duration-300"
    >
      {isDarkMode ? <BiSolidSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeToggleButton;
