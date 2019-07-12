import { omit, range } from 'lodash';
import moment from 'moment';
import React, { Component } from 'react';
import { SingleDatePicker, SingleDatePickerShape } from 'react-dates';
// need to import initialize for the datepicker to work
import 'react-dates/initialize';
import Icon from './icon';
import Select from './select';
import Styles from './styles/datepicker-months.scss';
import './styles/datepicker.css';
export {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController,
} from 'react-dates';

interface SingleDatePickerWithRangeProps {
  startYear?: number;
  endYear?: number;
}
export class SingleDatePickerWithRange extends Component<
  SingleDatePickerWithRangeProps & SingleDatePickerShape
> {
  public render() {
    const { id, focused, onFocusChange, date, onDateChange } = this.props;
    return (
      <div className={Styles['datepicker-container']}>
        <SingleDatePicker
          {...omit(this.props, 'startYear', 'endYear')}
          id={id}
          date={date}
          onDateChange={onDateChange}
          focused={focused}
          onFocusChange={onFocusChange}
          renderMonthElement={monthProps => this.renderMonthElement(monthProps)}
          daySize={50}
          showClearDate
          customCloseIcon={
            <Icon type="x" className={Styles['datepicker-clear-icon']} />
          }
        />
      </div>
    );
  }

  public renderMonthElement({
    month,
    onMonthSelect,
    onYearSelect,
  }: {
    month: moment.Moment;
    onMonthSelect: (currentMonth: moment.Moment, newMonthVal: string) => void;
    onYearSelect: (currentYear: moment.Moment, newYearVal: string) => void;
  }) {
    const currentYear = moment().year();
    const { startYear = 1900, endYear = currentYear + 50 } = this.props;

    const months = moment
      .months()
      .map((label, value) => ({ label, value: value.toString() }));

    const years = range(startYear, endYear).map(label => ({
      label: label.toString(),
      value: label.toString(),
    }));

    return (
      <div className={Styles['datepicker-month-container']}>
        <Select
          value={months.find(m => m.value === month.month().toString())}
          onChange={({ value }: { label: string; value: string }) =>
            onMonthSelect(month, value)
          }
          options={months}
          className="input-select-wrap"
          classNamePrefix="input-select-wrap"
        />
        <Select
          value={years.find(y => y.value === month.year().toString())}
          onChange={({ value }: { label: string; value: string }) =>
            onYearSelect(month, value)
          }
          options={years}
          className="input-select-wrap"
          classNamePrefix="input-select-wrap"
        />
      </div>
    );
  }
}

export default SingleDatePickerWithRange;
