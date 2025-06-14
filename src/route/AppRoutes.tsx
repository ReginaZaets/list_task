import { Routes, Route } from 'react-router-dom';
import { ROUTES } from './Routes';
import { LoginPage } from '../pages/loginPage/LoginPage';
import { RegisterPage } from '../pages/RedisterPage/RegisterPage';
import { MainPage } from '../pages/MainPage';
import { ProfilePage } from '../pages/ProfilePage';
import { NotFoundPage } from '../pages/NotFoundPage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
      <Route path={ROUTES.HOME} element={<MainPage />} />
      <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
      <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
};
