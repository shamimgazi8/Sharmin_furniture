'use client';
import navData from '@/data/nav-data.json';
import { Drawer, DrawerProps } from 'antd';
// import Cookies from 'js-cookie';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import ThemeToggleButton from '../@common/darkmode';
import { FaLongArrowAltRight } from 'react-icons/fa';
import SearchAnt from '../@common/search/antdSearch';
import ShoppingCart from '../@common/ShoppingCart';
import ProfileAvater from '../@common/ProfileAvater';

// const ProfileAvatar = dynamic(() => import('@/modules/@admin/avatar'), {
//   ssr: false,
// });

const Header = () => {
  const [open, setOpen] = useState(false);
  const [hasCookie, setHasCookie] = useState<any>();
  const [placement, setPlacement] = useState<DrawerProps['placement']>('left');
  const [scroll, setScroll] = useState(false);

  // Scroll Efect

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // const shortListInfo = useSelector((state: any) => state.shortList_Slice);
  // const compareInfo = useSelector((state: any) => state.compare_Slice);

  // useEffect(() => {
  //   setHasCookie(Cookies.get('userToken'));
  // }, []);

  const onClose = () => {
    setOpen(false);
  };

  const [selected, setSelected] = useState(null);

  const toggle = (i: any) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  const [logo, setlogo] = useState('/misc/sharmin-black.png');
  useEffect(() => {
    () => {
      setlogo('/public/sharmin-black.png');
    };
  }, []);

  return (
    <>
      <header
        className={` backdrop-blur-md bg-header sticky top-0 z-[1000] flex justify-center ${scroll ? 'header' : ''}`}
      >
        <div className="container">
          <div className=" grid grid-cols-[1fr_2fr_1fr] items-center  px-4 py-4 lg:py-0">
            <div onClick={() => setOpen(true)} className="block lg:hidden">
              <BiMenuAltLeft className="text-2xl" />
            </div>
            <div>
              <Link href="/">
                <Image
                  src={`${logo ? logo : '/public/sharmin-black.png'}`}
                  width={450}
                  height={50}
                  alt="logo"
                  className=" lg:h-[40px] lg:w-[220px] w-[120px] mt-1"
                />
              </Link>
            </div>
            <nav className="hidden lg:block">
              <ul className="flex items-center backdrop-blur-md">
                {navData?.map((NavItem, i) => {
                  return (
                    <li
                      key={i}
                      className="group/item-1 relative backdrop-blur-md"
                    >
                      <Link
                        href={NavItem?.link}
                        className="flex items-center gap-1 p-6 hover:!text-gradient font-normal backdrop-blur-md"
                      >
                        {NavItem?.title}
                        {NavItem.children && (
                          <FiChevronDown className="mt-[2px]" />
                        )}
                      </Link>

                      {NavItem?.children && (
                        <ul className="min-w-[260px] absolute  bg-white/90 backdrop-blur-md py-2 pl-4 pr-0 rounded-md  shadow-lg opacity-0 invisible top-[100%] left-0 group-hover/item-1:visible group-hover/item-1:opacity-100">
                          {NavItem?.children?.map(
                            (NavItemChild: any, i: any) => {
                              return (
                                <li
                                  className="overflow-hidden group/item-2 w-full"
                                  key={i}
                                >
                                  <Link
                                    href={NavItemChild?.link}
                                    className="group/test grid grid-cols-[auto_1fr_auto]  p-2 hover:text-gradient text-black font-semibold items-center gap-2 translate-x-[-30px] hover:translate-x-0 transition"
                                  >
                                    <span className="block shrink-0 test w-[15px] h-[10px] bg-gradient-to-r from-primary to-secondary"></span>
                                    <span className="group-hover/item-2:text-gradient">
                                      {NavItemChild.title}
                                    </span>
                                    {NavItemChild?.children && (
                                      <span className="flex w-[10px] h-[10px] bg-gradient-to-r from-primary to-secondary test-2">
                                        <FaLongArrowAltRight />
                                      </span>
                                    )}
                                  </Link>
                                  {NavItem?.children?.length - 1 !== i && (
                                    <span className="block w-[calc(100%-16px)] h-[1px] bg-[#eee]"></span>
                                  )}

                                  {NavItemChild?.children && (
                                    <ul className="min-w-[300px] min-h-[300px] absolute bg-white/90 backdrop-blur-md group p-4 pr-0 rounded-md  shadow-lg opacity-0 invisible top-0  left-[100%] group-hover/item-2:visible group-hover/item-2:opacity-100">
                                      {NavItemChild?.children?.map(
                                        (NavItemChildOfChild: any, i: any) => {
                                          return (
                                            <li
                                              key={i}
                                              className="overflow-hidden group/item-3 group-hover:text-black"
                                            >
                                              <Link
                                                href={NavItemChildOfChild?.link}
                                                className="flex p-2 hover:text-inherit text-black font-normal items-center gap-2 translate-x-[-30px] hover:translate-x-0 transition"
                                              >
                                                <span className="block shrink-0 test w-[15px] h-[10px] bg-gradient-to-r from-primary to-secondary"></span>
                                                <span className="group-hover/item-3:text-gradient">
                                                  {NavItemChildOfChild.title}
                                                </span>
                                                {NavItemChildOfChild?.children && (
                                                  <span className="flex w-[10px] h-[10px] bg-gradient-to-r from-primary to-secondary test-2"></span>
                                                )}
                                              </Link>

                                              {NavItemChild?.children?.length -
                                                1 !==
                                                i && (
                                                <span className="block w-[calc(100%-16px)] h-[1px] bg-[#eee]"></span>
                                              )}

                                              {NavItemChildOfChild?.children && (
                                                <ul className="min-w-[200px] absolute bg-white/90 backdrop-blur-md p-4 pr-0 rounded-md  shadow-lg opacity-0 invisible top-0  left-[100%] group-hover/item-3:visible group-hover/item-3:opacity-100">
                                                  {NavItemChildOfChild?.children?.map(
                                                    (item4: any, i: any) => {
                                                      return (
                                                        <li
                                                          key={i}
                                                          className="overflow-hidden"
                                                        >
                                                          <Link
                                                            href={item4?.link}
                                                            className="flex p-2 hover:text-inherit text-black font-normal items-center gap-2 translate-x-[-30px] hover:translate-x-0 transition"
                                                          >
                                                            <span className="block test w-[15px] h-[10px] bg-gradient-to-r from-primary to-secondary"></span>
                                                            <span className="group-hover/item-3:text-gradient">
                                                              {item4.title}
                                                            </span>
                                                          </Link>
                                                          {NavItemChildOfChild
                                                            ?.children?.length -
                                                            1 !==
                                                            i && (
                                                            <span className="block w-[calc(100%-16px)] h-[1px] bg-[#eee]"></span>
                                                          )}
                                                        </li>
                                                      );
                                                    }
                                                  )}
                                                </ul>
                                              )}
                                            </li>
                                          );
                                        }
                                      )}
                                    </ul>
                                  )}
                                </li>
                              );
                            }
                          )}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="flex items-center justify-end gap-2 lg:gap-4 rounded">
              {hasCookie ? (
                <Fragment>
                  <div className="flex items-center gap-3 justify-center">
                    <div className="hidden lg:flex">
                      <SearchAnt />
                    </div>
                    <ProfileAvater />
                    <ShoppingCart needtoLogin={true} />
                    <ThemeToggleButton setlogo={setlogo} />
                  </div>
                </Fragment>
              ) : (
                <Fragment>
                  <div className="flex items-center gap-3">
                    <div className="hidden lg:flex">
                      <SearchAnt />
                    </div>
                    <ProfileAvater />
                    <ShoppingCart />
                    <ThemeToggleButton setlogo={setlogo} />
                  </div>
                </Fragment>
              )}
            </div>
          </div>
          <div className="flex lg:hidden mb-[20px] justify-center w-full items-center">
            <SearchAnt />
          </div>
        </div>
      </header>

      <Drawer
        title="Menu"
        placement={placement}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <div className="h-[100vh] overflow-auto">
          {/* body */}
          <div
            className="flex flex-col overflow-auto"
            style={{ height: 'calc(100vh - 60px' }}
          >
            <div>
              <>
                {navData && navData?.length > 0 ? (
                  <div className="flex flex-col">
                    {navData?.map((item: any, i: any) => {
                      return (
                        <Fragment key={i}>
                          <div key={i} className="relative">
                            {item?.children && item?.children?.length > 0 ? (
                              <>
                                {item?.isHidden ? null : (
                                  <div
                                    onClick={() => toggle(i)}
                                    className="flex items-center justify-between w-full py-2 z-10 gap-1"
                                  >
                                    <span className="text-left">
                                      {item.title}
                                    </span>
                                    {item?.children && (
                                      <>
                                        {selected == i ? (
                                          <FiChevronUp className="shrink-0" />
                                        ) : (
                                          <FiChevronDown className="shrink-0" />
                                        )}
                                      </>
                                    )}
                                  </div>
                                )}
                              </>
                            ) : (
                              <>
                                <Link
                                  href={item?.link || '#'}
                                  onClick={() => setOpen(false)}
                                  className="flex items-center justify-between w-full py-2 z-10 gap-1"
                                >
                                  <span className="text-left">
                                    {item.title}
                                  </span>
                                </Link>
                              </>
                            )}

                            <div>
                              {selected == i && (
                                <ul>
                                  {item.children?.map((cldn: any, i: any) => {
                                    return (
                                      <li
                                        key={i}
                                        onClick={() => setOpen(false)}
                                      >
                                        <Link
                                          href={cldn?.link || '#'}
                                          className="flex p-2"
                                        >
                                          {cldn?.title}
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              )}
                            </div>
                          </div>
                        </Fragment>
                      );
                    })}
                  </div>
                ) : null}
              </>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Header;
