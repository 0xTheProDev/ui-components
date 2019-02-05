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
import Styles from './styles/loader.module.scss';
import cn from './utilities/classnames';
export const FragmentLoader = (_a) => {
    var { className } = _a, attributes = __rest(_a, ["className"]);
    return (React.createElement("svg", Object.assign({ className: cn('fragment-loader', Styles['fragment-loader'], className) }, attributes),
        React.createElement("rect", { className: cn('fragment-square', Styles['fragment-square'], 'left', Styles.left), width: "10", height: "10" }),
        React.createElement("rect", { className: cn('fragment-square', Styles['fragment-square'], 'middle', Styles.middle), width: "10", height: "10" }),
        React.createElement("rect", { className: cn('fragment-square', Styles['fragment-square'], 'right', Styles.right), width: "10", height: "10" })));
};
export default FragmentLoader;
