import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Dashboard Title</h1>
      <div>
        {/* User avatar or any control elements can be added here */}
        <span>User Avatar</span>
      </div>
    </header>
  );
};

export default Header;
