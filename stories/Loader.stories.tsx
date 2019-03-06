import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import FragmentLoader from '../src/fragment-loader';
import Loader from '../src/loader';

const loaderStories = storiesOf('Loaders', module);

loaderStories.add('Standard Loader', () => <Loader />);

loaderStories.add('Large Loader', () => <Loader large />);

loaderStories.add('Small Loader', () => <Loader small />);

loaderStories.add('Centered Loader', () => (
  <div style={{ height: '100vh' }}>
    <Loader centered />
  </div>
));

loaderStories.add('Loader on Dark', () => (
  <div style={{ backgroundColor: '#294661', height: '100vh' }}>
    <Loader onDark centered large />
  </div>
));

loaderStories.add('Fragment Loader', () => <FragmentLoader />);
loaderStories.add('Large Fragment Loader', () => <FragmentLoader large />);
loaderStories.add('Small Fragment Loader', () => <FragmentLoader small />);
loaderStories.add('Centered Fragment Loader', () => (
  <div style={{ height: '100vh' }}>
    <FragmentLoader large centered />
  </div>
));
