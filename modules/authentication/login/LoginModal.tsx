'use client';

import { FaEye, FaEyeSlash } from 'react-icons/fa';

import React, { useState } from 'react';
import { Button, Input, Modal } from 'antd';
import { RiSearchEyeLine } from 'react-icons/ri';
import Link from 'next/link';
import { DiJava } from 'react-icons/di';
import SignUpModal from '../signup/SignUpmodal';

const Loginmodal: React.FC = () => {
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
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <button className=" btn-primary" onClick={showModal}>
        Login
      </button>
      <Modal
        title=""
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
      >
        <div>
          <div className=" flex items-center justify-center ">
            <div className="p-8 rounded-lg  w-full max-w-md">
              <h2 className="text-3xl font-bold mb-6 text-center text-black">
                Login
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="username" className="block text-gray-700">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="mt-1 w-full px-3 py-2 border border-gray-300 text-black font-semibold rounded-md focus:outline-none focus:ring focus:border-none"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="block text-gray-700">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      className="mt-1 text-black font-semibold w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-none"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 flex items-center pr-3 focus:outline-none"
                    >
                      {showPassword ? (
                        <FaEyeSlash className=" text-black" />
                      ) : (
                        <FaEye className=" text-black" />
                      )}
                    </button>
                  </div>
                </div>
                <button type="submit" className="btn-primary w-full">
                  Login
                </button>
                <div
                  key={1}
                  className=" w-full flex justify-center items-center mt-2"
                >
                  Don&apos;t Have Account?{' '}
                  <span
                    className=" cursor-pointer"
                    onClick={() => {
                      setIsModalOpen(false);
                    }}
                  >
                    <SignUpModal />
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Loginmodal;
