import { storiesOf } from '@storybook/react';
import React from 'react';
import FilterDropdownOption from './FilterDropdownOption';
import FilterDropdown from './index';
const stories = storiesOf('Filter Dropdown', module);
const options = [
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
class FakeContainerWithOptionsProp extends React.Component {
    constructor() {
        super(...arguments);
        this.state = { options: [...options] };
        this.handleChange = (e, value) => {
            const optionIndex = this.state.options.findIndex(o => o.value === value);
            const newOptions = [...this.state.options];
            newOptions[optionIndex].checked = !newOptions[optionIndex].checked;
            this.setState({ options: newOptions });
        };
    }
    render() {
        return (React.createElement(FilterDropdown, { label: "Filter", type: "secondary", options: options, onChange: this.handleChange }));
    }
}
class FakeContainerWithComposition extends React.Component {
    constructor() {
        super(...arguments);
        this.state = { options: [...options] };
        this.getOptionByValue = (value) => {
            const option = this.state.options.find(o => o.value === value);
            return option;
        };
        this.handleChange = (e, value) => {
            const optionIndex = this.state.options.findIndex(o => o.value === value);
            const newOptions = [...this.state.options];
            newOptions[optionIndex].checked = !newOptions[optionIndex].checked;
            this.setState({ options: newOptions });
        };
    }
    render() {
        return (React.createElement(FilterDropdown, { label: "Filter", type: "secondary" },
            React.createElement(FilterDropdownOption, { label: "All", value: "all", onChange: this.handleChange, checked: this.getOptionByValue('all').checked }),
            React.createElement(FilterDropdownOption, { label: "Delivered", value: "delivered", type: "delivered", onChange: this.handleChange, checked: this.getOptionByValue('delivered').checked }),
            React.createElement(FilterDropdownOption, { label: "Opens", value: "opens", type: "opens", onChange: this.handleChange, checked: this.getOptionByValue('opens').checked }),
            React.createElement(FilterDropdownOption, { label: "Clicks", value: "clicks", type: "clicks", onChange: this.handleChange, checked: this.getOptionByValue('clicks').checked })));
    }
}
stories.add('Filter Dropdown w/ options prop', () => (React.createElement(FakeContainerWithOptionsProp, null)));
stories.add('Filter Dropdown via composition', () => (React.createElement(FakeContainerWithComposition, null)));
