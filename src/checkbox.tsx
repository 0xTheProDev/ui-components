import React from 'react';
import Styles from './styles/checkbox-radio.module.scss';
import cn from './utilities/classnames';
export interface CheckboxProps {
  checked: boolean;
  disabled?: boolean;
  id: string;
  label?: string;
  children?: any;
  onChange: (event: any) => void;
  value?: string;
}

export const Checkbox: React.SFC<CheckboxProps> = ({
  checked,
  disabled,
  id,
  label,
  children,
  onChange,
  value,
  ...attributes
}) => {
  return (
    <div className={cn('input-checkbox-wrap', Styles['input-checkbox-wrap'])}>
      <input
        checked={checked}
        disabled={disabled}
        id={id}
        onChange={onChange}
        type="checkbox"
        value={value}
        {...attributes}
      />
      <label
        className={cn('input-checkbox-label', Styles['input-checkbox-label'])}
        htmlFor={id}
      >
        {children ? children : label}
      </label>
    </div>
  );
};

export default Checkbox;
