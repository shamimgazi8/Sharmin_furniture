import MultiSlider from '../multiCerasoul';

const LatestShots = () => {
  return (
    <div data-aos="fade-right" className=" grid lg:grid-cols-2 mt-5">
      <div className=" lg:flex hidden">
        <MultiSlider height="400" width="700" itemsToShow={4} />
      </div>
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
    </div>
  );
};

export default LatestShots;
