import HomePage from '@/modules/home/Home';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sharmin Furniture',
  keywords: 'furniture sharmin wood wooden',
  description: 'Funritre Shop',
  //   openGraph: {
  //     url: `${baseUrl}`,
  //     siteName: 'World University Hub',
  //     // images: [`/meta/unihub-meta.jpg`],
  //     locale: 'en_US',
  //     type: 'website',
  //   },
};

const Home = () => {
  return (
    <>
      <HomePage />
    </>
  );
};

export default Home;
