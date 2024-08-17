import { Carousel, Image } from 'antd';

import product from './../../../data/furniture-data.json';

import Item from 'antd/es/list/Item';

const Uniqueness = () => {
  const contentStyle: React.CSSProperties = {
    height: '350px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
  };
  return (
    <section data-aos="fade-left" className=" mx-[100px] my-[50px]">
      <div className="grid lg:grid-cols-2 lg:grid-rows-2 w-full">
        <div className=" lg:row-span-2 flex flex-col justify-center items-end gap-2 text-end lg:mr-[50px]">
          <h1 className=" lg:text-[50px]">
            Choose what resonates with your{' '}
            <span className=" gradient-text">uniqueness</span>
          </h1>
          <p className=" lg:text-[25px] font-normal">
            Organize every space with our timeless furniture collections
          </p>
          <button>
            Explore <span className=" border-b-[2px] pb-1 ">Now</span>
          </button>
        </div>

        <div className=" h-[300px] w-[600px] row-span-2"> carasoul</div>
      </div>
    </section>
  );
};
export default Uniqueness;
