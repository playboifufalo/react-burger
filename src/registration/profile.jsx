import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { getUserData, updateUserData } from '../services/actions/user-actions'; 
import { Link } from 'react-router-dom';
import styles from './styles/profile.module.css';

const ProfilePage = () => {
    const dispatch = useDispatch();
    const { user, isAuthenticated } = useSelector((state) => state.auth);
    const [name, setName] = React.useState(user?.name || '');
    const [email, setEmail] = React.useState(user?.email || '');
    const [password, setPassword] = React.useState('');

    useEffect(() => {
        if (isAuthenticated) {
            dispatch(getUserData()); 
        }
    }, [dispatch, isAuthenticated]);

    const handleSave = (e) => {
        e.preventDefault();
        dispatch(updateUserData(name, email, password));
    };

    return (
        <div className={styles.profile_container}>
            <nav>
                <ul className={styles.sidebar_list}>
                    <li><Link to="/profile" className="text text_type_main-medium">Профиль</Link></li>
                    <li><Link to="/orders" className="text text_type_main-medium">История заказов</Link></li>
                    <li><Link to="/logout" className="text text_type_main-medium">Выход</Link></li>
                </ul>
            </nav>
            <form onSubmit={handleSave} className={styles.profile_form}>
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
