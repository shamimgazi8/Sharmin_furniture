import React, { useState } from 'react';

function ModalOverlay({ isOpen, onClose }: any) {
  return (
    <div
      className={`fixed inset-0 z-10 flex items-center justify-center transition-opacity ${
        isOpen ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      onClick={onClose}
    >
      {/* Modal content goes here */}
    </div>
  );
}

function Modal({ isOpen, onClose, children }: any) {
  return (
    <>
      <ModalOverlay isOpen={isOpen} onClose={onClose} />
      <div
        className={`fixed inset-0 z-20 flex items-center justify-center transition-opacity ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="bg-white rounded-lg p-6">{children}</div>
      </div>
    </>
  );
}

export default Modal;
