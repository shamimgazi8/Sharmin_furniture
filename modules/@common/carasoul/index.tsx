// src/components/Marquee.jsx
import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';

const Cerasoul = (imgObject: any) => {
  return (
    <div className="">
      <Carousel arrows infinite={true} autoplay>
        <div className=" lg:h-[100vh]">
          <Image
            src="/furniture/f5.jpg"
            height={1000}
            width={2000}
            alt="hero-one"
            className=" object-cover rounded-lg"
          />
        </div>
        <div className=" lg:h-[100vh]">
          <Image
            src="/furniture/f2.jpg"
            height={1000}
            width={2000}
            alt="hero-one"
            className=" object-cover rounded-lg"
          />
        </div>{' '}
        <div className="lg:h-[100vh]">
          <Image
            src="/furniture/f1.jpg"
            height={1000}
            width={2000}
            alt="hero-one"
            className=" object-cover rounded-lg"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Cerasoul;
