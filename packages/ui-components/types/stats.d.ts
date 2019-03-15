/// <reference types="react" />
export declare type StatType = 'delivered' | 'opens' | 'unique-opens' | 'clicks' | 'unique-clicks' | 'unsubscribes' | 'spam-reports' | 'valid' | 'risky' | 'invalid';
export interface CardStatType {
    label: string;
    type?: StatType;
    value: number | string;
    secondaryValue?: number | string;
}
export declare type CampaignStatType = 'blocks' | 'bounce-drops' | 'bounces' | 'clicks' | 'deferred' | 'delivered' | 'invalid-emails' | 'opens' | 'processed' | 'requests' | 'spam-report-drops' | 'spam-reports' | 'unique-clicks' | 'unique-opens' | 'unsubscribe-drops' | 'unsubscribes';
export interface FilterDropdownOptionType {
    type?: CampaignStatType;
    label: React.ReactNode;
    value: string;
    checked: boolean;
}
