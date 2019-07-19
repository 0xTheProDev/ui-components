var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React, { Fragment } from 'react';
import cn from '../utilities/classnames';
import { Actions } from '../actions';
import AccordionPanel from './accordion-panel';
import Styles from './accordion.module.scss';
export const TableAccordionPanel = (_a) => {
    var { actions, children, col1Title, col2Title } = _a, attributes = __rest(_a, ["actions", "children", "col1Title", "col2Title"]);
    const action = actions();
    return (React.createElement("div", { className: cn('table-accordion-panel', Styles['table-accordion-panel']) },
        React.createElement(AccordionPanel, Object.assign({ title: React.createElement(Fragment, null,
                React.createElement("h3", null, col1Title),
                React.createElement("p", { className: cn('date', Styles.date) }, col2Title),
                action ? (React.createElement("div", { onClick: e => e.stopPropagation() },
                    React.createElement(Actions, { className: Styles.actions, vertical: true }, action))) : (React.createElement("span", null))) }, attributes), children)));
};
export default TableAccordionPanel;
