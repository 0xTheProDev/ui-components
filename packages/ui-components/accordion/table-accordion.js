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
import Styles from './accordion.module.scss';
import Accordion from './index';
export const TableAccordion = (_a) => {
    var { children, className, col1Header, col2Header } = _a, attributes = __rest(_a, ["children", "className", "col1Header", "col2Header"]);
    return (React.createElement("div", Object.assign({ className: cn('table-accordion', className) }, attributes),
        React.createElement("header", { className: Styles['accordion-header'] },
            React.createElement("p", null, col1Header),
            React.createElement("p", null, col2Header)),
        React.createElement(Accordion, { caretLeft: true, templates: true }, children)));
};
export default TableAccordion;
