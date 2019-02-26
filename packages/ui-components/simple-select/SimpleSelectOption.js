import React, { Component } from 'react';
import Icon from '../icon';
import cn from '../utilities/classnames';
import Styles from './simple-select.module.scss';
export default class SimpleSelectOption extends Component {
    constructor() {
        super(...arguments);
        this.handleClick = (e) => {
            const { onOptionSelect, data } = this.props;
            e.preventDefault();
            return onOptionSelect(data);
        };
    }
    render() {
        const { data: { label, style, value }, selectedValue, iconType, } = this.props;
        return (React.createElement("div", { className: cn('simple-select-option', Styles['simple-select-option'], {
                [Styles['is-selected']]: value === selectedValue,
                'is-selected': value === selectedValue,
            }), onMouseDown: this.handleClick, style: style },
            iconType ? React.createElement(Icon, { type: iconType, size: 24 }) : '',
            label));
    }
}
