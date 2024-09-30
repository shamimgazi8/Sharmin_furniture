import Loginmodal from '@/modules/authentication/login/LoginModal';
import { Dropdown, MenuProps, Popover, Space } from 'antd';
import { useState } from 'react';
import { CgProfile } from 'react-icons/cg';

const ProfileAvater = () => {
  const handleOpenChange = (newOpen: any) => {
    setOpen(newOpen);
  };
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Popover
        content={<div>Profile Content</div>}
        title="Profile"
        trigger="click"
        open={open}
        onOpenChange={handleOpenChange}
      >
        <a className="cursor-pointer" onClick={e => e.preventDefault()}>
          <Space className=" flex justify-center items-center">
            <CgProfile className=" text-[25px]" />
          </Space>
        </a>
      </Popover>
    </div>
  );
};
export default ProfileAvater;
