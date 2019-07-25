import { storiesOf } from '@storybook/react';
import cn from 'classnames';
import React, { Fragment } from 'react';

import { CardStatType } from '../types/stats';
import PreBuiltCardStat, {
  CardStat,
  CardStatLabel,
  PrimaryStat,
  SecondaryStat,
} from './CardStat';
import StatsCard, { ComposableStatsCard, StatsCardSecondary } from './index';
import Styles from './StatsCard.module.scss';

const stories = storiesOf('Stats Card', module);

const statsWithoutTypes: Array<CardStatType> = [
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

const statsWithTypes: Array<CardStatType> = [
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

const statsWithSecondaryValue: Array<CardStatType> = [
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

stories.add('StatsCard with stats prop', () => (
  <Fragment>
    <StatsCard stats={statsWithoutTypes} />
    <br />
    <StatsCard stats={statsWithTypes} />
  </Fragment>
));

stories.add('StatsCard that is loading', () => (
  <StatsCard stats={statsWithoutTypes} loading />
));

stories.add('StatsCard via composition', () => (
  <Fragment>
    <StatsCard>
      <PreBuiltCardStat {...statsWithoutTypes[0]} />
      <PreBuiltCardStat {...statsWithTypes[2]} />
    </StatsCard>
  </Fragment>
));

stories.add('ComposableStatsCard with secondary stats', () => (
  <Fragment>
    <ComposableStatsCard className={cn(Styles.secondary, 'secondary')}>
      {statsWithSecondaryValue &&
        statsWithSecondaryValue.map(stat => (
          <CardStat>
            {stat.secondaryValue && (
              <SecondaryStat type={stat.type}>
                {stat.secondaryValue}
              </SecondaryStat>
            )}
            <PrimaryStat type={stat.type}>{stat.value}</PrimaryStat>
            <CardStatLabel>{stat.label}</CardStatLabel>
          </CardStat>
        ))}
    </ComposableStatsCard>
    <br />
    <p>This can also be imported as StatsCardSecondary:</p>
    <StatsCardSecondary stats={statsWithSecondaryValue} />
  </Fragment>
));
