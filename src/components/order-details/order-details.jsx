import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './order-details.module.css';
import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const OrderDetails = () => {
    return (
        <div className={styles.orderContainer}>
            <h2 className="text text_type_digits-large">034536</h2>
            <p className="text text_type_main-medium">идентификатор заказа</p>
            <section className={styles.crossIcon}><CheckMarkIcon type="primary" /></section>
            <p className="text text_type_main-default">Ваш заказ начали готовить</p>
            <p className="text text_type_main-default text_color_inactive">
                Дождитесь готовности на орбитальной станции
            </p>
        </div>
    );
};

export default OrderDetails;
