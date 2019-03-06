import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import Alert from '../src/alert';
import Dropzone from '../src/dropzone';

const stories = storiesOf('Dropzone', module);

const alert = (
  <Alert type="warning" onClick={action('Alert Dismissed')}>
    Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing elit</a>. In
    nec augue eu lacus aliquam lobortis.
  </Alert>
);

stories.add('Dropzone', () => <Dropzone />);

stories.add('Dropzone (Active)', () => <Dropzone active />);

stories.add('Dropzone (Hovered)', () => <Dropzone hovered />);

stories.add('Dropzone (Large)', () => <Dropzone large />);

stories.add('Dropzone (Invalid)', () => <Dropzone invalid />);

stories.add('Dropzone (with Alert)', () => <Dropzone alert={alert} />);

stories.add('Dropzone (with String Content)', () => (
  <Dropzone>Drag and drop your file here.</Dropzone>
));

stories.add('Dropzone (with JSX Content)', () => (
  <Dropzone>
    <span>
      Drag and drop your file or <a href="#">click here to select a file</a>.
    </span>
  </Dropzone>
));

stories.add('Dropzone (with String Content and Alert)', () => (
  <Dropzone alert={alert}>
    This currently doesn't look great and I am well aware of that.
  </Dropzone>
));

stories.add('Dropzone (with JSX Content and Alert)', () => (
  <Dropzone alert={alert}>
    <span>
      <a href="https://github.com/sendgrid/style-guide/issues/198">
        Here is the Style Guide issue
      </a>{' '}
      where we're going to fix this.
    </span>
  </Dropzone>
));
