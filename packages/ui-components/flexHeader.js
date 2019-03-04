var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React, { Component } from 'react';
import Counter from './counter';
import { Icon } from './icon';
import Styles from './styles/flex-header.module.scss';
import { HTMLTooltip, Tooltip } from './tooltip';
import cn from './utilities/classnames';
export class FlexHeader extends Component {
    render() {
        const _a = this.props, { className, creditsCount, onClose, headerActions, headerTabs, title, tooltipText, tooltipLength: tooltipSize } = _a, attributes = __rest(_a, ["className", "creditsCount", "onClose", "headerActions", "headerTabs", "title", "tooltipText", "tooltipLength"]);
        return (React.createElement("header", { className: cn(Styles['flex-header'], 'flex-header', {
                [className]: !!className,
            }) },
            React.createElement("div", null,
                onClose && (React.createElement("a", { className: cn(Styles['flex-header-action'], 'flex-header-action'), onClick: onClose },
                    React.createElement(Icon, { type: "x" }))),
                React.createElement("div", { className: cn(Styles['flex-header-title'], 'flex-header-title') },
                    React.createElement("h3", null,
                        title,
                        typeof tooltipText === 'string' ? (React.createElement(Tooltip, { content: tooltipText, length: tooltipSize, direction: "down" },
                            React.createElement(Icon, { type: "info-circle" }))) : (tooltipText && (React.createElement(HTMLTooltip, { style: { display: 'inline-block' }, direction: "right", length: tooltipSize, hoverTarget: React.createElement(Icon, { type: "info-circle" }) }, tooltipText))))),
                headerTabs),
            React.createElement("div", { className: cn(Styles['flex-header-right'], 'flex-header-right') },
                typeof creditsCount !== 'undefined' ? (React.createElement(Counter, { text: "Credits", count: creditsCount })) : (''),
                headerActions)));
    }
}
export default FlexHeader;
export const FlexHeaderTabs = props => {
    return (React.createElement("div", { className: cn(Styles['flex-header-tabs'], 'flex-header-tabs') }, props.children));
};
export const FlexHeaderTab = props => {
    return (React.createElement("div", { onClick: props.onClick, className: cn(Styles['flex-header-tab'], 'flex-header-tab', {
            [Styles['is-active']]: !!props.isActive,
        }) },
        props.iconType && React.createElement(Icon, { type: props.iconType }),
        props.text));
};
