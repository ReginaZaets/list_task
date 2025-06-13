import { Control, Controller, FieldPath, FieldValues, RegisterOptions } from 'react-hook-form';
import { Input } from '../input/Input';
import { Tooltip } from '../tooltip/Tooltip';
import s from './FormField.module.scss';

interface FormFieldProps<TFieldValues extends FieldValues> {
  name: FieldPath<TFieldValues>;
  control: Control<TFieldValues>;
  rules: RegisterOptions<TFieldValues, FieldPath<TFieldValues>>;
  label: string;
  placeholder: string;
  type?: 'email' | 'password';
  error?: boolean;
  errorText?: string;
  defaultValue?: unknown;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showTooltip: boolean;
  onBlur?: () => void;
}

export const FormField = <TFieldValues extends FieldValues>({
  name,
  control,
  rules,
  label,
  placeholder,
  type = 'email',
  error,
  errorText,
  onChange,
  showTooltip,
  onBlur,
}: FormFieldProps<TFieldValues>) => {
  return (
    <div>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <div className={s.container}>
            <Input
              {...field}
              label={label}
              placeholder={placeholder}
              type={type}
              error={error}
              onChange={(e) => {
                field.onChange(e);
                onChange?.(e);
              }}
              onBlur={() => {
                field.onBlur();
                onBlur?.();
              }}
            />
            {error && <Tooltip error={true} isVisible={!showTooltip} errorText={errorText} />}
          </div>
        )}
      />
    </div>
  );
};
