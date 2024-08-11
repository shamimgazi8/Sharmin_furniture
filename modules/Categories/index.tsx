'use client';
import { useParams } from 'next/navigation';
import { capitalizeFirstLetter } from './../../utils/utils';
import BlogCard from '../@common/universelCard.tsx';
import data from './../../data/bedroom.json';
import PaginatedList from '../@common/pagination';
import Bredcrumb from '../@common/Bredcrumb';

const Categories = () => {
  const { categorySlug } = useParams();
  const bredcums = [
    {
      title: 'Home',
      link: '/',
    },
    {
      title: categorySlug,
      link: '',
    },
  ];
  const dataArray: any = data;
  return (
    <div className=" container mx-auto ">
      <div className=" mt-5">
        <Bredcrumb items={bredcums} />
      </div>
      <div className=" my-[30px]">
        <h1 className=" text-2xl">
          All {capitalizeFirstLetter(categorySlug)} Categories Products
        </h1>
      </div>
      <div className=" grid md:grid-cols-2 lg:grid-cols-4 lg:gap-4">
        {dataArray?.slice().map((item: any, i: any) => {
          return (
            <>
              <BlogCard
                key={i}
                data={item}
                classes={{
                  root: ` items-center  gap-[17px] shadow-lg rounded ${
                    i < 9 ? '' : ''
                  } self-start`,
                  imageWrapper: '!mb-0 lg:!h-[190px] h-[210px] self-start',
                  imageStyle: '!mb-0 !h-full object-cover self-start',
                  name: 'lg:!text-lg font-semibold text-[22px] !mb-3 self-start pl-5',
                  desc: ' hidden',
                  date: 'hidden ',
                }}
              />
            </>
          );
        })}
      </div>
      <div className="my-5 w-full flex justify-center items-end">
        <PaginatedList />
      </div>
    </div>
  );
};
export default Categories;
