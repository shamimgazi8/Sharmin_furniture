'use client';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import MultiSlider from '../home/multiCerasoul';
import Tab from '../@common/Tabs';
const ProductDetails = () => {
  const { productDetails } = useParams();
  const product = {
    id: 1,
    name: 'Solid Wood Dining Table',
    slug: 'solid-wood-dining-table-001',
    description:
      'A sturdy dining table made from solid oak with a natural finish.',
    price: 899,
    imageUrl:
      'https://admin.regalfurniturebd.com/storage/uploads/fullsize/2023-02/sdc-363-komol---.jpg',
    dimensions: {
      width: '72 inches',
      depth: '36 inches',
      height: '30 inches',
    },
    material: 'Oak wood',
    color: 'Natural',
  };
  return (
    <div className="grid grid-cols-[2fr_1fr]">
      <div className="max-w-4xl mx-auto my-8 p-4 dark:bg-gray-800 dark:border-2 dark:border-white/40 shadow-lg rounded-lg">
        <div className="flex flex-col md:flex-row">
          <Image
            height={200}
            width={300}
            src={product.imageUrl}
            alt={product.name}
            className="w-full md:w-1/2 h-64 object-cover rounded-lg"
          />
          <div className="flex flex-col justify-between p-4 md:w-1/2">
            <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
            <p className="dark:text-gray-200 mb-4">{product.description}</p>
            <div className="flex flex-wrap mb-4">
              <div className="w-1/2 mb-2">
                <span className="font-semibold">Material:</span>{' '}
                {product.material}
              </div>
              <div className="w-1/2 mb-2">
                <span className="font-semibold">Color:</span> {product.color}
              </div>
              <div className="w-1/2 mb-2">
                <span className="font-semibold">Dimensions:</span>{' '}
                {product.dimensions.width} x {product.dimensions.depth} x{' '}
                {product.dimensions.height}
              </div>
            </div>
            <div className="text-xl font-bold text-red-600 mb-4">
              ${product.price}
            </div>
            <button className="btn-secondary">Add to Cart</button>
          </div>
        </div>
      </div>
      <div className=" mt-5 flex flex-col gap-3 justify-start items-center">
        <h1>YOU MAY ALSO LIKE</h1>
        <MultiSlider height="300" width="400" itemsToShow={1} blogCart={true} />
      </div>
      <div className="w-[70%] col-span-2 mx-auto ">
        <Tab />
      </div>
      <div className=" col-span-2 w-[70%] mx-auto flex justify-center items-center flex-col mt-5">
        <h1 className=" text-3xl font-semibold">Related Products</h1>
        <MultiSlider height="200" itemsToShow={4} blogCart={true} />
      </div>
    </div>
  );
};
export default ProductDetails;
