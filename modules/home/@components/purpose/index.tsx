import { Image } from 'antd';
import Link from 'next/link';

const album = [
  'https://img.freepik.com/premium-photo/contemporary-living-room-interior-featuring-photo-frame-placeholder-brown-sofa-wooden-coffee_410516-90392.jpg',
  'https://img.freepik.com/premium-photo/comfortable-warm-design-easterthemed-living-room-with-placeholder-poster-frame_410516-90301.jpg',
  'https://img.freepik.com/premium-photo/modern-interior-design-furniture-generative-ai_779468-13709.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA3ibqpiFNxP25VYH31zOZ1QXXGZy7zamL3M4HLp-TnY2v4RalWvdjfc8IyChdLSLa5zw&usqp=CAU',
  'https://img.freepik.com/premium-photo/spacious-living-room-with-large-window-furniture-generative-ai_410516-63862.jpg',
  'https://img.freepik.com/premium-photo/luxury-modern-blue-living-room-interior-with-geometric-form-patterned-wall-generative-ai_779468-12036.jpg',
];
const CreationPurpose = () => {
  return (
    <div className=" container m-auto">
      <div
        data-aos="zoom-in"
        className=" w-full grid lg:grid-cols-[2fr_1fr_1fr_1fr] grid-cols-2 grid-rows-2 gap-2 mt-5 "
      >
        <div className=" row-span-2 flex flex-col justify-center lg:items-end items-center lg:pl-0 gap-2 lg:mr-[50px]">
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
            <div
              key={i}
              className="lg:h-[200px] lg:w-[300px] overflow-hidden rounded"
            >
              <div className=" absolute p-[105px] text-white cursor-pointer">
                BedRoom
              </div>
              <Image alt="fj" width={270} height={200} src={`${item}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CreationPurpose;
