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
import Styles from './StatsCard.module.scss';
export class CardStat extends Component {
    render() {
        const _a = this.props, { className, value, label, type, children } = _a, attributes = __rest(_a, ["className", "value", "label", "type", "children"]);
        return (React.createElement("div", Object.assign({ className: cn(Styles['card-stat'], 'card-stat', className) }, attributes),
            React.createElement("p", { className: cn(Styles.stat, 'stat', { [Styles[type]]: !!type }) }, value),
            React.createElement("p", { className: cn(Styles.label, 'label') }, label),
            children));
    }
}
export default CardStat;
