import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Buttonized } from '../src/button';

const stories = storiesOf('Button Link', module);

stories.add('Div Button Link', () => (
  <Buttonized type="primary" onClick={action('Button Clicked')}>
    <div>This is a div</div>
  </Buttonized>
));

stories.add('Div Secondary Button Link', () => (
  <Buttonized type="secondary" onClick={action('Button Clicked')}>
    <div>This is a div</div>
  </Buttonized>
));

stories.add('Div Danger Button Link', () => (
  <Buttonized type="danger" icon="trash" onClick={action('Button Clicked')}>
    <div>This is a div</div>
  </Buttonized>
));

stories.add('Anchor Button Link', () => (
  <Buttonized type="primary" onClick={action('Button Clicked')}>
    <a href="#">This is an anchor</a>
  </Buttonized>
));
