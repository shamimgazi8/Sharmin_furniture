'use client';
import { useParams } from 'next/navigation';
import ProductCard from '../@common/universelCard.tsx';
import Link from 'next/link';
import BlogCard from '../@common/universelCard.tsx';
import data from './../../data/furniture-data.json';
const Categories = () => {
  const { categorySlug } = useParams();
  const dataArray: any = data;
  return (
    <div>
      <div className=" grid md:grid-cols-2 lg:grid-cols-4 lg:gap-4">
        {dataArray?.slice(0, 4).map((item: any, i: any) => {
          return (
            <>
              <BlogCard
                key={i}
                data={item}
                classes={{
                  root: ` items-center  gap-[17px] ${
                    i < 3 ? 'lg:border-r' : ''
                  } pr-4 self-start`,
                  imageWrapper: '!mb-0 lg:!h-[190px] h-[210px] self-start',
                  imageStyle: '!mb-0 !h-full object-cover self-start',
                  title: 'lg:!text-xl text-[22px] !mb-3 self-start',
                  desc: ' text-base mb-4  self-start',
                  date: 'hidden lg:visible',
                }}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};
export default Categories;
