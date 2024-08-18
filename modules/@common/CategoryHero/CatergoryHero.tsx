import { capitalizeFirstLetter, excerpt } from '@/utils/utils';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '../Bredcrumb';

interface propTypes {
  data?: any;
  categorySlug?: any;
}

const CategoryHero = ({ data, categorySlug }: propTypes) => {
  return (
    <section>
      <div className=" bg-red-400 h-[400px] w-full relative mb-5">
        <Image
          layout="fill"
          objectFit="cover"
          alt="feature imga"
          src={data?.featureImage}
        />
        <div className=" absolute backdrop-blur-md  text-3xl top-[100px] left-[100px] p-[20px] text-center">
          <h1 className="  text-white  flex flex-col">
            Find Out All{' '}
            <span className="gradient-text text-5xl py-3">
              {capitalizeFirstLetter(categorySlug)}
            </span>{' '}
            Furnitures
          </h1>
        </div>
      </div>
    </section>
  );
};

export default CategoryHero;
