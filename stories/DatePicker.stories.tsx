import { storiesOf } from '@storybook/react';
import React, { Component } from 'react';
import { DateRangePicker, SingleDatePicker } from '../src/datepicker';

const stories = storiesOf('DatePicker', module);

class DateRangePickerContainer extends Component<{}, any> {
  constructor(props) {
    super(props);
    this.state = {
      endDate: null,
      focusedInput: null,
      startDate: null,
    };
  }

  public render() {
    return (
      <DateRangePicker
        startDateId="startDate"
        endDateId="endDate"
        startDate={this.state.startDate}
        endDate={this.state.endDate}
        onDatesChange={({ startDate, endDate }) => {
          this.setState({ startDate, endDate });
        }}
        focusedInput={this.state.focusedInput}
        onFocusChange={focusedInput => {
          this.setState({ focusedInput });
        }}
        verticalSpacing={10}
      />
    );
  }
}

class SingleDatePickerContainer extends Component<{}, any> {
  public state = { date: null, focused: false };

  public render() {
    return (
      <SingleDatePicker
        date={this.state.date}
        onDateChange={date => this.setState({ date })}
        focused={this.state.focused}
        onFocusChange={({ focused }) => this.setState({ focused })}
        id="single-date-picker-example"
        noBorder
      />
    );
  }
}

stories.add('Date picker', () => <DateRangePickerContainer />);

stories.add('Single date picker', () => <SingleDatePickerContainer />);
