import { Component } from 'react';
export interface StatsCardProps {
    className?: string;
    stats?: Array<CardStatType>;
}
export declare class StatsCard extends Component<StatsCardProps> {
    render(): JSX.Element;
}
export default StatsCard;
