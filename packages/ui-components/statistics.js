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
import { FragmentLoader } from './fragment-loader';
import Styles from './styles/email-card.module.scss';
import cn from './utilities/classnames';
export const NO_STATS_CHAR = '—';
export const EmailCardStat = ({ statistic, commonClass, loading }) => (React.createElement("div", { className: commonClass, key: statistic.label },
    React.createElement("p", { className: cn('stat', Styles.stat) }, loading ? (React.createElement(FragmentLoader, { className: Styles.loader })) : statistic.amount || parseInt(statistic.amount, 10) === 0 ? (statistic.amount) : (NO_STATS_CHAR)),
    React.createElement("p", { className: cn('label', Styles.label) }, statistic.label)));
export const Statistics = (_a) => {
    var { commonClass, className, children } = _a, attributes = __rest(_a, ["commonClass", "className", "children"]);
    return (React.createElement("div", Object.assign({ className: cn('email-card-stats', Styles['email-card-stats'], className) }, attributes), React.Children.map(children, (child) => {
        return React.cloneElement(child, { commonClass });
    })));
};
export default Statistics;
