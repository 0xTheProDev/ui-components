import React, { Component } from 'react';
import Icon from '../icon';
import { IconType } from '../types/icons';
import cn from '../utilities/classnames';
import { SimpleSelectOptionData, SimpleSelectProps } from './';
import Styles from './simple-select.module.scss';

export type SimpleSelectOptionProps = Pick<
  SimpleSelectProps,
  'onOptionSelect'
> & {
  data: SimpleSelectOptionData;
  selectedValue: string;
  iconType?: IconType;
};

export default class SimpleSelectOption extends Component<
  SimpleSelectOptionProps
> {
  public render() {
    const {
      data: { label, style, value },
      selectedValue,
      iconType,
    } = this.props;
    return (
      <div
        className={cn('simple-select-option', Styles['simple-select-option'], {
          [Styles['is-selected']]: value === selectedValue,
          'is-selected': value === selectedValue,
        })}
        onMouseDown={this.handleClick}
        style={style}
      >
        {iconType ? <Icon type={iconType} size={24} /> : ''}
        {label}
      </div>
    );
  }

  private handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const { onOptionSelect, data } = this.props;
    e.preventDefault();

    return onOptionSelect(data);
  };
}
