import Loginmodal from '@/modules/authentication/login/LoginModal';
import { Popover, Space } from 'antd';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import { TiDelete } from 'react-icons/ti';
import { Tooltip } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '@/appstore/reducers/cartReducer';

const ShoppingCart = ({ needtoLogin }: any) => {
  const dispatch = useDispatch();
  const cartItemsRTK = useSelector((state: any) => state.cart.items);

  const handelRemoveItem = (item: any) => {
    dispatch(removeItem(item?.id));
  };
  const handleOpenChange = (newOpen: any) => {
    setOpen(newOpen);
  };
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };
  const [open, setOpen] = useState(false);
  const [cartItems, setCartItems] = useState<any[]>([]);
  useEffect(() => {
    setCartItems(cartItemsRTK);
  }, [cartItemsRTK?.length]);
  const CartContent = () => {
    return (
      <div className=" px-2 py-4 bg-gray-200 rounded-md flex flex-col gap-3">
        {cartItems?.length > 0
          ? cartItems?.map((item: any, i: any) => {
              return (
                <div
                  className=" grid grid-cols-4 gap-4 items-center lg:w-[400px]"
                  key={i}
                >
                  <div>
                    <Image
                      height={30}
                      width={40}
                      alt="item photo"
                      src={
                        item?.image
                          ? item?.image
                          : 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png'
                      }
                    />
                  </div>
                  <div>{item?.name}</div>
                  <div>{(item?.price * quantity).toFixed(2)} ৳</div>
                  <div className="flex items-center">
                    <button
                      onClick={
                        quantity === 1
                          ? () => handelRemoveItem(item)
                          : decreaseQuantity
                      }
                      className={`${quantity === 1 ? 'px-1 py-1 bg-red-500 rounded hover:bg-red-600 transition-all' : 'px-2 py-1 bg-gray-300 rounded hover:bg-gray-400'}`}
                    >
                      {quantity === 1 ? (
                        <div>
                          <Tooltip title="Remove Item">
                            <TiDelete className=" text-xl text-white" />
                          </Tooltip>
                        </div>
                      ) : (
                        '-'
                      )}
                    </button>
                    <div className="text-lg font-medium  w-[25px] text-center ">
                      {quantity}
                    </div>
                    <button
                      onClick={increaseQuantity}
                      className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            })
          : 'Cart is Empty'}
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
          <Space className=" flex justify-center items-center">
            <FaCartShopping className=" text-[25px]" />
          </Space>
        </a>
      </Popover>
    </div>
  );
};
export default ShoppingCart;
