import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import Button from '../src/button';
import bearMeeting from '../src/images/bear-meeting.svg';
import { PromotionalBanner } from '../src/promotional-banner';

const stories = storiesOf('PromotionalBanner', module);

stories.add('Ads', () => (
  <PromotionalBanner
    image={(<img src={bearMeeting} />)}
    description="Engage new and existing customers on Facebook and Instagram using data from your email."
    title="Create an Ad Campaign."
    learnMore={(
      <a href="https://coinmarketcap.com/currencies/chainlink/" target="_blank">Learn More</a>
    )}
    actions={(
      <Button type="secondary" small>Create Ad Campaign</Button>
    )}
    onClickX={action('x-click')}
  />
));
