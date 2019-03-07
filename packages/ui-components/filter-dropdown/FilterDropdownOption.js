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
import Checkbox from '../checkbox';
import LabelStyles from '../styles/label.module.scss';
export class FilterDropdownOption extends React.Component {
    constructor() {
        super(...arguments);
        this.handleChange = (e) => {
            const { onChange, value } = this.props;
            onChange(e, value);
        };
    }
    render() {
        const _a = this.props, { type, value, label, checked, disabled, info, children } = _a, attributes = __rest(_a, ["type", "value", "label", "checked", "disabled", "info", "children"]);
        return (React.createElement(Checkbox, Object.assign({ id: `filter-option-${value}`, value: value, checked: checked, label: React.createElement("span", { className: cn(LabelStyles['filter-option'], {
                    label: type,
                    [`label-${type}`]: type,
                    [LabelStyles[`label-${type}`]]: type,
                    [LabelStyles.label]: type,
                }) }, label), disabled: disabled, info: info }, attributes, { onChange: this.handleChange }), children));
    }
}
export default FilterDropdownOption;
