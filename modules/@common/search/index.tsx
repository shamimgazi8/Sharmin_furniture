import React, { useState } from 'react';
import { Button, Input, Modal } from 'antd';
import { RiSearchEyeLine } from 'react-icons/ri';

const SearchBar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button className=" btn-primary" onClick={showModal}>
        <RiSearchEyeLine className=" text-xl" />
      </button>
      <Modal
        title="Search"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <Input></Input>
        </div>
      </Modal>
    </>
  );
};

export default SearchBar;
