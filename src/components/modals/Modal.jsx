import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import propTypes from '../../utils/prop-types.jsx';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import './Modal.css';
import ModalOverlay from './ModalOverlay.jsx';
import { data } from '../../utils/data.js';

const Modal = ({ children, onClose }) => {
  const modalRoot = document.getElementById('modal-root');

  useEffect(() => {
    const handleEscClose = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscClose);
    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <ModalOverlay onClose={onClose}>
      <div className="modal">
        <button onClick={onClose} className="modal__close">X</button>
        {children}
      </div>
    </ModalOverlay>,
    modalRoot
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;