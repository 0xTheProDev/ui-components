import { storiesOf } from '@storybook/react';
import React from 'react';

import Footer from '../src/small-footer';

const stories = storiesOf('Small Footer', module);

stories.add('Footer Simple', () => (
  <Footer icon="help" header="What the what?">
    This component is just fantastic.
  </Footer>
));

stories.add('Need Help Footer Simple', () => (
  <Footer icon="help" header="Need help?">
    Get more info on adding and updating contacts.
  </Footer>
));

stories.add('Need Help Footer with Link', () => (
  <Footer icon="help" header="Need help?">
    <a href="#">Get more info</a> on adding and updating contacts.
  </Footer>
));
