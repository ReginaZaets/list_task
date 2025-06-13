import { useForm } from 'react-hook-form';
import { FormField } from '../../items/form-field/FormField';
import s from './Login.module.scss';
import { useEffect, useState } from 'react';
import { validation } from '../../items/form-field/validation';

type FormValues = {
  email: string;
  password: string;
};
export const Login = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const {
    control,
    formState: { errors },
    handleSubmit,
    clearErrors,
    trigger,
    watch,
  } = useForm<FormValues>({
    mode: 'onSubmit',
  });
  const onSubmit = async (data: FormValues) => {
    const valid = await trigger();
    if (valid) {
      console.log(data);
      setShowTooltip(false);
    } else {
      setShowTooltip(true);
    }
  };
  const handleInputChange = () => {
    setShowTooltip(false);
    clearErrors();
  };
  const mailWatch = watch('email');
  useEffect(() => {
    if (mailWatch) {
      setShowTooltip(false);
    }
  }, [mailWatch, showTooltip]);
  const handleInputBlur = () => {
    clearErrors();
    setShowTooltip(false);
  };
  return (
    <form noValidate className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.container}>
        <h1 className={s.title}>Вход</h1>
        <FormField
          name='email'
          control={control}
          placeholder='Введите адрес электронной почты'
          type='email'
          label='Адрес электронной почты'
          rules={validation.email}
          error={Boolean(errors.email)}
          errorText={errors.email?.message}
          clearErrors={() => clearErrors}
          trigger={trigger}
          onChange={handleInputChange}
          showTooltip={showTooltip}
          onBlur={handleInputBlur}
        />
        <FormField
          name='password'
          control={control}
          placeholder='Введите пароль'
          type='password'
          label='Пароль'
          rules={validation.password}
          error={Boolean(errors.password)}
          errorText={errors.password?.message}
          clearErrors={() => clearErrors}
          trigger={trigger}
          onChange={handleInputChange}
          showTooltip={showTooltip}
          onBlur={handleInputBlur}
        />
        <button className={s.button}>Войти</button>
      </div>
    </form>
  );
};
