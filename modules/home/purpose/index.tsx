import { Image } from 'antd';
import Link from 'next/link';

const album = [
  '/furniture/up10.jpg',
  '/furniture/up9.jpg',
  '/furniture/up8.jpg',
  '/furniture/up7.jpg',
  '/furniture/up6.jpg',
  '/furniture/up5.jpg',
];
const CreationPurpose = () => {
  return (
    <div
      data-aos="zoom-in"
      className=" grid grid-cols-[2fr_1fr_1fr_1fr] grid-rows-2 gap-2 mt-5"
    >
      <div className=" row-span-2 flex flex-col justify-center items-end gap-2 mr-[50px]">
        <h1 className=" text-3xl font-bold">Creations with purpose</h1>
        <h2 className=" text-2xl font-normal gradient-text">
          Many choices based on your space
        </h2>
        <Link href="/">
          <button>
            Explore <span className=" border-b-[2px] pb-1 ">Now</span>
          </button>
        </Link>
      </div>

      {album.map((item: any, i: number) => {
        return (
          <div key={i} className="h-[200px] w-[300px] overflow-hidden rounded">
            <div className=" absolute p-[105px] text-white cursor-pointer">
              BedRoom
            </div>
            <Image alt="fj" width={270} height={200} src={`${item}`} />
          </div>
        );
      })}
    </div>
  );
};
export default CreationPurpose;
