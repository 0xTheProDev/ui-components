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
import cn from './utilities/classnames';
import Badge from './badge';
import Icon from './icon';
import Styles from './styles/card.module.scss';
export const Card = (_a) => {
    var { badge, body, centered, children, icon, iconSize, inline, thin, title, className, selected, module = false } = _a, attributes = __rest(_a, ["badge", "body", "centered", "children", "icon", "iconSize", "inline", "thin", "title", "className", "selected", "module"]);
    return (React.createElement("div", Object.assign({ className: cn('card', Styles.card, className, {
            [Styles['is-centered']]: centered,
            'is-centered': centered,
            [Styles['is-inline']]: inline,
            'is-inline': inline,
            [Styles['is-module']]: module,
            'is-module': module,
            [Styles['is-selected']]: selected,
            'is-selected': selected,
            [Styles['is-thin']]: thin,
            'is-thin': thin,
        }) }, attributes),
        badge && React.createElement(Badge, Object.assign({}, badge)),
        icon && (React.createElement("div", { className: cn('card-icon', Styles['card-icon']) },
            React.createElement(Icon, { size: iconSize, type: icon }))),
        title && (React.createElement("h2", { className: cn({
                'card-title': inline,
                [Styles['card-title']]: inline,
            }) }, title)),
        body && React.createElement("p", null, body),
        children));
};
export default Card;
