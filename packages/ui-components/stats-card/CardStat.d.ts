import { Component, ReactNode } from 'react';
import { CardStatType } from '../types/stats';
export interface CardStatProps {
    className?: string;
    label: CardStatType['label'];
    type?: CardStatType['type'];
    value: CardStatType['value'] | ReactNode;
}
export declare class CardStat extends Component<CardStatProps> {
    render(): JSX.Element;
}
export default CardStat;
