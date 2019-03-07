import cn from 'classnames';
import React, { ChangeEvent, ReactNode } from 'react';

import Checkbox, { CheckboxProps } from '../checkbox';
import { CampaignStatType } from '../types/stats';

import LabelStyles from '../styles/label.module.scss';

export interface FilterDropdownOptionProps
  extends Pick<
      CheckboxProps,
      'value' | 'checked' | 'disabled' | 'info' | 'children'
    > {
  type?: CampaignStatType;
  label: ReactNode;
  onChange: (e: ChangeEvent<HTMLInputElement>, value: string) => void;
}

export class FilterDropdownOption extends React.Component<
  FilterDropdownOptionProps
> {
  public render() {
    const {
      type,
      value,
      label,
      checked,
      disabled,
      info,
      children,
      ...attributes
    } = this.props;

    return (
      <Checkbox
        id={`filter-option-${value}`}
        value={value}
        checked={checked}
        label={
          <span
            className={cn(LabelStyles['filter-option'], {
              label: type,
              [`label-${type}`]: type,
              [LabelStyles[`label-${type}`]]: type,
              [LabelStyles.label]: type,
            })}
          >
            {label}
          </span>
        }
        disabled={disabled}
        info={info}
        {...attributes}
        onChange={this.handleChange}
      >
        {children}
      </Checkbox>
    );
  }

  private handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { onChange, value } = this.props;

    onChange(e, value);
  };
}

export default FilterDropdownOption;
