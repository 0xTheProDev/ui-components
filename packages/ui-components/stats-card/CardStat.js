var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import cn from 'classnames';
import React from 'react';
import { FragmentLoader } from '../fragment-loader';
import Styles from './StatsCard.module.scss';
const PreBuiltCardStat = (_a) => {
    var { className, children, label, type, value, loading } = _a, attributes = __rest(_a, ["className", "children", "label", "type", "value", "loading"]);
    return (React.createElement(CardStat, Object.assign({ className: className }, attributes),
        loading ? (React.createElement(FragmentLoader, { className: Styles.loader })) : (React.createElement(PrimaryStat, { type: type }, value)),
        React.createElement(CardStatLabel, null, label),
        children));
};
const PreBuiltCardStatSecondary = (_a) => {
    var { className, children, label, type, value, secondaryValue } = _a, attributes = __rest(_a, ["className", "children", "label", "type", "value", "secondaryValue"]);
    return (React.createElement(CardStat, Object.assign({ className: className }, attributes),
        secondaryValue && (React.createElement(SecondaryStat, { type: type }, secondaryValue)),
        React.createElement(PrimaryStat, { type: type }, value),
        React.createElement(CardStatLabel, null, label)));
};
const CardStat = (_a) => {
    var { children, className } = _a, attributes = __rest(_a, ["children", "className"]);
    return (React.createElement("div", Object.assign({ className: cn(Styles['card-stat'], 'card-stat', className) }, attributes), children));
};
const PrimaryStat = ({ children, type, }) => {
    return (React.createElement("p", { className: cn(Styles.stat, 'stat', { [Styles[type]]: !!type }) }, children));
};
const SecondaryStat = ({ children, type, }) => {
    return (React.createElement("p", { className: cn(Styles.stat, 'stat', Styles['small-stat'], 'small-stat', {
            [Styles[type]]: !!type,
        }) }, children));
};
const StatValue = ({ children, type, }) => {
    return (React.createElement("p", { className: cn(Styles.stat, 'stat', { [Styles[type]]: !!type }) }, children));
};
const CardStatLabel = ({ children }) => {
    return React.createElement("p", { className: cn(Styles.label, 'label') }, children);
};
export { CardStat, PrimaryStat, SecondaryStat, StatValue, CardStatLabel, PreBuiltCardStatSecondary, };
export default PreBuiltCardStat;
