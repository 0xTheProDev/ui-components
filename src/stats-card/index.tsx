import cn from 'classnames';
import React from 'react';

import { CardStatType } from '../types/stats';
import PreBuiltCardStat, {
  CardStat,
  CardStatLabel,
  PreBuiltCardStatSecondary,
  PrimaryStat,
  SecondaryStat,
  StatValue,
} from './CardStat';
import Styles from './StatsCard.module.scss';

export interface StatsCardProps {
  children?: React.ReactNode;
  className?: string;
  stats?: Array<CardStatType>;
  loading?: boolean;
}

const StatsCard = ({
  children,
  className,
  stats,
  loading,
  ...attributes
}: StatsCardProps) => {
  return (
    <div
      className={cn(Styles['stats-card'], 'stats-card', className)}
      {...attributes}
    >
      {stats &&
        stats.map(stat => (
          <PreBuiltCardStat key={stat.label} {...stat} loading={loading} />
        ))}
      {children}
    </div>
  );
};

const StatsCardSecondary = ({
  children,
  className,
  stats,
  ...attributes
}: StatsCardProps) => {
  return (
    <ComposableStatsCard
      className={cn(Styles.secondary, 'secondary')}
      {...attributes}
    >
      {stats &&
        stats.map(stat => (
          <PreBuiltCardStatSecondary key={stat.label} {...stat} />
        ))}
    </ComposableStatsCard>
  );
};

const ComposableStatsCard = ({
  children,
  className,
  ...attributes
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(Styles['stats-card'], 'stats-card', className)}
      {...attributes}
    >
      {children}
    </div>
  );
};

export {
  ComposableStatsCard,
  StatsCard,
  StatsCardSecondary,
  CardStat,
  PreBuiltCardStat,
  PreBuiltCardStatSecondary,
  PrimaryStat,
  SecondaryStat,
  StatValue,
  CardStatLabel,
};

export default StatsCard;
