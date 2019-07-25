import { storiesOf } from '@storybook/react';
import cn from 'classnames';
import React, { Fragment } from 'react';
import PreBuiltCardStat, { CardStat, CardStatLabel, PrimaryStat, SecondaryStat, } from './CardStat';
import StatsCard, { ComposableStatsCard, StatsCardSecondary } from './index';
import Styles from './StatsCard.module.scss';
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
const statsWithSecondaryValue = [
    {
        label: 'total',
        value: 1000,
    },
    {
        label: 'valid',
        secondaryValue: '50%',
        type: 'valid',
        value: 500,
    },
    {
        label: 'risky',
        secondaryValue: '20%',
        type: 'risky',
        value: 200,
    },
    {
        label: 'invalid',
        secondaryValue: '30%',
        type: 'invalid',
        value: 300,
    },
];
stories.add('StatsCard with stats prop', () => (React.createElement(Fragment, null,
    React.createElement(StatsCard, { stats: statsWithoutTypes }),
    React.createElement("br", null),
    React.createElement(StatsCard, { stats: statsWithTypes }))));
stories.add('StatsCard that is loading', () => (React.createElement(StatsCard, { stats: statsWithoutTypes, loading: true })));
stories.add('StatsCard via composition', () => (React.createElement(Fragment, null,
    React.createElement(StatsCard, null,
        React.createElement(PreBuiltCardStat, Object.assign({}, statsWithoutTypes[0])),
        React.createElement(PreBuiltCardStat, Object.assign({}, statsWithTypes[2]))))));
stories.add('ComposableStatsCard with secondary stats', () => (React.createElement(Fragment, null,
    React.createElement(ComposableStatsCard, { className: cn(Styles.secondary, 'secondary') }, statsWithSecondaryValue &&
        statsWithSecondaryValue.map(stat => (React.createElement(CardStat, null,
            stat.secondaryValue && (React.createElement(SecondaryStat, { type: stat.type }, stat.secondaryValue)),
            React.createElement(PrimaryStat, { type: stat.type }, stat.value),
            React.createElement(CardStatLabel, null, stat.label))))),
    React.createElement("br", null),
    React.createElement("p", null, "This can also be imported as StatsCardSecondary:"),
    React.createElement(StatsCardSecondary, { stats: statsWithSecondaryValue }))));
