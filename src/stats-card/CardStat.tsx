import cn from 'classnames';
import React, { ReactNode } from 'react';

import { CardStatType } from '../types/stats';
import Styles from './StatsCard.module.scss';

export interface CardStatProps {
  className?: string;
  children?: React.ReactNode;
  label: CardStatType['label'];
  type?: CardStatType['type'];
  value: CardStatType['value'] | ReactNode;
  secondaryValue?: CardStatType['secondaryValue'] | ReactNode;
}

const PreBuiltCardStat = ({
  className,
  children,
  label,
  type,
  value,
  ...attributes
}: CardStatProps) => {
  return (
    <CardStat className={className} {...attributes}>
      <PrimaryStat type={type}>{value}</PrimaryStat>
      <CardStatLabel>{label}</CardStatLabel>
      {children}
    </CardStat>
  );
};

const PreBuiltCardStatSecondary = ({
  className,
  children,
  label,
  type,
  value,
  secondaryValue,
  ...attributes
}: CardStatProps) => {
  return (
    <CardStat className={className} {...attributes}>
      {secondaryValue && (
        <SecondaryStat type={type}>{secondaryValue}</SecondaryStat>
      )}
      <PrimaryStat type={type}>{value}</PrimaryStat>
      <CardStatLabel>{label}</CardStatLabel>
    </CardStat>
  );
};

const CardStat = ({
  children,
  className,
  ...attributes
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(Styles['card-stat'], 'card-stat', className)}
      {...attributes}
    >
      {children}
    </div>
  );
};

const PrimaryStat = ({
  children,
  type,
}: {
  children?: React.ReactNode;
  type?: CardStatType['type'];
}) => {
  return (
    <p className={cn(Styles.stat, 'stat', { [Styles[type]]: !!type })}>
      {children}
    </p>
  );
};

const SecondaryStat = ({
  children,
  type,
}: {
  children?: React.ReactNode;
  type?: CardStatType['type'];
}) => {
  return (
    <p
      className={cn(Styles.stat, 'stat', Styles['small-stat'], 'small-stat', {
        [Styles[type]]: !!type,
      })}
    >
      {children}
    </p>
  );
};

const StatValue = ({
  children,
  type,
}: {
  children?: React.ReactNode;
  type?: CardStatType['type'];
}) => {
  return (
    <p className={cn(Styles.stat, 'stat', { [Styles[type]]: !!type })}>
      {children}
    </p>
  );
};

const CardStatLabel = ({ children }: { children?: React.ReactNode }) => {
  return <p className={cn(Styles.label, 'label')}>{children}</p>;
};

export {
  CardStat,
  PrimaryStat,
  SecondaryStat,
  StatValue,
  CardStatLabel,
  PreBuiltCardStatSecondary,
};

export default PreBuiltCardStat;
