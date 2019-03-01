import cn from 'classnames';
import React, { Component, ReactNode } from 'react';

import { CardStatType } from '../types/stats';
import Styles from './StatsCard.module.scss';

export interface CardStatProps {
  className?: string;
  label: CardStatType['label'];
  type?: CardStatType['type'];
  value: CardStatType['value'] | ReactNode;
}

export class CardStat extends Component<CardStatProps> {
  public render() {
    const {
      className,
      value,
      label,
      type,
      children,
      ...attributes
    } = this.props;

    return (
      <div
        className={cn(Styles['card-stat'], 'card-stat', className)}
        {...attributes}
      >
        <p className={cn(Styles.stat, 'stat', { [Styles[type]]: !!type })}>
          {value}
        </p>
        <p className={cn(Styles.label, 'label')}>{label}</p>
        {children}
      </div>
    );
  }
}

export default CardStat;
