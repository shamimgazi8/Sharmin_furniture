import Image from 'next/image';
import React from 'react';

const products = [
  {
    id: 1,
    name: 'Bed Room',
    description: 'A comfortable and stylish modern sofa.',
    price: '$499',
    imageUrl:
      'https://media.architecturaldigest.com/photos/64db9eb3be7a08b03e6cd3a0/16:9/w_7040,h_3960,c_limit/TBHC_50_Bridge_Park_Dr_0900.jpeg',
  },
  {
    id: 2,
    name: 'Dinning Room',
    description: 'A sturdy dining table made of oak.',
    price: '$799',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqCfd1AsVGs7JLJ2V4Gv0FqswWbFoj14ixmA&s',
  },
  {
    id: 3,
    name: 'Living Room',
    description: 'An ergonomic office chair for all-day comfort.',
    price: '$199',
    imageUrl:
      'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2023/7/19/3/DOTY2023_Dramatic-Before-And-Afters_Hidden-Hills-11.jpg.rend.hgtvcom.1280.1280.suffix/1689786863909.jpeg',
  },
  {
    id: 4,
    name: 'Reading Room',
    description: 'A spacious bookshelf to organize your books.',
    price: '$299',
    imageUrl:
      'https://cdn.autonomous.ai/production/ecm/230907/10-Home-Reading-Room-Ideas-to-Curl-up-With-a-Book-in-20231.webp',
  },
  {
    id: 4,
    name: 'Lifestyle',
    description: 'A spacious bookshelf to organize your books.',
    price: '$299',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCqg3NUgSBIXNezOvOJpk5_uhCC-kimVXPLA&s',
  },
  {
    id: 4,
    name: 'Office Furniture',
    description: 'A spacious bookshelf to organize your books.',
    price: '$299',
    imageUrl:
      'https://media.istockphoto.com/id/1358435984/photo/modern-home-office.jpg?s=612x612&w=0&k=20&c=AblSg--FN3MSPQaJfdF13uKNMsqV8A5ytgxjCvlpzEQ=',
  },
];

const OurProducts = () => {
  return (
    <section className=" lg:px-0 px-5 py-12 mt-[50px]">
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
