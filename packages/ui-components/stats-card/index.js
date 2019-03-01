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
import React, { Component } from 'react';
import CardStat from './CardStat';
import Styles from './StatsCard.module.scss';
export class StatsCard extends Component {
    render() {
        const _a = this.props, { className, stats, children } = _a, attributes = __rest(_a, ["className", "stats", "children"]);
        return (React.createElement("div", Object.assign({ className: cn(Styles['stats-card'], 'stats-card', className) }, attributes),
            stats && stats.map(stat => React.createElement(CardStat, Object.assign({ key: stat.label }, stat))),
            children));
    }
}
export default StatsCard;
