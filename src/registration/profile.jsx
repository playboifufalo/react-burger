import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { getUserData, updateUserData } from '../services/actions/user-actions'; 
import { Link } from 'react-router-dom';
import styles from './styles/profile.module.css';

const ProfilePage = () => {
    const dispatch = useDispatch();

    // Берем данные из состояния auth с проверкой на наличие
    const authState = useSelector((state) => state.auth || {});
    const { user, isAuthenticated, error } = authState;

    // Локальные состояния для редактируемых полей
    const [name, setName] = React.useState(user?.name || '');
    const [email, setEmail] = React.useState(user?.email || '');
    const [password, setPassword] = React.useState('');

    // Эффект для получения данных пользователя, если он аутентифицирован
    useEffect(() => {
        if (isAuthenticated) {
            dispatch(getUserData());
        }
    }, [dispatch, isAuthenticated]);

    // Обновляем локальные состояния, если изменились данные пользователя
    useEffect(() => {
        if (user) {
            setName(user.name);
            setEmail(user.email);
        }
    }, [user]);

    // Обработчик для сохранения обновленных данных пользователя
    const handleSave = (e) => {
        e.preventDefault();
        dispatch(updateUserData(name, email, password));
    };

    // Обработка ошибок (опционально)
    useEffect(() => {
        if (error) {
            console.error(error); // Вывод ошибок в консоль
        }
    }, [error]);

    return (
        <div className={styles.profile_container}>
            <nav className={styles.sidebar}>
                <ul className={styles.sidebar_list}>
                    <li><Link to="/profile" className="text text_type_main-medium">Профиль</Link></li>
                    <li><Link to="/orders" className="text text_type_main-medium">История заказов</Link></li>
                    <li><Link to="/logout" className="text text_type_main-medium">Выход</Link></li>
                </ul>
            </nav>
            <form className={styles.profile_form} onSubmit={handleSave}>
                <section className={styles.input_section}>
                    <Input
                        placeholder="Имя"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </section>
                <section className={styles.input_section}>
                    <Input
                        type="email"
                        placeholder="Логин"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </section>
                <section className={styles.input_section}>
                    <PasswordInput
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Пароль"
                    />
                </section>
                
            </form>
        </div>
    );
};

export default ProfilePage;
