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
    <section className=" mx-[100px] my-[50px]">
      <div className="grid grid-cols-2 grid-rows-2">
        <div className=" row-span-2 flex flex-col justify-center items-end gap-2 text-end mr-[50px]">
          <h1 className=" text-[50px]">
            Choose what resonates with your{' '}
            <span className=" gradient-text">uniqueness</span>
          </h1>
          <p className=" text-[25px] font-normal">
            Organize every space with our timeless furniture collections
          </p>
          <button>
            Explore <span className=" border-b-[2px] pb-1 ">Now</span>
          </button>
        </div>

        <div className=" h-[300px] w-[600px] row-span-2">
          {' '}
          <Carousel arrows={true}>
            {product.map((item: any, i: any) => {
              return (
                <div key={i} className=" ">
                  <div style={contentStyle}>
                    <div className="max-w-md mx-auto shadow-lg rounded-lg overflow-hidden flex">
                      <div className="flex flex-col items-center px-4 py-3 ">
                        <div>
                          {/* <img
                            className="h-[200px] w-[500px] object-cover rounded-md"
                            src={item?.imageUrl}
                          /> */}
                          <Image
                            height={300}
                            className="object-cover"
                            alt="fj"
                            width={500}
                            src={item?.imageUrl}
                          />
                          <div className=" absolute  bottom-[100px] top-[200px] translate-x-[360px] rotate-90">
                            <h2
                              className={` text-xl font-semibold gradient-text ${i === 0 && 'ml-[40px]'}   `}
                            >
                              {item?.name}
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </section>
  );
};
export default Uniqueness;
