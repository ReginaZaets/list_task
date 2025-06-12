import s from './Login.module.scss';

export const Login = () => {
  return (
    <div className={s.form}>
      <div className={s.container}>
        <h1 className={s.title}>Вход</h1>
        <div className={s.field}>
          <p className={s.subTitle}>Элекстронная почта</p>
          <input type='text' className={s.input} />
        </div>
        <div className={s.field}>
          <p className={s.subTitle}>Пароль</p>
          <input type='password' className={s.input} />
        </div>
        <button className={s.button}>Войти</button>
      </div>
    </div>
  );
};
