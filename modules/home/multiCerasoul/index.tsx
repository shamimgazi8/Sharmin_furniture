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
    price: '44556',
    description: 'Description for item 1',
    imgUrl: 'https://m.media-amazon.com/images/I/71u3F2NZ9gL.jpg',
  },
  {
    id: 2,
    name: 'Item 2',
    price: '44556',
    description: 'Description for item 2',
    imgUrl:
      'https://m.media-amazon.com/images/I/71ri4+zFc4L._AC_UF894,1000_QL80_.jpg',
  },
  {
    id: 3,
    name: 'Item 3',
    price: '44556',
    description: 'Description for item 3',
    imgUrl:
      'https://www.alankaram.in/wp-content/uploads/2022/12/A7402720-2048x1365-1.jpg',
  },
  {
    id: 4,
    name: 'Item 4',
    price: '44556',
    description: 'Description for item 4',
    imgUrl:
      'https://images-cdn.ubuy.co.in/6356b3a5c2926a7d140892e4-a-beautiful-high-quality-living-room.jpg',
  },
  {
    id: 5,
    name: 'Item 5',
    price: '44556',
    description: 'Description for item 5',
    imgUrl:
      'https://assets.wfcdn.com/im/44513477/c_crop_resize_zoom-h624-w900%5Ecompr-r85/2433/243397967/default_name.jpg',
  },
];

interface MyComponentProps {
  height: string;
  width?: string;
  itemsToShow: number; // New prop to specify the number of items to show
  blogCart?: boolean;
}

const MultiSlider: React.FC<MyComponentProps> = ({
  height,
  width,
  itemsToShow,
  blogCart,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = items.length;

  // Handle click for the next button
  const next = () => {
    setCurrentIndex(prevIndex =>
      prevIndex + itemsToShow >= totalItems ? 0 : prevIndex + itemsToShow
    );
  };

  // Handle click for the previous button
  const prev = () => {
    setCurrentIndex(prevIndex =>
      prevIndex - itemsToShow < 0
        ? totalItems - itemsToShow
        : prevIndex - itemsToShow
    );
  };

  // Determine the indices of the items to show
  const visibleItems = items.slice(currentIndex, currentIndex + itemsToShow);

  // If there aren't enough items at the end, wrap around to the start
  if (visibleItems.length < itemsToShow) {
    visibleItems.push(...items.slice(0, itemsToShow - visibleItems.length));
  }

  const itemWidthPercentage = 100 / itemsToShow; // Calculate width for each item
  const transformValue = -(currentIndex * itemWidthPercentage); // Move by percentage of item width

  return (
    <div className="lg:max-w-full flex justify-center items-center">
      <div className="flex justify-center items-center">
        <button
          onClick={prev}
          className="p-1 rounded-full z-50 transition-all text-gray-600 hover:text-gray-800 translate-x-[42px]"
        >
          <IoIosArrowDropleftCircle className="text-[40px]" />
        </button>

        <div
          style={width ? { width: `${width}px` } : { width: `100%` }}
          className="flex flex-col items-center justify-center overflow-hidden"
        >
          <div className="relative w-full">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(${transformValue}%)` }}
            >
              {items.map(item => (
                <div
                  key={item.id}
                  className="flex-shrink-0"
                  style={{ width: `${itemWidthPercentage}%`, padding: '8px' }}
                >
                  <div
                    style={{ height: `${height}px` }}
                    className="p-4 rounded-lg"
                  >
                    <Image
                      height={Number(height)}
                      width={width ? Number(width) : 100}
                      src={item.imgUrl}
                      alt={item.name}
                      className="rounded-lg shadow-lg h-full w-full object-cover"
                    />
                    {blogCart && (
                      <div>
                        <p>{item?.name}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
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
