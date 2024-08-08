import { Image } from 'antd';
import Link from 'next/link';
const album = [
  'https://resourcefurniture.com/cdn/shop/products/SquareLine_02.jpg?v=1657815049&width=1024',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0CgKtZx1itzW_NCQs7-SdCTTw5A3QbK2WBU-qsOwYOOdHX3dQZCc_JdhfHEqwxdg0Gfc&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9MCqvPIRa2GOeNXB8Sb0rg3S1HKrmHwWjBmlivOmUyER2ZJNgUzsmzwAO38kFyyRbTOQ&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWV7nOwg0cBTeshMrK9UcMC6n2hOwuaclO56s3nQMBP46hQDEuK9vRzQut-RRSNUkD3VM&usqp=CAU',
  'https://image.made-in-china.com/202f0j00KBnijDFlwHqW/Luxury-Modern-Contemporary-Home-Furniture-Adjustable-Backrest-Fabric-L-Shaped-Sectional-Corner-Sofa.webp',
  'https://image.made-in-china.com/202f0j00SekisZPbltqc/Italian-Design-Modern-Living-Room-Apartment-Sectional-Fabric-Sofa.webp',
];
const CreationPurpose = () => {
  return (
    <div className=" grid grid-cols-[2fr_1fr_1fr_1fr] grid-rows-2 gap-2 mt-5">
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
            <Image alt="fj" width={270} height={200} src={item} />
          </div>
        );
      })}
    </div>
  );
};
export default CreationPurpose;
