import { forwardRef } from 'react';
import s from './Input.module.scss';
import clsx from 'clsx';

type InputProps = {
  label: string;
  placeholder: string;
  type: 'email' | 'password';
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  error?: boolean;
};
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, placeholder, type, onChange, onBlur, error = false, ...rest }, ref) => {
    return (
      <div className={s.field}>
        <p className={s.title}>{label}</p>
        <input
          type={type}
          placeholder={placeholder}
          ref={ref}
          {...rest}
          className={clsx(s.input, { [s.input__error]: error })}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
    );
  },
);
