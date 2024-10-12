import Accordion from '@/modules/@common/Accoradtion';
import MultiSlider from '../multiCerasoul';

const LatestShots = () => {
  return (
    <div
      data-aos="fade-right"
      className=" lg:grid lg:grid-cols-[1fr_2fr]  mt-5 px-5 my-5"
    >
      <div className=" flex flex-col justify-center items-start text-start gap-4 ml-[20px]">
        <h1 className=" text-[50px]">
          Latest Sharmin&apos;s
          <span className=" gradient-text"> shorts</span>
        </h1>
        <p className=" text-[25px] font-normal">
          Take a glance and grab ideas from the artistic frames of SHARMIN.
        </p>
        <button>
          Explore to view more{' '}
          <span className=" border-b-[2px] pb-1 ">Ideas</span>
        </button>
      </div>
      <div className="">
        <Accordion />
      </div>
    </div>
  );
};

export default LatestShots;
