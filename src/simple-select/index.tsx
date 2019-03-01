import React, { Component, MouseEvent } from 'react';
import { Icon } from '../icon';
import { IconType } from '../types/icons';
import cn from '../utilities/classnames';
import Styles from './simple-select.module.scss';
import SimpleSelectOption from './SimpleSelectOption';

export interface SimpleSelectOptionData {
  label: string;
  selectedValue?: string;
  style?: React.CSSProperties;
  value: string;
  iconType?: IconType;
}

export interface SimpleSelectProps {
  defaultValue?: SimpleSelectOptionData;
  disabled?: boolean;
  error?: boolean;
  info?: string;
  isOpen: boolean;
  isActive?: boolean;
  label?: string;
  onOptionSelect?: (value: SimpleSelectOptionData) => any;
  onToggle?: (e: MouseEvent<HTMLDivElement>) => any;
  options: Array<SimpleSelectOptionData>;
  placeholder?: string;
  required?: boolean;
  value: SimpleSelectOptionData;
}

class SimpleSelect extends Component<SimpleSelectProps> {
  public static defaultProps: Partial<SimpleSelectProps> = {
    defaultValue: { label: '', value: '' },
  };

  public render() {
    const {
      defaultValue,
      disabled,
      error,
      info,
      isActive,
      isOpen,
      label,
      onToggle,
      options,
      onOptionSelect,
      placeholder,
      required,
      value,
    } = this.props;

    return (
      <div
        className={cn('simple-select-wrap', Styles['simple-select-wrap'], {
          [Styles['is-disabled']]: disabled,
          'is-disabled': disabled,
          [Styles['is-error']]: error,
          'is-error': error,
          [Styles['is-required']]: required,
          'is-required': required,
        })}
      >
        {label && (
          <label
            className={cn('simple-select-label', Styles['simple-select-label'])}
          >
            {label}
          </label>
        )}

        <div className={cn('simple-select', Styles['simple-select'])}>
          <div
            onMouseDown={onToggle}
            className={cn(
              'simple-select-control',
              Styles['simple-select-control'],
              {
                [Styles['is-active']]: isActive,
                'is-active': isActive,
                [Styles['is-disabled']]: disabled,
                'is-disabled': disabled,
              }
            )}
          >
            {this.getSelectedValue()}
          </div>

          {isOpen && (
            <div
              className={cn(
                'simple-select-options',
                Styles['simple-select-options']
              )}
            >
              {options.map((o, i) => (
                <SimpleSelectOption
                  key={`${i + o.value}`}
                  data={o}
                  iconType={o.iconType}
                  onOptionSelect={onOptionSelect}
                  selectedValue={value.value}
                />
              ))}
            </div>
          )}
        </div>

        {info && (
          <span
            className={cn('input-info', Styles['input-info'], {
              danger: error,
              [Styles.danger]: error,
              isDisabled: disabled,
              [Styles.isDisabled]: disabled,
            })}
          >
            {info}
          </span>
        )}
      </div>
    );
  }
  private getSelectedValue = () => {
    const { value, placeholder, defaultValue } = this.props;
    let selectedValue;
    // instead of just short circuit returning within these, we still have to check against empty string labels
    if (value) {
      selectedValue = value.iconType ? (
        <Icon type={value.iconType} size={24} />
      ) : (
        value.label
      );
    }
    if (!selectedValue && defaultValue) {
      selectedValue = defaultValue.iconType ? (
        <Icon type={defaultValue.iconType} size={24} />
      ) : (
        defaultValue.label
      );
    }
    if (!selectedValue) {
      selectedValue = placeholder || 'Select...';
    }
    return selectedValue;
  };
}

export default SimpleSelect;
export { SimpleSelect };
