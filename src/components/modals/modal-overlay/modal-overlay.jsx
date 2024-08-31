import React from "react";
import ReactDOM from 'react-dom';
import styles from './modal-overlay.module.css';

const ModalOverlay = (onClose) => {
    return (
        <div className={styles.overlay} onClick={onClose}></div>
    );
}

export default ModalOverlay;