import React, { useState } from 'react';
import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { useNavigate } from 'react-router-dom';

const ResetPasswordPage = () => {
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://norma.nomoreparties.space/api/password-reset/reset', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password, token }),
    });

    const result = await response.json();
    if (result.success) {
      navigate('/login');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="password"
        placeholder="Введите новый пароль"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        name="password"
      />
      <Input
        type="text"
        placeholder="Введите код из письма"
        onChange={(e) => setToken(e.target.value)}
        value={token}
        name="token"
      />
      <Button type="primary" htmlType="submit">
        Сохранить
      </Button>
    </form>
  );
};

export default ResetPasswordPage;
