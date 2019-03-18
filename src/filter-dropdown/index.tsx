import cn from 'classnames';
import React, { Component } from 'react';

import { ButtonProps } from '../button';
import DropdownButton, { DropdownButtonProps } from '../dropdown-button';
import FilterDropdownOption, {
  FilterDropdownOptionProps,
} from './FilterDropdownOption';

import { FilterDropdownOptionType } from '../types/stats';

import DropdownButtonStyles from '../styles/dropdown.module.scss';

export interface FilterDropdownProps {
  options?: Array<FilterDropdownOptionType>;
  onChange?: FilterDropdownOptionProps['onChange'];
}

type CombinedProps = FilterDropdownProps & DropdownButtonProps & ButtonProps;

export class FilterDropdown extends Component<CombinedProps> {
  public render() {
    const {
      icon,
      type,
      label,
      options,
      onChange,
      children,
      className,
      ...attributes
    } = this.props;

    return (
      <DropdownButton
        className={cn('has-icon', DropdownButtonStyles['has-icon'], {
          [className]: className,
        })}
        icon={icon || 'filter'}
        type={type || 'secondary'}
        label={label}
        {...attributes}
      >
        {options &&
          options.map(option => (
            <FilterDropdownOption
              key={`filter-dropdown-option-${option.value}`}
              label={option.label}
              type={option.type}
              value={option.value}
              onChange={onChange}
              checked={option.checked}
            />
          ))}
        {children}
      </DropdownButton>
    );
  }
}

export default FilterDropdown;
