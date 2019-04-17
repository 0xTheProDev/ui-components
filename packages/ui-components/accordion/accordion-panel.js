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
import AnimateHeight from 'react-animate-height';
import cn from '../utilities/classnames';
import AccordionPanelDescription from './accordion-panel-description';
import AccordionPanelIcon from './accordion-panel-icon';
import AccordionPanelTitle from './accordion-panel-title';
import Styles from './accordion.module.scss';
const AccordionPanelSFC = (_a) => {
    var { children, className, icon, open, noPadding, onClick, title, noChange } = _a, attributes = __rest(_a, ["children", "className", "icon", "open", "noPadding", "onClick", "title", "noChange"]);
    return (React.createElement("div", Object.assign({ className: cn('accordion-panel', Styles['accordion-panel'], className, {
            [Styles['has-child']]: noPadding,
            'has-child': noPadding,
            [Styles['is-visible']]: open,
            'is-visible': open,
            [Styles['no-caret']]: noChange,
        }) }, attributes),
        title && (React.createElement("div", { className: cn('accordion-title', Styles['accordion-title']), onClick: onClick }, title)),
        children && (React.createElement(AnimateHeight, { duration: 500, height: open ? 'auto' : 0 },
            React.createElement("div", { className: cn('accordion-content', Styles['accordion-content']), style: { display: 'block' } }, children)))));
};
const openProps = (props) => props.open;
export class AccordionPanel extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            open: openProps(this.props),
        };
        this.onAccordionPanelClick = (e) => {
            const { noChange } = this.props;
            if (noChange) {
                return;
            }
            const target = e.target;
            // Accordion titles support checkboxes within them -- if the checkbox was clicked, don't
            // toggle the open state.
            if (target.closest && !!target.closest('.input-checkbox-wrap')) {
                return;
            }
            this.setState(({ open }) => ({ open: !open }));
        };
    }
    render() {
        const { children } = this.props;
        return (React.createElement(AccordionPanelSFC, Object.assign({}, this.props, { open: this.state.open, onClick: children ? this.onAccordionPanelClick : null }), children));
    }
}
export default AccordionPanel;
export { AccordionPanelDescription, AccordionPanelTitle, AccordionPanelIcon, AccordionPanelSFC, };
