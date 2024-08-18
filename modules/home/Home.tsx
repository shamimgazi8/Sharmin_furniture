import Marquee from '../@common/marquee';
import Hero from './Hero';
import HeroGallery from './heroGallery';
import LatestShots from './latestShots';
import OurProducts from './ourProducts';
import PopulerFurniture from './populerFuniture';
import CreationPurpose from './purpose';
import Uniqueness from './uniqueness/Uniqueness';

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
