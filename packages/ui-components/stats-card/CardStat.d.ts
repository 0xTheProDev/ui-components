import React, { ReactNode } from 'react';
import { CardStatType } from '../types/stats';
export interface CardStatProps {
    className?: string;
    children?: React.ReactNode;
    label: CardStatType['label'];
    type?: CardStatType['type'];
    value: CardStatType['value'] | ReactNode;
    secondaryValue?: CardStatType['secondaryValue'] | ReactNode;
    loading?: boolean;
}
declare const PreBuiltCardStat: ({ className, children, label, type, value, loading, ...attributes }: CardStatProps) => JSX.Element;
declare const PreBuiltCardStatSecondary: ({ className, children, label, type, value, secondaryValue, ...attributes }: CardStatProps) => JSX.Element;
declare const CardStat: ({ children, className, ...attributes }: {
    children?: React.ReactNode;
    className?: string;
}) => JSX.Element;
declare const PrimaryStat: ({ children, type, }: {
    children?: React.ReactNode;
    type?: import("../types/stats").StatType;
}) => JSX.Element;
declare const SecondaryStat: ({ children, type, }: {
    children?: React.ReactNode;
    type?: import("../types/stats").StatType;
}) => JSX.Element;
declare const StatValue: ({ children, type, }: {
    children?: React.ReactNode;
    type?: import("../types/stats").StatType;
}) => JSX.Element;
declare const CardStatLabel: ({ children }: {
    children?: React.ReactNode;
}) => JSX.Element;
export { CardStat, PrimaryStat, SecondaryStat, StatValue, CardStatLabel, PreBuiltCardStatSecondary, };
export default PreBuiltCardStat;
