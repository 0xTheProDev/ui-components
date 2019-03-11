import React from 'react';
import { color as ValidColor } from './types/color';
export interface BasicSegment {
    label: string;
    color: string;
}
export interface DonutSegment extends BasicSegment {
    count: number;
    legendClass?: string;
}
export interface BadgeRange {
    percent: number;
    content: string;
    color: ValidColor;
}
export interface PieChartCardProps {
    title?: React.ReactNode;
    segments: Array<DonutSegment>;
    mainSegment: string;
    badgeRanges?: Array<BadgeRange>;
    hasLegend?: boolean;
}
export interface PieChartProps {
    segments: Array<BasicSegment | DonutSegment>;
    percentages: {
        [key: string]: number;
    };
    mainSegment?: string;
}
export declare const PieChart: ({ segments, percentages, mainSegment, }: PieChartProps) => JSX.Element;
export declare const PieChartLegend: ({ segments, percentages }: PieChartProps) => JSX.Element;
export declare class PieChartCard extends React.Component<PieChartCardProps> {
    static defaultProps: {
        hasLegend: boolean;
    };
    render(): JSX.Element;
    private calculatePercentages;
    private getBadge;
}
export default PieChartCard;
