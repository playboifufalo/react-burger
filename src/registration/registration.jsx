import React from 'react';
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import styles from './styles/registration.module.css';

const RegisterPage = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');

  return (
    <div className={styles.register_section}>
      <h1 className={styles.register_text}>Регистрация</h1>
      <form>
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
          <Button type="submit">Зарегистрироваться</Button>
        </section>
        <div className={styles.link_section}>
          <p className="text text_type_main-default">Уже зарегистрированы? 
            <Link className="text text_type_main-default" to="/login">Войти</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
