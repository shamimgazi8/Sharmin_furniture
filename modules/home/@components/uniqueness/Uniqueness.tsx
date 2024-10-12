import CarouselNext from '@/modules/@common/Carousle-next';

const Uniqueness = () => {
  return (
    <section data-aos="fade-left" className=" lg:mx-[100px] my-[50px] mx-5 ">
      <div className="grid lg:grid-cols-2 ">
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
        <div className="  lg:row-span-2">
          {/* <MultiSlider itemsToShow={1} /> */}
          <CarouselNext
            images={[
              'https://hatil-image.s3.ap-southeast-1.amazonaws.com/Nop_Image/_2LD2068.jpg',
              'https://www.theinside.com/blog/wp-content/uploads/2022/09/kyliefitts_havenly_theinside_shelbynorwalk_69-1-scaled.jpg',
              'https://cdn.media.amplience.net/i/shadesoflight/furniture_1?fmt=auto&w=575',
              'https://www.bdfurnituresolution.com/images/stories/virtuemart/product/sunshine-bed-furniture-bdfs-dhaka.jpg',
              'https://media.designcafe.com/wp-content/uploads/2021/12/27144355/design-cafe-modular-furniture-benefits.jpg',
            ]}
          />
        </div>
      </div>
    </section>
  );
};
export default Uniqueness;
