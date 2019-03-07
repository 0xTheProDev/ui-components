import { storiesOf } from '@storybook/react';
import React, { ChangeEvent } from 'react';

import { FilterDropdownOptionType } from '../types/stats';
import FilterDropdownOption from './FilterDropdownOption';
import FilterDropdown from './index';

const stories = storiesOf('Filter Dropdown', module);

const options: Array<FilterDropdownOptionType> = [
  {
    checked: true,
    label: 'All Metrics',
    value: 'all',
  },
  {
    checked: true,
    label: 'Blocks',
    type: 'blocks',
    value: 'blocks',
  },
  {
    checked: true,
    label: 'Bounce Drops',
    type: 'bounce-drops',
    value: 'bounceDrops',
  },
  {
    checked: true,
    label: 'Bounces',
    type: 'bounces',
    value: 'bounces',
  },
  {
    checked: true,
    label: 'Clicks',
    type: 'clicks',
    value: 'clicks',
  },
  {
    checked: true,
    label: 'Deferred',
    type: 'deferred',
    value: 'deferred',
  },
  {
    checked: true,
    label: 'Delivered',
    type: 'delivered',
    value: 'delivered',
  },
  {
    checked: true,
    label: 'Invalid Emails',
    type: 'invalid-emails',
    value: 'invalidEmails',
  },
  {
    checked: true,
    label: 'Opens',
    type: 'opens',
    value: 'opens',
  },
  {
    checked: true,
    label: 'Processed',
    type: 'processed',
    value: 'processed',
  },
  {
    checked: true,
    label: 'Requests',
    type: 'requests',
    value: 'requests',
  },
  {
    checked: true,
    label: 'Spam Report Drops',
    type: 'spam-report-drops',
    value: 'spamReportDrops',
  },
  {
    checked: true,
    label: 'Spam Reports',
    type: 'spam-reports',
    value: 'spamReports',
  },
  {
    checked: true,
    label: 'Unique Clicks',
    type: 'unique-clicks',
    value: 'uniqueClicks',
  },
  {
    checked: true,
    label: 'Unique Opens',
    type: 'unique-opens',
    value: 'uniqueOpens',
  },
  {
    checked: true,
    label: 'Unsubscribe Drops',
    type: 'unsubscribe-drops',
    value: 'unsubscribeDrops',
  },
  {
    checked: true,
    label: 'Unsubscribes',
    type: 'unsubscribes',
    value: 'unsubscribes',
  },
];

interface FakeContainerState {
  options: Array<FilterDropdownOptionType>;
}

class FakeContainerWithOptionsProp extends React.Component<
  {},
  FakeContainerState
> {
  public state = { options: [...options] };

  public render() {
    return (
      <FilterDropdown
        label="Filter"
        type="secondary"
        options={options}
        onChange={this.handleChange}
      />
    );
  }

  private handleChange = (e: ChangeEvent<HTMLInputElement>, value: string) => {
    const optionIndex = this.state.options.findIndex(o => o.value === value);
    const newOptions = [...this.state.options];
    newOptions[optionIndex].checked = !newOptions[optionIndex].checked;

    this.setState({ options: newOptions });
  };
}

class FakeContainerWithComposition extends React.Component<
  {},
  FakeContainerState
> {
  public state = { options: [...options] };

  public render() {
    return (
      <FilterDropdown label="Filter" type="secondary">
        <FilterDropdownOption
          label="All"
          value="all"
          onChange={this.handleChange}
          checked={this.getOptionByValue('all').checked}
        />
        <FilterDropdownOption
          label="Delivered"
          value="delivered"
          type="delivered"
          onChange={this.handleChange}
          checked={this.getOptionByValue('delivered').checked}
        />
        <FilterDropdownOption
          label="Opens"
          value="opens"
          type="opens"
          onChange={this.handleChange}
          checked={this.getOptionByValue('opens').checked}
        />
        <FilterDropdownOption
          label="Clicks"
          value="clicks"
          type="clicks"
          onChange={this.handleChange}
          checked={this.getOptionByValue('clicks').checked}
        />
      </FilterDropdown>
    );
  }

  private getOptionByValue = (value: string) => {
    const option = this.state.options.find(o => o.value === value);

    return option;
  };

  private handleChange = (e: ChangeEvent<HTMLInputElement>, value: string) => {
    const optionIndex = this.state.options.findIndex(o => o.value === value);
    const newOptions = [...this.state.options];
    newOptions[optionIndex].checked = !newOptions[optionIndex].checked;

    this.setState({ options: newOptions });
  };
}

stories.add('Filter Dropdown w/ options prop', () => (
  <FakeContainerWithOptionsProp />
));

stories.add('Filter Dropdown via composition', () => (
  <FakeContainerWithComposition />
));
