import React from 'react';
export declare type TooltipDirection = 'up' | 'down' | 'left' | 'right';
export declare type TooltipLength = 'small' | 'medium' | 'large' | 'xlarge';
export interface TooltipProps {
    content?: string | React.ReactElement<any>;
    direction?: TooltipDirection;
    length?: TooltipLength;
    className?: string;
    children?: React.ReactElement<any>;
    hoverTarget?: React.ReactElement<any>;
}
export declare const Tooltip: React.SFC<TooltipProps>;
export interface HTMLTooltipProps {
    direction?: TooltipDirection;
    length?: TooltipLength;
    className?: string;
    children?: React.ReactElement<any>;
    hoverTarget?: React.ReactElement<any>;
    debounce?: number;
    style?: object;
}
export interface HTMLTooltipState {
    hovered: boolean;
    tooltipHeight: number;
    tooltipWidth: number;
    opened: boolean;
}
export declare class HTMLTooltip extends React.Component<HTMLTooltipProps, HTMLTooltipState> {
    static defaultProps: {
        className: string;
        debounce: number;
        direction: string;
    };
    state: {
        hovered: boolean;
        opened: boolean;
        tooltipHeight: number;
        tooltipWidth: number;
    };
    private tooltipRef;
    shouldComponentUpdate(nextProps?: any, nextState?: any): boolean;
    handleHoverIn: () => void;
    handleHoverOut: () => void;
    render(): JSX.Element;
    /**
     * determines vertical & horizontal positioning for the tooltip content.
     * NOTE: this does NOT determine positioning for the ::after pseudoelement, i.e. the caret/arrow of the tooltip
     *
     * 'tooltip-js-content' always exists in the DOM for each tooltip. It's displayed/hidden via CSS opacity.
     * This is because we want the tooltip content to animate in when a user triggers it.
     * We move the tooltip content well off the screen, because we don't want it to block users' interactions
     * with other elements on the page. If we didn't do this,
     * a user could trigger a tooltip by hovering over its invisible content.
     *
     * @param direction TooltipDirection - which direction the tooltip will display
     * @returns React.CSSProperties
     */
    private styleForTooltipContent;
}
export default Tooltip;
