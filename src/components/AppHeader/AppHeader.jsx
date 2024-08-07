import React, { useState } from 'react';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import './AppHeader.css';

const AppHeader = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <header className="header">
      <div className="left-section">
        <div
          className={`nav-item ${activeItem === 'constructor' ? 'active' : ''}`}
          onClick={() => handleItemClick('constructor')}
        >
          <BurgerIcon type="primary" className="icon" />
          <span className="nav-text">Конструктор</span>
        </div>
        <div
          className={`nav-item ${activeItem === 'orders' ? 'active' : ''}`}
          onClick={() => handleItemClick('orders')}
        >
          <ListIcon type="primary" className="icon" />
          <span className="nav-text">Лента заказов</span>
        </div>
      </div>
      <div className="logo-container">
        <Logo className="logo" />
      </div>
      <div className="right-section">
        <div
          className={`nav-item ${activeItem === 'profile' ? 'active' : ''}`}
          onClick={() => handleItemClick('profile')}
        >
          <ProfileIcon type="primary" className="icon" />
          <span className="nav-text">Личный кабинет</span>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
/*..*/