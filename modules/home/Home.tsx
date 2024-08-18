import Marquee from '../@common/marquee';
import Hero from './@components/Hero';
import HeroGallery from './@components/heroGallery';
import LatestShots from './@components/latestShots';
import OurProducts from './@components/ourProducts';
import PopulerFurniture from './@components/populerFuniture';
import CreationPurpose from './@components/purpose';
import Uniqueness from './@components/uniqueness/Uniqueness';

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
      <LatestShots />
    </div>
  );
};
export default HomePage;
