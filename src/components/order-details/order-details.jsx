import React from 'react';
import styles from './order-details.module.css';
import { useSelector } from 'react-redux';
import cross from '../../images/cross.png';

const OrderDetails = ({}) => {

  const orderNumber = useSelector((state) => state.order.orderNumber);
  console.log('Order number in component:', orderNumber);
  return (
    <div className={styles.orderContainer}>
      <section className={styles.number}>
        <h2 className="text text_type_digits-large">{orderNumber}</h2>
      </section>
      <section className={styles.ident}><p className="text text_type_main-medium">идентификатор заказа</p></section>
      <img src={cross} className={styles.imageCross} alt="cross" />
      <section className={styles.orderReady}><p className="text text_type_main-default">Ваш заказ начали готовить</p></section>
      <section className={styles.getReady}><p className="text text_type_main-default text_color_inactive">
        Дождитесь готовности на орбитальной станции
      </p></section>
    </div>
  );
};

export default OrderDetails;
