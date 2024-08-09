import Image from 'next/image';
import Marquee from '../@common/marquee';
import Hero from './Hero';
import HeroGallery from './heroGallery';
import MultiSlider from './multiCerasoul';
import OurProducts from './ourProducts';
import PopulerFurniture from './populerFuniture';
import CreationPurpose from './purpose';
import Uniqueness from './uniqueness/Uniqueness';
import SearchBar from '../@common/search';
const items = [
  {
    src: 'https://www.bdfurnituresolution.com/images/stories/virtuemart/product/sunshine-bed-furniture-bdfs-dhaka.jpg',
    alt: 'Slide 1',
    caption: 'This is the first slide',
  },
  {
    src: 'https://admin.regalfurniturebd.com/storage/uploads/fullsize/2023-06/cbh-145--.jpg',
    alt: 'Slide 2',
    caption: 'This is the second slide',
  },
  {
    src: 'https://www.bdfurnituresolution.com/images/stories/virtuemart/product/std-bed-furniture-dhaka.jpg',
    alt: 'Slide 3',
    caption: 'This is the third slide',
  },
];
const HomePage = () => {
  return (
    <div className=" flex flex-col  gap-0 ">
      <Hero />
      <CreationPurpose />
      <Marquee text="SHARMIN FURNITURE" />
      <HeroGallery />
      <OurProducts />
      <PopulerFurniture />
      <Uniqueness />
      <div className=" grid grid-cols-2 mt-5">
        <MultiSlider height="400" width="700" />
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
      <div className="  grid grid-cols-2 mt-5">
        <Image
          height={800}
          width={300}
          src={`https://img.freepik.com/premium-psd/modern-furniture-social-media-promotion-banner-instagram-poster-template_545154-71.jpg`}
          alt={'sharmin furn'}
          className="h-full w-full object-cover"
        />
        <Image
          height={800}
          width={300}
          src={`https://i.pinimg.com/736x/9b/06/c7/9b06c7158a63c7af6df2dd27b99e8e05.jpg`}
          alt={'sharmin furn'}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};
export default HomePage;
