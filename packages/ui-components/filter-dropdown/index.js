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
import DropdownButton from '../dropdown-button';
import FilterDropdownOption from './FilterDropdownOption';
import DropdownButtonStyles from '../styles/dropdown.module.scss';
export class FilterDropdown extends Component {
    render() {
        const _a = this.props, { icon, type, label, options, onChange, children, className } = _a, attributes = __rest(_a, ["icon", "type", "label", "options", "onChange", "children", "className"]);
        return (React.createElement(DropdownButton, Object.assign({ className: cn('has-icon', DropdownButtonStyles['has-icon'], { [className]: className }), icon: icon || 'filter', type: type || 'secondary', label: label }, attributes),
            options && options.map(option => (React.createElement(FilterDropdownOption, { key: `filter-dropdown-option-${option.value}`, label: option.label, type: option.type, value: option.value, onChange: onChange, checked: option.checked }))),
            children));
    }
}
export default FilterDropdown;
