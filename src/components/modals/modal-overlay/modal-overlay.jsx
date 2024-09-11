import React from "react";
import ReactDOM from 'react-dom';
import styles from './modal-overlay.module.css';
import PropTypes from 'prop-types';

const ModalOverlay = ({ onClose, children }) => {
    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return (
        <div className={styles.modal_overlay} onClick={handleOverlayClick}>
            {children}
        </div>
    );
};

ModalOverlay.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default ModalOverlay;