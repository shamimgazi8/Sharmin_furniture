import Loginmodal from '@/modules/authentication/login/LoginModal';
import { Popover, Space } from 'antd';
import Image from 'next/image';
import { useState } from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import { TiDelete } from 'react-icons/ti';
import { Tooltip } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from '@/appstore/reducers/cartReducer';
import { MdOutlineShoppingCartCheckout } from 'react-icons/md';
import { IoBagCheckOutline } from 'react-icons/io5';
import Link from 'next/link';

const ShoppingCart = ({ needtoLogin }: any) => {
  const dispatch = useDispatch();
  const cartItemsRTK = useSelector((state: any) => state.cart.items); // Using Redux cart items directly
  console.log(cartItemsRTK, 'cartItemsRTK');

  const totalPrice = cartItemsRTK.reduce((accumulator: any, item: any) => {
    return accumulator + item.price * item.quantity; // Multiply price by quantity
  }, 0);

  const handleRemoveItem = (item: any) => {
    dispatch(removeItem(item?.id));
  };

  const handleOpenChange = (newOpen: any) => {
    setOpen(newOpen);
  };

  const increaseQuantity = (item: any) => {
    dispatch(incrementQuantity(item?.id));
  };

  const decreaseQuantity = (item: any) => {
    if (item?.quantity > 1) {
      dispatch(decrementQuantity(item?.id));
    }
  };

  const [open, setOpen] = useState(false);

  const CartContent = () => {
    return (
      <div className="px-4 py-4 bg-gray-100 rounded-md flex flex-col gap-3">
        {cartItemsRTK?.length > 0
          ? cartItemsRTK?.map((item: any, i: any) => (
              <div
                className="grid grid-cols-[1fr_2fr_2fr_2fr] gap-4 items-center lg:w-[400px] border-b-[2px] border-gray-200 pb-3 shadow-sm"
                key={i}
              >
                <div>
                  <Image
                    height={30}
                    width={40}
                    alt="item photo"
                    className="rounded-sm"
                    src={
                      item?.image
                        ? item?.image
                        : 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'
                    }
                  />
                </div>
                <div className="line-clamp-1 cursor-pointer">
                  <Tooltip title={item?.name}>{item?.name}</Tooltip>
                </div>
                <div className="cursor-pointer">
                  <Tooltip title={'Price'}>
                    {(item?.price * item?.quantity).toFixed(2)} ৳
                  </Tooltip>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={
                      item?.quantity === 1
                        ? () => handleRemoveItem(item)
                        : () => decreaseQuantity(item)
                    }
                    className={`${
                      item?.quantity === 1
                        ? 'px-1 py-1 bg-red-500 rounded hover:bg-red-600 transition-all'
                        : 'px-2 py-1 bg-gray-300 rounded hover:bg-gray-400'
                    }`}
                  >
                    {item?.quantity === 1 ? (
                      <div>
                        <Tooltip title="Remove Item">
                          <TiDelete className="text-xl text-white" />
                        </Tooltip>
                      </div>
                    ) : (
                      '-'
                    )}
                  </button>
                  <div className="text-lg font-medium w-[25px] text-center ">
                    {item?.quantity}
                  </div>
                  <button
                    onClick={() => increaseQuantity(item)}
                    className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          : 'Cart is Empty'}
        <div className=" flex gap-5 justify-between items-center">
          <div className=" text-lg font-semibold">
            <span>Total: </span>
            {totalPrice.toFixed(2)} ৳
          </div>
          <div>
            <Link href={'/user/checkout'}>
              <button className=" btn-primary flex items-center gap-2">
                {' '}
                <IoBagCheckOutline />
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="">
      <Popover
        content={<CartContent />}
        title="Shopping Cart"
        trigger="click"
        open={open}
        onOpenChange={handleOpenChange}
      >
        <a className="cursor-pointer" onClick={e => e.preventDefault()}>
          <Space className="flex justify-center items-center">
            <FaCartShopping className="text-[25px]" />
          </Space>
        </a>
      </Popover>
    </div>
  );
};
export default ShoppingCart;
