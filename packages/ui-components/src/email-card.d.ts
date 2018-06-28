/// <reference types="react" />
import React from 'react';
import { StatisticType } from './statistics';
export interface EmailCardDetail {
    label: string;
    value: string;
    renderEditDetailLink?: (value: string) => any;
}
export interface EmailCardContentProps {
    thumbnailUrl: string;
    onContentEditClick: (event: any) => void;
    className?: string;
}
export interface EmailCardAddButtonProps {
    onClick: (event: any) => void;
    className?: string;
}
export declare const EmailCardAddButton: React.SFC<EmailCardAddButtonProps>;
export interface EmailCardProps {
    details?: Array<EmailCardDetail>;
    editing?: boolean;
    editable?: boolean;
    live?: boolean;
    n: number;
    onContentEditClick?: (event: any) => void;
    onSaveAlertClick?: (event: any) => void;
    paused?: boolean;
    renderSendTimeLink?: (value: string) => any;
    renderAlert?: () => any;
    sendTimeValue?: string;
    statistics?: {
        sent: StatisticType;
        delivered: StatisticType;
        opens: StatisticType;
        clicks: StatisticType;
        unsubscribes: StatisticType;
    };
    thumbnailUrl?: string;
    className?: string;
}
export declare class EmailCard extends React.Component<EmailCardProps> {
    static defaultProps: {
        editable: boolean;
        editing: boolean;
        live: boolean;
        paused: boolean;
        renderAlert: boolean;
    };
    render(): JSX.Element;
}
export default EmailCard;
