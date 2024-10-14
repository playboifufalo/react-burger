import React from 'react';
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import styles from './styles/login.module.css';

const LoginPage = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <div className={styles.login_section}>
      <h1 className={styles.login_text}>Вход</h1>
      <form>
        <section className={styles.input_section}>
        <Input 
          type="email" 
          placeholder="E-mail" 
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
        <section className={styles.button_section}>
        <Button type="submit">Войти</Button>
        </section>
        <div>
          <section className={styles.registr_section}>
          <p className="text text_type_main-default">Вы новый пользователь? 
          <Link className="text text_type_main-default" to="/register" >Зарегистрироваться</Link>
          </p>
          </section>
          <p className="text text_type_main-default">Забыли пароль? 
          <Link className="text text_type_main-default" to="/forgot-password">Восстановить пароль</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
