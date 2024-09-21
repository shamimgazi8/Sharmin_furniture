import Cerasoul from '@/modules/@common/carasoul';
import FullPageCarousel from '@/modules/@common/fullpageCarasoul';
import data from '../../../../data/dinningroom.json';
const Hero = () => {
  return (
    <div className=" z-50 ">
      <div className=" absolute lg:w-[500px] w-[200px]  backdrop-blur-xl z-50 lg:top-[200px] top-[140px] lg:right-[100px] right-[40px] rounded-md p-5 ">
        <div className=" lg:w-[110px] ">
          <h3 className="text-white p-2">New Arrival</h3>
        </div>
        <h1 className=" lg:text-[50px] font-semibold text-black">
          <span className=" gradient-text">Discover</span> Our New Collection
        </h1>
        <p className=" mb-3 line-clamp-2 lg:line-clamp-6">
          Sharmin Furniture appears to be a local furniture store or brand,
          possibly based in Dhaka, Bangladesh. While there is limited online
          information available specifically about Sharmin Furniture, it&apos;s
          likely a retailer offering a range of home furnishings, including
          sofas, beds, dining tables, and other interior decor items.
        </p>
        <div className=" w-[200px]">
          <button className=" btn-secondary">Buy Now</button>
        </div>
      </div>
      {/* <FullPageCarousel slides={data} /> */}
      <Cerasoul />
    </div>
  );
};
export default Hero;
