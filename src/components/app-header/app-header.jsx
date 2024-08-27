import React, { useState } from "react";
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';

const AppHeader = () => {
    const [activeTab] = useState("constructor");

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <div className={styles.navItem}>
                    <div className={styles.iconContainer}>
                        <BurgerIcon type={activeTab === "constructor" ? "primary" : "secondary"} />
                    </div>
                    <span
                        className={styles.navText}
                        style={{ color: activeTab === "constructor" ? "#fff" : "#8585ad" }}
                    >
                        Конструктор
                    </span>
                </div>
                <div className={styles.navItem}>
                    <div className={styles.iconContainer}>
                        <ListIcon type={activeTab === "orders" ? "primary" : "secondary"} />
                    </div>
                    <span
                        className={styles.navText}
                        style={{ color: activeTab === "orders" ? "#fff" : "#8585ad" }}
                    >
                        Лента заказов
                    </span>
                </div>
                <div className={styles.logo}>
                    <Logo />
                </div>
                <div className={styles.navItem}>
                    <div className={styles.iconContainer}>
                        <ProfileIcon type={activeTab === "profile" ? "primary" : "secondary"} />
                    </div>
                    <span
                        className={styles.navText}
                        style={{ color: activeTab === "profile" ? "#fff" : "#8585ad" }}
                    >
                        Личный кабинет
                    </span>
                </div>
            </nav>
        </header>
    );
};

export default AppHeader;
