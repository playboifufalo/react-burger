import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import ProfilePage from '../../registration/profile';
import ForgotPasswordPage from '../../registration/forgot-password';
import ResetPasswordPage from '../../registration/reset-password';
import LoginPage from '../../registration/login';
import RegisterPage from '../../registration/registration';

function App() {
  return (
    <Router>
      <AppHeader />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <BurgerIngredients />
              <BurgerConstructor />
            </>
          } />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
