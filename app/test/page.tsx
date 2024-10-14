'use client';

import { useState } from 'react';
const customData = [
  'Row 1 Data',
  'Row 2 Data',
  'Row 3 Data',
  'Row 4 Data',
  'Row 5 Data',
];
const data = [
  [
    'Minted',
    'Data 1, Col 2',
    'Data 1, Col 3',
    'Data 1, Col 4',
    'Data 1, Col 5',
    'Data 1, Col 6',
  ],
  [
    'Listed',
    'Data 2, Col 2',
    'Data 2, Col 3',
    'Data 2, Col 4',
    'Data 2, Col 5',
    'Data 2, Col 6',
  ],
  [
    'Unlisted',
    'Data 2, Col 2',
    'Data 2, Col 3',
    'Data 2, Col 4',
    'Data 2, Col 5',
    'Data 2, Col 6',
  ],
  // Add more rows as needed
];
const columnNames = ['Event', 'Price', 'From', 'To ', 'Date', 'Time '];
const TestDevelopment = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className=" h-full w-full bg-[#111111]">
      <div className="w-[80%] m-auto py-[50px]">
        <div className="grid grid-cols-2  text-white mb-[20px] rounded-lg shadow-lg space-y-6 md:space-y-0 md:space-x-6 ">
          {/* Left Section: Image and Info */}
          <div className="w-full md:w-full">
            <div className="relative h-full w-full">
              {' '}
              {/* Set a specific height and width */}
              <img
                src="https://media.istockphoto.com/id/120251134/photo/pallas-athene-brunnen-vienna-b-w.jpg?s=612x612&w=0&k=20&c=-qYyRZZVP9fPgSByiz_TOInhNbzdT5r-tXMcNLMzWE4="
                alt="NFT Art"
                className="rounded-lg h-full w-full object-cover" // Make image cover the full div
              />
              <div className="absolute top-2 right-2 bg-gray-700 rounded-full px-3 py-1 text-xs">
                <span className="mr-1">❤️</span> 10
              </div>
            </div>
          </div>

          {/* Right Section: NFT Info */}
          <div className=" text-white rounded-lg shadow-lg w-[96%] mx-auto">
            {/* Title */}
            <div className="text-2xl font-bold flex justify-between items-center">
              <span>Themesflat #0270</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                />
              </svg>
            </div>

            {/* Owners */}
            <div className="flex justify-between items-sart my-4 text-[12px]">
              <div className="grid grid-cols-[40px_1fr] items-center justify-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s"
                  alt="Owner"
                  className="w-6 h-6 rounded-full row-span-2"
                />
                <span className="text-[12px] text-gray-400">Owned by:</span>
                <span className="font-medium text-[12px]">Marvin McKinney</span>
              </div>
              <div className="grid grid-cols-[40px_1fr] items-center justify-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s"
                  alt="Owner"
                  className="w-6 h-6 rounded-full row-span-2"
                />
                <span className="text-[12px] text-gray-400">Owned by:</span>
                <span className="font-medium text-[12px]">Marvin McKinney</span>
              </div>
            </div>

            {/* Stats */}
            <div className="flex justify-start items-center space-x-4 my-4 text-sm">
              <button className=" border-[1px] border-white/20 px-3 py-[10px] rounded-[12px]">
                👁️ 208 View
              </button>
              <button className=" border-[1px] border-white/20 px-3 py-[10px] rounded-[12px]">
                Collectibles
              </button>
            </div>

            {/* Price Section */}
            <div className="p-4 bg-[#232323] rounded-lg grid grid-cols-2 gap-2">
              <div className="text-sm text-gray-400">Current price</div>
              <button className=" border-[1px] border-white/20 px-2 py-[6px] rounded-[12px] mt-0 h-[30px] w-full text-[12px]">
                Check ETH Quotes
              </button>
              <div className="text-4xl font-bold">$1,000</div>
              <button className="w-full bg-yellow-400 text-black p-[10px] rounded-lg font-semibold hover:bg-yellow-500 transition-all">
                Put on sale
              </button>
            </div>

            {/* Overview Section */}
            <div className="mt-6 p-4 rounded-lg bg-[#232323] ">
              <div className="text-lg font-semibold">Overview</div>
              <div className="w-full h-[1px] bg-white/20 my-[10px]"></div>
              <div className="grid grid-cols-[2fr_1fr] gap-4">
                <div className=" w-full h-full flex flex-col justify-center items-center gap-2">
                  <div className="flex justify-between items-center bg-[#302f2f] rounded border-[1px] border-white/20  text-[14px] w-full py-3 px-2">
                    <span className="text-sm text-white">Artist</span>
                    <span className="font-semibold text-gray-400">
                      Dhruv Swami
                    </span>
                  </div>{' '}
                  <div className="flex justify-between items-center bg-[#302f2f] rounded border-[1px] border-white/20  text-[14px] w-full py-3 px-2">
                    <span className="text-sm text-white">Shipping Country</span>
                    <span className="font-semibold text-gray-400">India</span>
                  </div>
                  <div className="flex justify-between items-center bg-[#302f2f] rounded border-[1px] border-white/20  text-[14px] w-full py-3 px-2">
                    <span className="text-sm text-white">Royalties</span>
                    <span className="font-semibold text-gray-400">13%</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 bg-gray-700 rounded border-[1px] border-white/20 py-1 px-2">
                  <span className="text-sm text-gray-400">Size</span>
                  <div className="font-semibold flex gap-1 flex-col text-gray-400">
                    <p>Length: 20cm</p>
                    <p>Height: 20cm</p>
                    <p>Width: 20cm</p>
                    <p>Weight: 10kg</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Thumbnails */}
        <div className="w-full mt-6 md:mt-0 flex flex-wrap gap-2 justify-center items-center">
          {Array.from({ length: 4 }).map((_, index) => (
            <img
              key={index}
              src="https://images.unsplash.com/photo-1551047163-78c1a36ad573?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3RhdHVlfGVufDB8fDB8fHww"
              alt={`Thumbnail ${index + 1}`}
              className="flex-1 w-full sm:w-[calc(50%-4px)] md:w-[calc(33.33%-4px)] lg:w-[calc(20%-4px)] h-auto object-cover rounded-lg"
            />
          ))}
        </div>
        <div className="mt-6 p-4 rounded-lg bg-[#232323]">
          <div className="text-lg font-semibold text-white flex items-center gap-1">
            {' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
              />
            </svg>
            Description
          </div>
          <div className="w-full h-[1px] bg-white/20 my-[10px]"></div>
          <div className="text-gray-400">
            {isExpanded ? (
              <>
                8,888 NFTs of beautiful, Asian women painstakingly-crafted where
                even the most intricate details are steeped in historical
                significance. We envision 8SIAN being a global, inclusive
                community see more 8,888 NFTs of beautiful, Asian women
                painstakingly-crafted where even the most intricate details are
                steeped in historical significance. We envision 8SIAN being a
                global, inclusive community see more 8,888 NFTs of beautiful,
                Asian women painstakingly-crafted where even the most intricate
                details are steeped in historical significance. We envision
                8SIAN being a global, inclusive community see more
                <button
                  className="text-[#DDF247] hover:underline ml-1"
                  onClick={toggleDescription}
                >
                  See Less
                </button>
              </>
            ) : (
              <>
                8,888 NFTs of beautiful, Asian women painstakingly-crafted where
                even the most intricate details are steeped in historical
                significance. We envision 8SIAN being a global, Asian women
                painstakingly-crafted where even...
                <button
                  className="text-[#DDF247] hover:underline ml-1"
                  onClick={toggleDescription}
                >
                  See More
                </button>
              </>
            )}
          </div>
        </div>
        <div className="mt-6 p-4 rounded-lg bg-[#232323]">
          <div className="text-lg font-semibold text-white ml-[15px] flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"
              />
            </svg>
            Item activity
          </div>
          <div className="w-full h-[1px] bg-white/20 my-[10px]"></div>
          <table className="min-w-full border-collapse">
            <thead>
              <tr>
                {columnNames.map((columnName, index) => (
                  <th key={index} className="text-white px-4 py-2 text-left">
                    {columnName}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, rowIndex) => {
                const isLastRow = rowIndex === data.length - 1;
                const rowClass = isLastRow ? '' : 'border-b border-gray-700';

                return (
                  <tr key={rowIndex} className={rowClass}>
                    {row.map((cell, colIndex) => {
                      const textColor =
                        colIndex === 2 || colIndex === 3
                          ? 'text-[#DDF247]'
                          : 'text-white';

                      return (
                        <td key={colIndex} className={`${textColor} px-4 py-2`}>
                          {cell}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="mt-6 p-4 rounded-lg bg-[#232323]">
          <div className="text-lg font-semibold text-white ml-[15px] flex justify-start items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              />
            </svg>
            Details
          </div>
          <div className="w-full h-[1px] bg-white/20 my-[10px]"></div>
          <table className="min-w-full border-collapse">
            <tbody>
              {customData.map((data, index) => (
                <tr
                  key={index}
                  className={
                    index !== customData.length - 1
                      ? 'border-b border-gray-700'
                      : ''
                  }
                >
                  <td className="text-white px-4 py-2">{data}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <img
            className=" w-full object-cover mt-[20px]"
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/newsletter-e-mail-header-logo-email-banner-design-template-1152f2dc9cde9e4d3307f35e33e5fa73_screen.jpg?ts=1603708061"
          />
        </div>
      </div>
    </div>
  );
};
export default TestDevelopment;
