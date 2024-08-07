import React from 'react';
import AppHeader from './components/AppHeader/AppHeader'; 

const App = () => {
  return (
    <div>
      <AppHeader />
      <main style={styles.mainContent}>
        <h1>Добро пожаловать в наше приложение!</h1>
        <p>Здесь будет основное содержимое вашего приложения.</p>
      </main>
    </div>
  );
};

const styles = {
  mainContent: {
    padding: '20px',
  },
};

export default App;