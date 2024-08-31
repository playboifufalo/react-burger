import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay';

const Modal = ({ title, onClose, children }) => {
    useEffect(() => {
        const handleEscClose = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', handleEscClose);
        return () => {
            document.body.style.overflow = '';
            document.removeEventListener('keydown', handleEscClose);
        };
    }, [onClose]);

    return ReactDOM.createPortal(
        (
            <div className={styles.modal_overlay}>
                <ModalOverlay onClose={onClose} />
                <div className={styles.modalContent}>
                    <div className={styles.modalHeader}>
                        <h2 className="text text_type_main-large">{title}</h2>
                        <div className={styles.closeIcon} onClick={onClose}>
                            <CloseIcon type="primary" />
                        </div>
                    </div>
                    <div className={styles.modalBody}>
                        {children}
                    </div>
                </div>
            </div>
        ),
        document.getElementById('modals') 
    );
};

export default Modal;
