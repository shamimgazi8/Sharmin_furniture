import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GoDotFill } from 'react-icons/go';
import { excerpt } from '@/utils/utils';
import { FaCartPlus } from 'react-icons/fa';
import { MdOutlineViewInAr } from 'react-icons/md';

import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './../../../appstore/reducers/cartReducer';

interface BlogCardProps {
  data?: any;
  classes?: {
    root?: any;
    imageWrapper?: string;
    imageStyle?: string;
    iconWrapper?: string;
    name?: string;
    icon?: string;
    data?: string;
    galleryWrapper?: string;
    icongallery?: string;
    body?: string;
    badge?: string;
    highlight?: string;
    desc?: string;
    date?: string;
    hero?: string;
    overlay?: string;
    imgiconWrapper?: string;
    imgicon?: string;
  };
  type?: string;
}

const BlogCard = ({ data, classes, type }: BlogCardProps) => {
  const dispatch = useDispatch();

  const handleAddItem = (item: any) => {
    // Add item to redux state
    dispatch(addItem(item));

    // Get current cart items from localStorage
    const cartItems = typeof window !== 'undefined' && localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems') || '[]')
      : [];

    // Add new item to the cart
    const updatedCartItems = [...cartItems, item];

    // Save updated cart to localStorage
    typeof window !== 'undefined' &&
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

    console.log('Item added to cart:', updatedCartItems);
  };

  return (
    <>
      <div
        className={`grid group hover:text-inherit relative cursor-pointer ${
          classes?.root ? classes.root : ''
        }`}
      >
        <div
          key={data?.id}
          className={` ${classes?.imageWrapper ? classes.imageWrapper : ''} product group relative overflow-hidden`}
        >
          <Image
            height={300}
            width={300}
            src={data?.imageUrl}
            alt="Modern Sofa"
            className={`object-cover ${
              classes?.imageStyle ? classes.imageStyle : ''
            } w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110`}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            <div className="text-white text-lg line-clamp-1 flex gap-2 flex-col justify-center items-center">
              <button
                onClick={() => handleAddItem(data)}
                className="btn-secondary flex items-center justify-center gap-2 rounded-full text-[12px]"
              >
                <FaCartPlus className="" /> ADD TO CART
              </button>
              <Link href={`/${'product'}/${data?.slug}`}>
                <button className="btn-primary flex items-center justify-center gap-2 rounded-full text-[12px]">
                  <MdOutlineViewInAr className="" />
                  VIEW PRODUCT
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className={` ${classes?.body ? classes.body : ''}`}>
          <h3
            className={`group-hover:text-primary transition-all mb-[10px] ${
              classes?.name ? classes.name : ''
            }`}
          >
            {data?.highlight && (
              <span
                className={`inline-flex items-center gap-1 pr-1 ${
                  classes?.highlight ? classes.highlight : ''
                }`}
              >
                <span className="mb-0 text-primary font-medium leading-[25px]">
                  {excerpt(data?.highlight, 12)}
                </span>
                <GoDotFill className="text-primary text-sm" />
              </span>
            )}
            {data?.name}
          </h3>
          {data?.excerpt && (
            <p className={`line-clamp-4 ${classes?.desc ? classes?.desc : ''}`}>
              {data?.excerpt}
            </p>
          )}
          <span
            className={`mb-0 text-[13px] ${classes?.date ? classes?.date : ''}`}
          >
            {data?.publishedAt}
          </span>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
