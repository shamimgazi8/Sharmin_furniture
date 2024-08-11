import Categories from '@/modules/Categories';
import Link from 'next/link';

const ProductPage = () => {
  return (
    <>
      <Categories />
      <Link href={'/'} className="btn-secondary">
        Go Back Home
      </Link>
    </>
  );
};
export default ProductPage;
