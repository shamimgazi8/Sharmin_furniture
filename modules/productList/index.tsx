'use client';
import { useParams } from 'next/navigation';
import { capitalizeFirstLetter } from './../../utils/utils';
import BlogCard from '../@common/universelCard.tsx';
import data from './../../data/bedroom.json';
import PaginatedList from '../@common/pagination';
import Bredcrumb from '../@common/Bredcrumb';
import { Select, Slider } from 'antd';

const ProductList = () => {
  const { categorySlug } = useParams();
  const { productList } = useParams();
  const decodedSlug = capitalizeFirstLetter(categorySlug);
  const decodedSlug1 = capitalizeFirstLetter(productList);
  const bredcums = [
    {
      title: 'Home',
      link: '/',
    },
    {
      title: decodedSlug,
      link: `/${categorySlug}`,
    },
    {
      title: decodedSlug1,
      link: '',
    },
  ];
  const dataArray: any = data;
  return (
    <div className=" container mx-auto ">
      <div className=" my-5">
        <Bredcrumb items={bredcums} />
      </div>
      <div className=" my-[30px]">
        <h1 className=" text-2xl">
          All {capitalizeFirstLetter(decodedSlug1)} Collections
        </h1>
      </div>

      <div className=" grid grid-cols-[0.5fr_2fr] gap-5">
        <div className=" backdrop-blur-lg rounded flex flex-col justify-start items-center px-2">
          <h1 className=" text-3xl font-semibold text-gray-600"></h1>
          <div className=" w-full my-5 flex flex-col gap-5 ">
            <Select
              className=" w-full"
              filterOption={(input, option) =>
                (option?.label ?? '')
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              defaultValue={'ALL'}
              options={[
                { value: '1', label: 'All' },
                { value: '2', label: 'Availabe' },
                { value: '3', label: 'Booking!' },
              ]}
            />
            <div className=" ">
              <h1>Price Range: </h1>

              <Slider
                range={{ draggableTrack: true }}
                defaultValue={[10000, 120000]}
                max={200000}
                min={5000}
              />
            </div>
          </div>
        </div>
        <div>
          <div className=" grid md:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            {dataArray?.slice().map((item: any, i: any) => {
              return (
                <>
                  <BlogCard
                    key={i}
                    data={item}
                    classes={{
                      root: ` border-[1px] border-white/50 items-center  gap-[17px] shadow-lg rounded ${
                        i < 9 ? '' : ''
                      } self-start`,
                      imageWrapper: '!mb-0 lg:!h-[190px] h-[210px] self-start',
                      imageStyle: '!mb-0 !h-full object-cover self-start',
                      name: 'lg:!text-lg font-semibold text-[22px] !mb-3 self-start pl-5 line-clamp-1',
                      desc: ' hidden',
                      date: 'hidden ',
                    }}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>

      <div className="my-5 w-full flex justify-center items-end">
        <PaginatedList />
      </div>
    </div>
  );
};
export default ProductList;
