'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from 'react-icons/io';

// Sample data for the carousel
const items = [
  {
    id: 1,
    name: 'Item 1',
    description: 'Description for item 1',
    imgUrl: 'https://m.media-amazon.com/images/I/71u3F2NZ9gL.jpg',
  },
  {
    id: 2,
    name: 'Item 2',
    description: 'Description for item 2',
    imgUrl:
      'https://m.media-amazon.com/images/I/71ri4+zFc4L._AC_UF894,1000_QL80_.jpg',
  },
  {
    id: 3,
    name: 'Item 3',
    description: 'Description for item 3',
    imgUrl:
      'https://www.alankaram.in/wp-content/uploads/2022/12/A7402720-2048x1365-1.jpg',
  },
  {
    id: 4,
    name: 'Item 4',
    description: 'Description for item 4',
    imgUrl:
      'https://images-cdn.ubuy.co.in/6356b3a5c2926a7d140892e4-a-beautiful-high-quality-living-room.jpg',
  },
  {
    id: 5,
    name: 'Item 5',
    description: 'Description for item 5',
    imgUrl:
      'https://assets.wfcdn.com/im/44513477/c_crop_resize_zoom-h624-w900%5Ecompr-r85/2433/243397967/default_name.jpg',
  },
];
interface MyComponentProps {
  height: string;
  width: string;
}

const MultiSlider: React.FC<MyComponentProps> = ({ height, width }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle click for the next button
  const next = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % items.length);
  };

  // Handle click for the previous button
  const prev = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + items.length) % items.length);
  };

  // Determine the indices of the items to show
  const visibleItems = items.slice(currentIndex, currentIndex + 3);

  // If there aren't enough items at the end, wrap around to the start
  if (visibleItems.length < 3) {
    visibleItems.push(...items.slice(0, 3 - visibleItems.length));
  }

  const transformValue = -(currentIndex * 33.33); // Move by 33.33% for each item

  return (
    <div className=" max-w-full flex justify-center items-center">
      <div className=" flex justify-center items-center ">
        <button
          onClick={prev}
          className="p-1 rounded-full z-50 transition-all text-gray-600 hover:text-gray-800 translate-x-[42px]"
        >
          <IoIosArrowDropleftCircle className="text-[40px]" />
        </button>

        <div
          style={{ width: `${width}px` }}
          className={`flex flex-col items-center justify-center   overflow-hidden`}
        >
          <div className="relative w-full">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(${transformValue}%)` }}
            >
              {items.map(item => (
                <div key={item.id} className="flex-shrink-0 w-1/3 p-2">
                  <div
                    style={{ height: `${height}px` }}
                    className={`p-4 rounded-lg `}
                  >
                    <Image
                      height={Number(height)}
                      width={Number(width)}
                      src={item?.imgUrl}
                      alt={
                        'https://m.media-amazon.com/images/I/71u3F2NZ9gL.jpg'
                      }
                      className="rounded-lg shadow-lg  h-full w-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* <div className="flex justify-between w-full mt-4">
          <button
            onClick={prev}
            className="p-1 rounded-full z-50 transition-all text-gray-600 hover:text-gray-800"
          >
            <IoIosArrowDropleftCircle className="text-[40px]" />
          </button>
          <button
            onClick={next}
            className="p-1 rounded-full z-50 transition-all text-gray-600 hover:text-gray-800"
          >
            <IoIosArrowDroprightCircle className="text-[40px]" />
          </button>
        </div> */}
        </div>
        <button
          onClick={next}
          className="p-1 rounded-full z-50 transition-all text-gray-600 hover:text-gray-800 translate-x-[-42px]"
        >
          <IoIosArrowDroprightCircle className="text-[40px]" />
        </button>
      </div>
    </div>
  );
};

export default MultiSlider;
