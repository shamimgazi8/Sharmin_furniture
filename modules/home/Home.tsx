import Cerasoul from '../@common/carasoul';

import Marquee from '../@common/marquee';
import HeroGallery from './heroGallery';
import OurProducts from './ourProducts';
import PopulerFurniture from './populerFuniture';
import CreationPurpose from './purpose';
import Uniqueness from './uniqueness/Uniqueness';

const HomePage = () => {
  return (
    <div className=" flex flex-col  gap-0 translate-y-[-70px]">
      <div className=" z-50 ">
        <div className=" absolute w-[500px]  backdrop-blur-xl z-50 top-[200px] right-[100px] rounded-md p-5 ">
          <div className=" w-[110px]">
            <h3 className="text-white p-2">New Arrival</h3>
          </div>
          <h1 className=" text-[50px] font-semibold text-black">
            <span className=" gradient-text">Discover</span> Our New Collection
          </h1>
          <p className=" mb-3">
            In the competitive world of furniture businesses, having a catchy
            and memorable slogan can make all the difference. A great slogan not
            only helps you stand out from the crowd but also communicates your
            brand&apos;s unique value proposition to potential customers
          </p>
          <div className=" w-[200px]">
            <button className=" btn-secondary">Buy Now</button>
          </div>
        </div>
        <Cerasoul />
      </div>
      <CreationPurpose />
      <div className="">
        <Marquee text="SHARMIN FURNITURE" />
      </div>
      <div className="">
        <HeroGallery />
      </div>
      <OurProducts />
      <PopulerFurniture />
      <Uniqueness />
    </div>
  );
};
export default HomePage;
