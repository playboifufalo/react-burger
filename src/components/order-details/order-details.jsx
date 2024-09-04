import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './order-details.module.css';
import cross from '../../images/cross.png';
import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const OrderDetails = () => {
    return (
        <div className={styles.orderContainer}>
            <h2 className="text text_type_digits-large">034536</h2>
            <section className={styles.ident}><p className="text text_type_main-medium">идентификатор заказа</p></section>
            <img src={cross} className={styles.imageCross}/>
            <section className={styles.orderReady}><p className="text text_type_main-default">Ваш заказ начали готовить</p></section>
            <section className={styles.getReady}><p className="text text_type_main-default text_color_inactive">
                Дождитесь готовности на орбитальной станции
            </p></section>
        </div>
    );
};

export default OrderDetails;
