import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay';
import PropTypes from 'prop-types';

const Modal = ({ title, onClose, children, type }) => {
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
    
    const modalClass = type === 'order' ? styles.modalContent_order : styles.modalContent_ingr;

    return ReactDOM.createPortal(
        (
            <div className={styles.modal_overlay}>
                <ModalOverlay onClose={onClose} />
                <div className={`${styles.modalContent} ${modalClass}`}>
                    <div className={styles.modalHeader}>
                        <section className={styles.textHeading}><h2 className="text text_type_main-large">{title}</h2></section>
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

Modal.propTypes = {
    title: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(['order', 'ingredient']).isRequired,
};

export default Modal;
