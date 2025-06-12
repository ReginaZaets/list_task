import s from './LoginPage.module.scss';
import task from '../../public/images/task1.png';
import { Login } from '../../components/login/Login';
export const LoginPage = () => {
  return (
    <div className={s.container}>
      <div className={s.main}>
        <div className={s.left}>
          <img src={task} alt='tasks' />
        </div>
        <div className={s.right}>
          <Login/>
        </div>
      </div>
    </div>
  );
};
