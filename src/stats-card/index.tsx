import cn from 'classnames';
import React, { Component } from 'react';

import CardStat from './CardStat';
import Styles from './StatsCard.module.scss';

export interface StatsCardProps {
  className?: string;
  stats?: Array<CardStatType>;
}

export class StatsCard extends Component<StatsCardProps> {
  public render() {
    const { className, stats, children, ...attributes } = this.props;

    return (
      <div
        className={cn(Styles['stats-card'], 'stats-card', className)}
        {...attributes}
      >
        {stats && stats.map(stat => <CardStat key={stat.label} {...stat} />)}
        {children}
      </div>
    );
  }
}

export default StatsCard;
