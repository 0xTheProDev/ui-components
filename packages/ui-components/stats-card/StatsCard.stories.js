import { storiesOf } from '@storybook/react';
import React, { Fragment } from 'react';
import CardStat from './CardStat';
import StatsCard from './index';
const stories = storiesOf('Stats Card', module);
const statsWithoutTypes = [
    {
        label: 'delivered',
        value: '94.84%',
    },
    {
        label: 'unique opens',
        value: '56.99%',
    },
    {
        label: 'unique clicks',
        value: '6.98%',
    },
    {
        label: 'requests',
        value: '1,289',
    },
    {
        label: 'bounces',
        value: '0.21%',
    },
    {
        label: 'unsubscribes',
        value: '0.45%',
    },
    {
        label: 'spam reports',
        value: '0.3%',
    },
];
const statsWithTypes = [
    {
        label: 'emails sent',
        value: '12,230',
    },
    {
        label: 'delivered',
        type: 'delivered',
        value: '96.60%',
    },
    {
        label: 'unique opens',
        type: 'unique-opens',
        value: '82.20%',
    },
    {
        label: 'unique clicks',
        type: 'unique-clicks',
        value: '60.24%',
    },
    {
        label: 'unsubscribes',
        type: 'unsubscribes',
        value: '2.04%',
    },
];
stories.add('StatsCard with stats prop', () => (React.createElement(Fragment, null,
    React.createElement(StatsCard, { stats: statsWithoutTypes }),
    React.createElement("br", null),
    React.createElement(StatsCard, { stats: statsWithTypes }))));
stories.add('StatsCard via composition', () => (React.createElement(Fragment, null,
    React.createElement(StatsCard, null,
        React.createElement(CardStat, Object.assign({}, statsWithoutTypes[0])),
        React.createElement(CardStat, Object.assign({}, statsWithTypes[2]))))));
