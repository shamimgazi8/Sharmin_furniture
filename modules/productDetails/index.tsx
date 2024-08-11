'use client';
import { useParams } from 'next/navigation';
const ProductDetails = () => {
  const { productDetails } = useParams();

  return <div> hello product details: {productDetails}</div>;
};
export default ProductDetails;
