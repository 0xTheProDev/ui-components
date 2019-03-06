import { storiesOf } from '@storybook/react';
import React from 'react';

import ContactCount from '../src/contact-count';

const stories = storiesOf('Contact Count', module);

stories.add('Contact Count', () => <ContactCount />);

stories.add('Contact Count Right Aligned', () => <ContactCount isRight />);

stories.add('Contact Count (with count)', () => <ContactCount count={5432} />);

stories.add('Contact Count (with string count)', () => (
  <ContactCount count="5432" />
));
