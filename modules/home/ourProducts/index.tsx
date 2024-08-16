import Image from 'next/image';
import React from 'react';

const products = [
  {
    id: 1,
    name: 'Bed Room',
    description: 'A comfortable and stylish modern sofa.',
    price: '$499',
    imageUrl:
      'https://hatil-image.s3.ap-southeast-1.amazonaws.com/Nop_Image/Bedroom%20set%201%20LQ.png',
  },
  {
    id: 2,
    name: 'Dinning Room',
    description: 'A sturdy dining table made of oak.',
    price: '$799',
    imageUrl:
      'https://hatil-image.s3.ap-southeast-1.amazonaws.com/master_image/Idyll-152.png',
  },
  {
    id: 3,
    name: 'Living Room',
    description: 'An ergonomic office chair for all-day comfort.',
    price: '$199',
    imageUrl:
      'https://cdn.media.amplience.net/i/shadesoflight/furniture_1?fmt=auto&w=575',
  },
  {
    id: 4,
    name: 'Reading Room',
    description: 'A spacious bookshelf to organize your books.',
    price: '$299',
    imageUrl:
      'https://birchwood.com/wp-content/uploads/2023/09/BirchwoodFurniture-aug2023-missingheroes-hp-1.jpg',
  },
  {
    id: 4,
    name: 'Lifestyle',
    description: 'A spacious bookshelf to organize your books.',
    price: '$299',
    imageUrl:
      'https://ahdfurniture.com/wp-content/uploads/2024/04/sectional-sofa-1.webp',
  },
  {
    id: 4,
    name: 'Office Furniture',
    description: 'A spacious bookshelf to organize your books.',
    price: '$299',
    imageUrl:
      'https://d2kz53n3bzvihv.cloudfront.net/resized/790_395_0_255_255_255/media/gbu0/categoryxxl/image/DesktopHeader-P393_LLA005_LLA008_LLA010_A.jpg.jpeg',
  },
];

const OurProducts = () => {
  return (
    <section data-aos="fade-left" className=" lg:px-0 px-5 py-12 mt-[50px]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <div
              key={product.id}
              className=" shadow-3xl rounded-lg overflow-hidden border-[1px]"
            >
              <Image
                height={400}
                width={300}
                src={`${product.imageUrl}`}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-300 mb-4">{product.description}</p>
                <p className="text-sm font-semibold">
                  <span>Starting From: </span>
                  {product.price}
                </p>
                <button className="btn-secondary mt-5">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
