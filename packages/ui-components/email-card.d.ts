import React from 'react';
import { ActionsProps } from './actions';
import { StatisticType } from './statistics';
export interface EmailCardDetail {
    label: string;
    required?: boolean;
    value: string;
    renderEditDetailLink?: (value: string) => any;
}
export interface EmailCardContentProps {
    onContentEditClick: (event: any) => void;
    hasContent: boolean;
    invalid: boolean;
    className?: string;
}
export interface EmailCardAddButtonProps {
    onClick: (event: any) => void;
    className?: string;
}
export declare const EmailCardAddButton: React.SFC<EmailCardAddButtonProps>;
export interface EmailCardProps {
    contentInvalid?: boolean;
    details?: Array<EmailCardDetail>;
    disableInboxDetails?: boolean;
    editing?: boolean;
    editable?: boolean;
    hasContent: boolean;
    live?: boolean;
    n: number;
    onContentEditClick?: (event: any) => void;
    onSaveAlertClick?: (event: any) => void;
    paused?: boolean;
    renderSendTimeLink?: (value: string) => any;
    renderSendTimeAlert?: () => any;
    renderActions?: () => React.ReactElement<ActionsProps>;
    renderAlert?: () => any;
    sendTimeValue?: string;
    statistics?: {
        sent: StatisticType;
        delivered: StatisticType;
        opens: StatisticType;
        clicks: StatisticType;
        unsubscribes: StatisticType;
    };
    statisticsLoading?: boolean;
    className?: string;
}
export declare class EmailCard extends React.Component<EmailCardProps> {
    static defaultProps: {
        disableInboxDetails: boolean;
        editable: boolean;
        editing: boolean;
        live: boolean;
        paused: boolean;
        renderAlert: boolean;
    };
    render(): JSX.Element;
}
export default EmailCard;
