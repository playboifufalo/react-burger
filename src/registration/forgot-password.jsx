import React, { useState } from 'react';
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './styles/forgot-password.module.css';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://norma.nomoreparties.space/api/password-reset', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();
      if (result.success) {
        navigate('/reset-password');
      } else {
        setError(result.message || 'Ошибка восстановления пароля');
      }
    } catch (err) {
      setError('Произошла ошибка при восстановлении пароля');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text text_type_main-medium">Восстановление пароля</h1>
      <form onSubmit={handleSubmit}>
        <section className={styles.input_section}>
        <Input
          type="email"
          placeholder="Укажите e-mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          name="email"
          required
        />
        </section>
        {error && <p>{error}</p>}
        <section className={styles.button_section}>
        <Button type="primary" htmlType="submit" disabled={isLoading}>
          {isLoading ? 'Восстанавливаю...' : 'Восстановить'}
        </Button>
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

export default ForgotPasswordPage;