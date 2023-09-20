import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalWindow, Backdrop, CrossBtn, Cross } from './Modal.styled';
import exit from '../../assets/images/icons/sprite.svg';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ children, isOpen, onClose }) {
  useEffect(() => {
    const closeESC = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', closeESC);

    return () => {
      window.removeEventListener('keydown', closeESC);
    };
  }, [onClose]);

  const handleBackDropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackDropClick}>
      <ModalWindow>
        <CrossBtn type="button" onClick={onClose}>
          <Cross width="24" height="24">
            <use href={exit + '#x'}></use>
          </Cross>
        </CrossBtn>
        {children}
      </ModalWindow>
    </Backdrop>,
    modalRoot
  );
}
