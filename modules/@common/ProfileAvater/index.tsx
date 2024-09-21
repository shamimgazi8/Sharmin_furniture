import Loginmodal from '@/modules/authentication/login/LoginModal';
import { Dropdown, MenuProps, Space } from 'antd';
import { CgProfile } from 'react-icons/cg';

const ProfileAvater = () => {
  const Profileitems: MenuProps['items'] = [
    {
      label: (
        <div className=" w-full flex items-center justify-center">
          <Loginmodal />
        </div>
      ),
      key: '0',
    },
  ];
  return (
    <div>
      <Dropdown menu={{ items: Profileitems }} trigger={['click']}>
        <a className="cursor-pointer" onClick={e => e.preventDefault()}>
          <Space className=" flex justify-center items-center">
            <CgProfile className=" text-[25px]" />
          </Space>
        </a>
      </Dropdown>
    </div>
  );
};
export default ProfileAvater;
