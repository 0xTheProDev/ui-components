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
    return typeof content === 'string' ? (React.createElement("span", Object.assign({ className: className, "data-tooltip": content, "data-tooltip-pos": direction, "data-tooltip-length": length }, attributes), children)) : (React.createElement(HTMLTooltip, { style: { display: 'inline-block' }, direction: direction === 'left' || direction === 'right' ? direction : null, length: length, className: className, hoverTarget: hoverTarget }, content));
};
Tooltip.defaultProps = {
    direction: 'up',
};
export class HTMLTooltip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hovered: false,
            opened: false,
            tooltipHeight: 0,
        };
        this.handleHoverIn = () => {
            this.setState({
                hovered: true,
                opened: true,
                tooltipHeight: this.tooltipRef.offsetHeight,
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
        this.state = {
            hovered: false,
            opened: false,
            tooltipHeight: 0,
        };
        this.handleHoverIn = this.handleHoverIn.bind(this);
        this.handleHoverOut = this.handleHoverOut.bind(this);
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.opened === nextState.opened) {
            return false;
        }
        return true;
    }
    render() {
        const _a = this.props, { direction, className, children, hoverTarget, debounce, style } = _a, attributes = __rest(_a, ["direction", "className", "children", "hoverTarget", "debounce", "style"]);
        return (React.createElement("div", Object.assign({ style: Object.assign({ position: 'relative' }, style) }, attributes),
            React.createElement("div", { className: cn('tooltip-js-parent', Styles['tooltip-js-parent']), onMouseEnter: this.handleHoverIn, onMouseLeave: this.handleHoverOut }, hoverTarget),
            React.createElement("div", { className: cn('tooltip-js-content', Styles['tooltip-js-content'], className, {
                    [Styles['is-left']]: direction === 'left',
                    'is-left': direction === 'left',
                    [Styles['is-visible']]: this.state.opened,
                    'is-visible': this.state.opened,
                }), style: { top: -(this.state.tooltipHeight / 2) - 3 }, "data-tooltip-length": this.props.length, ref: input => {
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
