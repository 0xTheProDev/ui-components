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
import Styles from './table-search.module.scss';
const ComposableTableSearch = (_a) => {
    var { children, className } = _a, passThroughProps = __rest(_a, ["children", "className"]);
    return (React.createElement("div", Object.assign({ className: cn(Styles['table-state'], { [`${className}`]: className }) }, passThroughProps), children));
};
export default ComposableTableSearch;
export { ComposableTableSearch };
