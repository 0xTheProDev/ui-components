import moment from 'moment';
import { Component } from 'react';
import { SingleDatePickerShape } from 'react-dates';
import 'react-dates/initialize';
import './styles/datepicker.css';
export { DateRangePicker, SingleDatePicker, DayPickerRangeController, } from 'react-dates';
interface SingleDatePickerWithRangeProps {
    startYear?: number;
    endYear?: number;
}
export declare class SingleDatePickerWithRange extends Component<SingleDatePickerWithRangeProps & SingleDatePickerShape> {
    render(): JSX.Element;
    renderMonthElement({ month, onMonthSelect, onYearSelect, }: {
        month: moment.Moment;
        onMonthSelect: (currentMonth: moment.Moment, newMonthVal: string) => void;
        onYearSelect: (currentYear: moment.Moment, newYearVal: string) => void;
    }): JSX.Element;
}
export default SingleDatePickerWithRange;
