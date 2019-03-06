import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import MetricCard from '../src/metric-card';

const stories = storiesOf('Metric Card', module);

stories.add('Standard', () => (
  <MetricCard title="Last Updated" body="12/21/18" />
));

stories.add('Standard (with Custom Children)', () => (
  <MetricCard title="Clicks" body="200">
    <span>Total clicks for link</span>
  </MetricCard>
));

stories.add('Without a title', () => <MetricCard body="10,000" />);

stories.add('Without a body', () => <MetricCard title="Clicks" />);
