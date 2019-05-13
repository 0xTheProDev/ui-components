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
import cn from '../utilities/classnames';
import Styles from './badge.module.scss';
export const Badge = (_a) => {
    var { children, color, content, className } = _a, attributes = __rest(_a, ["children", "color", "content", "className"]);
    return (React.createElement("span", Object.assign({ className: cn('badge', className, Styles.badge, Styles[color]) }, attributes), children || content));
};
Badge.defaultProps = {
    children: 0,
    className: '',
    color: '',
};
export default Badge;
