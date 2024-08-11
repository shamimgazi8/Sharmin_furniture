'use client';
import Link from 'next/link';
import { useParams } from 'next/navigation';
const ProductList = () => {
  const { productList } = useParams();
  return (
    <>
      <div> hello Product List: {productList}</div>
      <Link href={'/'} className="btn-secondary">
        Go Back Home
      </Link>
    </>
  );
};
export default ProductList;
