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
import PreBuiltCardStat, { CardStat, CardStatLabel, PreBuiltCardStatSecondary, PrimaryStat, SecondaryStat, StatValue, } from './CardStat';
import Styles from './StatsCard.module.scss';
const StatsCard = (_a) => {
    var { children, className, stats, loading } = _a, attributes = __rest(_a, ["children", "className", "stats", "loading"]);
    return (React.createElement("div", Object.assign({ className: cn(Styles['stats-card'], 'stats-card', className) }, attributes),
        stats &&
            stats.map(stat => (React.createElement(PreBuiltCardStat, Object.assign({ key: stat.label }, stat, { loading: loading })))),
        children));
};
const StatsCardSecondary = (_a) => {
    var { children, className, stats } = _a, attributes = __rest(_a, ["children", "className", "stats"]);
    return (React.createElement(ComposableStatsCard, Object.assign({ className: cn(Styles.secondary, 'secondary') }, attributes), stats &&
        stats.map(stat => (React.createElement(PreBuiltCardStatSecondary, Object.assign({ key: stat.label }, stat))))));
};
const ComposableStatsCard = (_a) => {
    var { children, className } = _a, attributes = __rest(_a, ["children", "className"]);
    return (React.createElement("div", Object.assign({ className: cn(Styles['stats-card'], 'stats-card', className) }, attributes), children));
};
export { ComposableStatsCard, StatsCard, StatsCardSecondary, CardStat, PreBuiltCardStat, PreBuiltCardStatSecondary, PrimaryStat, SecondaryStat, StatValue, CardStatLabel, };
export default StatsCard;
