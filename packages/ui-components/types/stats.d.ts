export declare type StatType = 'delivered' | 'opens' | 'unique-opens' | 'clicks' | 'unique-clicks' | 'unsubscribes' | 'spam-reports' | 'valid' | 'risky' | 'invalid';
export interface CardStatType {
    label: string;
    type?: StatType;
    value: number | string;
}
