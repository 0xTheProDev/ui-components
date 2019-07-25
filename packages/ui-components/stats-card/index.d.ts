import React from 'react';
import { CardStatType } from '../types/stats';
import PreBuiltCardStat, { CardStat, CardStatLabel, PreBuiltCardStatSecondary, PrimaryStat, SecondaryStat, StatValue } from './CardStat';
export interface StatsCardProps {
    children?: React.ReactNode;
    className?: string;
    stats?: Array<CardStatType>;
    loading?: boolean;
}
declare const StatsCard: ({ children, className, stats, loading, ...attributes }: StatsCardProps) => JSX.Element;
declare const StatsCardSecondary: ({ children, className, stats, ...attributes }: StatsCardProps) => JSX.Element;
declare const ComposableStatsCard: ({ children, className, ...attributes }: {
    children?: React.ReactNode;
    className?: string;
}) => JSX.Element;
export { ComposableStatsCard, StatsCard, StatsCardSecondary, CardStat, PreBuiltCardStat, PreBuiltCardStatSecondary, PrimaryStat, SecondaryStat, StatValue, CardStatLabel, };
export default StatsCard;
