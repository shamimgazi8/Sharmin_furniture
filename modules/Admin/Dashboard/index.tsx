import React from 'react';

import Header from './@components/header';
import Sidebar from './@components/sidebar';

const DashboardPage: React.FC = () => {
  return (
    <div className="min-h-screen grid grid-cols-[300px_1fr]  bg-gray-800">
      <div>
        <Sidebar logo="/sharmin-white.png" />
      </div>
      <div className="">
        <Header />
        <main className=" bg-gray-800 p-6">
          {/* Main content goes here */}
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
