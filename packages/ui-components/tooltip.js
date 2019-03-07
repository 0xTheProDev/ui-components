var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React from 'react';
import Styles from './styles/tooltip.module.scss';
import cn from './utilities/classnames';
export const Tooltip = (_a) => {
    var { content, direction, length, className, children, hoverTarget } = _a, attributes = __rest(_a, ["content", "direction", "length", "className", "children", "hoverTarget"]);
    return typeof content === 'string' ? (React.createElement("span", Object.assign({ className: className, "data-tooltip": content, "data-tooltip-pos": direction, "data-tooltip-length": length }, attributes), children || hoverTarget)) : (React.createElement(HTMLTooltip, { style: { display: 'inline-block' }, direction: direction === 'left' || direction === 'right' ? direction : null, length: length, className: className, hoverTarget: hoverTarget }, content));
};
Tooltip.defaultProps = {
    direction: 'up',
};
export class HTMLTooltip extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            hovered: false,
            opened: false,
            tooltipHeight: 0,
            tooltipWidth: 0,
        };
        this.handleHoverIn = () => {
            this.setState({
                hovered: true,
                opened: true,
                tooltipHeight: this.tooltipRef.offsetHeight,
                tooltipWidth: this.tooltipRef.clientWidth,
            });
        };
        this.handleHoverOut = () => {
            this.setState({ hovered: false });
            setTimeout(() => {
                if (!this.state.hovered) {
                    this.setState({ opened: false });
                }
            }, this.props.debounce);
        };
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
        this.styleForTooltipContent = (direction) => {
            const { opened: isVisible, tooltipHeight, tooltipWidth } = this.state;
            const hiddenTooltipStyles = { left: -10000 };
            let styles;
            switch (direction) {
                case 'left': {
                    styles = { top: -(tooltipHeight / 2) + 8, right: 17, left: 'auto' };
                    return isVisible ? styles : Object.assign({}, styles, hiddenTooltipStyles);
                }
                case 'right': {
                    styles = { top: -(tooltipHeight / 2) + 8, left: '100%' };
                    return isVisible ? styles : Object.assign({}, styles, hiddenTooltipStyles);
                }
                case 'up': {
                    styles = { top: -tooltipHeight - 5 };
                    return isVisible
                        ? Object.assign({}, styles, { left: -tooltipWidth / 2 }) : Object.assign({}, styles, hiddenTooltipStyles);
                }
                case 'down': {
                    styles = { top: 21 };
                    return isVisible
                        ? Object.assign({}, styles, { left: -tooltipWidth / 2 }) : Object.assign({}, styles, hiddenTooltipStyles);
                }
            }
        };
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.opened === nextState.opened) {
            return false;
        }
        return true;
    }
    render() {
        const _a = this.props, { direction, className, children, hoverTarget, debounce, style } = _a, attributes = __rest(_a, ["direction", "className", "children", "hoverTarget", "debounce", "style"]);
        return (React.createElement("div", Object.assign({ className: "html-tooltip", style: Object.assign({ position: 'relative' }, style) }, attributes),
            React.createElement("div", { className: cn('tooltip-js-parent', Styles['tooltip-js-parent']), onMouseEnter: this.handleHoverIn, onMouseLeave: this.handleHoverOut }, hoverTarget),
            React.createElement("div", { className: cn('tooltip-js-content', Styles['tooltip-js-content'], className, {
                    [Styles['is-down']]: direction === 'down',
                    'is-down': direction === 'down',
                    [Styles['is-left']]: direction === 'left',
                    'is-left': direction === 'left',
                    [Styles['is-up']]: direction === 'up',
                    'is-up': direction === 'up',
                    [Styles['is-visible']]: this.state.opened,
                    'is-visible': this.state.opened,
                }), style: this.styleForTooltipContent(direction), "data-tooltip-length": this.props.length, ref: input => {
                    this.tooltipRef = input;
                }, onMouseEnter: this.handleHoverIn, onMouseLeave: this.handleHoverOut }, children)));
    }
}
HTMLTooltip.defaultProps = {
    className: '',
    debounce: 1000,
    direction: 'right',
};
export default Tooltip;
