var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React, { createContext, Fragment } from 'react';
import cn from './utilities/classnames';
import DropdownButton from './dropdown-button';
import Icon from './icon';
import Styles from './styles/actions.module.scss';
import EmailCardStyles from './styles/email-card.module.scss';
// using Children.map to attach this prop is problematic because we
// may wish to render <Link> elements as opposed to <Action> elements
// as children, or provide expressions which evaluate to false as children.
const { Provider, Consumer } = createContext({ showTitle: true });
export const Actions = (_a) => {
    var { children, className, inEmailCard, vertical } = _a, attributes = __rest(_a, ["children", "className", "inEmailCard", "vertical"]);
    return (React.createElement("div", Object.assign({ className: cn({
            actions: !inEmailCard,
            [Styles.actions]: !inEmailCard,
            [EmailCardStyles['email-row-actions']]: inEmailCard,
            'email-row-actions': inEmailCard,
        }, className) }, attributes),
        React.createElement(Provider, { value: { showTitle: vertical } }, vertical ? (React.createElement(DropdownButton, { gear: true, icon: "ellipsis-vertical" }, children)) : (React.createElement(Fragment, null,
            React.createElement(Icon, { type: "ellipsis" }),
            React.createElement("div", { className: "action-icons" }, children))))));
};
export const ActionsCell = (_a) => {
    var { children, className } = _a, attributes = __rest(_a, ["children", "className"]);
    return (React.createElement(Provider, { value: { showTitle: false /* vertical not yet supported in tables */ } },
        React.createElement("td", Object.assign({ className: cn('actions', className) }, attributes),
            React.createElement(Icon, { type: "ellipsis" }),
            React.createElement("div", { className: "action-icons" }, children))));
};
export const Action = (_a) => {
    var { title, icon, onClick: handleClick } = _a, attributes = __rest(_a, ["title", "icon", "onClick"]);
    const hiddenTitleTooltipAttributes = {
        'data-tooltip': title,
        'data-tooltip-pos': 'up',
    };
    return (React.createElement(Consumer, null, ({ showTitle }) => (React.createElement("span", Object.assign({}, (showTitle ? {} : hiddenTitleTooltipAttributes), { onClick: handleClick }, attributes),
        React.createElement(Icon, { type: icon }),
        showTitle && title))));
};
export default Actions;
