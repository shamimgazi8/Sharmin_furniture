import MultiSlider from '../multiCerasoul';

const Uniqueness = () => {
  return (
    <section data-aos="fade-left" className=" lg:mx-[100px] my-[50px] mx-5 ">
      <div className="grid lg:grid-cols-2 grid-rows-2">
        <div className=" lg:row-span-2 flex flex-col justify-center lg:items-end gap-2 lg:text-end items-center text-center lg:mr-[50px]">
          <h1 className=" text-[50px]">
            Choose what resonates with your{' '}
            <span className=" gradient-text">uniqueness</span>
          </h1>
          <p className=" text-[25px] font-normal">
            Organize every space with our timeless furniture collections
          </p>
          <button>
            Explore <span className=" border-b-[2px] pb-1 ">Now</span>
          </button>
        </div>
        <div className=" lg:hidden flex">Place holder img</div>

        <div className=" lg:flex hidden  row-span-2">
          <MultiSlider height={` 400`} width={` 500`} itemsToShow={1} />
        </div>
      </div>
    </section>
  );
};
export default Uniqueness;
