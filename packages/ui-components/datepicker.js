import { omit, range } from 'lodash';
import moment from 'moment';
import React, { Component } from 'react';
import { SingleDatePicker } from 'react-dates';
// need to import initialize for the datepicker to work
import 'react-dates/initialize';
import Icon from './icon';
import Select from './select';
import Styles from './styles/datepicker-months.scss';
import './styles/datepicker.css';
export { DateRangePicker, SingleDatePicker, DayPickerRangeController, } from 'react-dates';
export class SingleDatePickerWithRange extends Component {
    render() {
        const { id, focused, onFocusChange, date, onDateChange } = this.props;
        return (React.createElement("div", { className: Styles['datepicker-container'] },
            React.createElement(SingleDatePicker, Object.assign({}, omit(this.props, 'startYear', 'endYear'), { id: id, date: date, onDateChange: onDateChange, focused: focused, onFocusChange: onFocusChange, renderMonthElement: monthProps => this.renderMonthElement(monthProps), daySize: 50, showClearDate: true, customCloseIcon: React.createElement(Icon, { type: "x", className: Styles['datepicker-clear-icon'] }) }))));
    }
    renderMonthElement({ month, onMonthSelect, onYearSelect, }) {
        const currentYear = moment().year();
        const { startYear = 1900, endYear = currentYear + 50 } = this.props;
        const months = moment
            .months()
            .map((label, value) => ({ label, value: value.toString() }));
        const years = range(startYear, endYear).map(label => ({
            label: label.toString(),
            value: label.toString(),
        }));
        return (React.createElement("div", { className: Styles['datepicker-month-container'] },
            React.createElement(Select, { value: months.find(m => m.value === month.month().toString()), onChange: ({ value }) => onMonthSelect(month, value), options: months, className: "input-select-wrap" }),
            React.createElement(Select, { value: years.find(y => y.value === month.year().toString()), onChange: ({ value }) => onYearSelect(month, value), options: years, className: "input-select-wrap" })));
    }
}
export default SingleDatePickerWithRange;
