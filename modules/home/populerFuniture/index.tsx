import HoverCart from '@/modules/@common/group-hoverCart';
import Image from 'next/image';
import Link from 'next/link';
import { LuMoveRight } from 'react-icons/lu';
import furnitureData from './../../../data/furniture-data.json';

const PopulerFurniture = () => {
  return (
    <div className=" mx-[70px]">
      <div>
        <Link className="group" href={'/populer-furniture'}>
          <div className=" flex items-center justify-center gap-5 text-2xl mb-5  transition-all  ">
            <span className=" ">Popular Furniture </span>
            <span>
              <LuMoveRight className=" text-2xl group-hover:scale-150 transition-all mt-1" />
            </span>
          </div>
        </Link>
      </div>
      <div className=" flex gap-8 justify-center">
        {furnitureData.slice(0, 4).map((item: any, i: any) => {
          return <HoverCart key={i} data={item} />;
        })}
      </div>
    </div>
  );
};

export default PopulerFurniture;
