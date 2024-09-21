import Loginmodal from '@/modules/authentication/login/LoginModal';
import { Dropdown, MenuProps, Space } from 'antd';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaCartShopping } from 'react-icons/fa6';

const getCartItems = () => {
  if (typeof window !== 'undefined') {
    const storedCartItems = localStorage.getItem('cartItems');
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  }
  return [];
};
const ShoppingCart = ({ needtoLogin }: any) => {
  useEffect(() => {
    const items = getCartItems();
    setCartItems(items);
  }, []);

  const [cartItems, setCartItems] = useState<any[]>([]);
  const cartMenuItems: MenuProps['items'] = [
    {
      label: needtoLogin ? (
        <>
          You need to Login first for add item to cart! <Loginmodal />
        </>
      ) : (
        <div>
          <h2 className=" mb-5 text-3xl font-semibold">Your Cart</h2>
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <div className=" mb-3" key={index}>
                <div className=" flex gap-4">
                  <Image
                    height={50}
                    width={50}
                    alt="item image"
                    src={item?.imageUrl}
                  />
                  <div>
                    <h3>{item.name}</h3>
                    <div className=" flex gap-5">
                      <h3>Price: {item?.price}TK</h3>
                      <p>Quantity:1</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </div>
      ),
      key: '0',
    },
  ];
  return (
    <div className="">
      <Dropdown menu={{ items: cartMenuItems }} trigger={['click']}>
        <a className="cursor-pointer" onClick={e => e.preventDefault()}>
          <Space className=" flex justify-center items-center">
            <FaCartShopping className=" text-[25px]" />
          </Space>
        </a>
      </Dropdown>
    </div>
  );
};
export default ShoppingCart;
