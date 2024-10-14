import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Data for 3 years (2021, 2022, 2023)
const dataByYear: { [key: number]: { name: string; value: number }[] } = {
  2021: [
    { name: 'Jan', value: 30 },
    { name: 'Feb', value: 50 },
    { name: 'Mar', value: 70 },
    { name: 'Apr', value: 90 },
    { name: 'May', value: 60 },
    { name: 'Jun', value: 80 },
    { name: 'Jul', value: 50 },
    { name: 'Aug', value: 70 },
    { name: 'Sep', value: 90 },
    { name: 'Oct', value: 100 },
    { name: 'Nov', value: 110 },
    { name: 'Dec', value: 120 },
  ],
  2022: [
    { name: 'Jan', value: 40 },
    { name: 'Feb', value: 60 },
    { name: 'Mar', value: 80 },
    { name: 'Apr', value: 100 },
    { name: 'May', value: 90 },
    { name: 'Jun', value: 110 },
    { name: 'Jul', value: 70 },
    { name: 'Aug', value: 90 },
    { name: 'Sep', value: 110 },
    { name: 'Oct', value: 130 },
    { name: 'Nov', value: 140 },
    { name: 'Dec', value: 150 },
  ],
  2023: [
    { name: 'Jan', value: 50 },
    { name: 'Feb', value: 70 },
    { name: 'Mar', value: 90 },
    { name: 'Apr', value: 110 },
    { name: 'May', value: 100 },
    { name: 'Jun', value: 120 },
    { name: 'Jul', value: 90 },
    { name: 'Aug', value: 110 },
    { name: 'Sep', value: 130 },
    { name: 'Oct', value: 150 },
    { name: 'Nov', value: 160 },
    { name: 'Dec', value: 170 },
  ],
};

const DashboardContent: React.FC = () => {
  const [currentYear, setCurrentYear] = useState(2021);
  const [loading, setLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // After the delay, set loading to false
    }, 1000); // 1 second delay, adjust as needed

    return () => clearTimeout(timer);
  }, []);

  const handleDotClick = (year: number) => {
    setCurrentYear(year);
  };

  // If loading, show loader
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 grid grid-cols-3 gap-4 bg-gray-100 min-h-screen">
      {/* Graph chart */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full mx-auto col-span-3">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-700">
            Accounts Report for {currentYear}
          </h3>
          <div className="text-green-500 font-bold text-xl">
            <span>&#9650;</span> 78%
          </div>
        </div>

        {/* Graph */}
        <ResponsiveContainer width="100%" height={150}>
          <LineChart data={dataByYear[currentYear]}>
            <Line
              type="monotone"
              dataKey="value"
              stroke="#34d399"
              strokeWidth={2}
              dot={false}
            />
            <XAxis dataKey="name" hide />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>

        {/* Sales Progress Text */}
        <div className="text-gray-500 text-sm mt-4">Sales Progress</div>

        {/* Pagination Dots for Years */}
        <div className="flex justify-center space-x-2 mt-2">
          {[2021, 2022, 2023].map(year => (
            <span
              key={year}
              onClick={() => handleDotClick(year)}
              className={`h-2 w-2 rounded-full cursor-pointer ${
                currentYear === year ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            ></span>
          ))}
        </div>
      </div>

      {/* Other Cards */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h3 className="text-sm font-semibold">Project Completed</h3>
        <div className="text-3xl font-bold my-2">528</div>
        <div className="h-2 bg-gray-300 rounded">
          <div className="h-2 bg-orange-500 w-2/5 rounded"></div>
        </div>
        <p className="text-xs text-gray-500 mt-2">45%</p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4">
        <h3 className="text-sm font-semibold">Memory Usage</h3>
        <div className="text-3xl font-bold my-2">856</div>
        <div className="h-2 bg-gray-300 rounded">
          <div className="h-2 bg-red-500 w-4/5 rounded"></div>
        </div>
        <p className="text-xs text-gray-500 mt-2">85%</p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-4">
        <h3 className="text-sm font-semibold">Visitors Today</h3>
        <div className="text-3xl font-bold my-2">756</div>
        <div className="h-2 bg-gray-300 rounded">
          <div className="h-2 bg-green-500 w-3/5 rounded"></div>
        </div>
        <p className="text-xs text-gray-500 mt-2">60%</p>
      </div>

      <div className="col-span-2 bg-blue-500 text-white shadow-md rounded-lg p-4 flex flex-col items-center justify-center">
        <h3 className="text-2xl">October 23, 2014</h3>
        <p className="text-sm">Friday, 8:43 AM</p>
        <div className="flex space-x-4 mt-4">
          <div className="text-lg">
            <i className="fas fa-clock"></i>
          </div>
        </div>
      </div>

      <div className="bg-purple-500 text-white shadow-md rounded-lg p-4 text-center">
        <h3 className="text-sm font-semibold">Visitors</h3>
        <div className="text-3xl font-bold my-2">10K</div>
      </div>

      <div className="bg-green-500 text-white shadow-md rounded-lg p-4 text-center">
        <h3 className="text-sm font-semibold">Volume</h3>
        <div className="text-3xl font-bold my-2">100%</div>
      </div>

      <div className="bg-orange-500 text-white shadow-md rounded-lg p-4 text-center">
        <h3 className="text-sm font-semibold">Rating</h3>
        <div className="text-3xl font-bold my-2">578</div>
      </div>

      <div className="bg-red-500 text-white shadow-md rounded-lg p-4 text-center">
        <h3 className="text-sm font-semibold">Achievement</h3>
        <div className="text-3xl font-bold my-2">20</div>
      </div>
    </div>
  );
};

export default DashboardContent;
