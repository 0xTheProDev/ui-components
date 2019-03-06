import React from 'react';
import { number, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import UploadProgress from '../src/upload-progress';

const stories = storiesOf('Upload Progress', module);

stories.addDecorator(withKnobs);

stories.add('Upload Progress', () => {
  const title = text('Title', "We're uploading your CSV file");
  const body = text(
    'Body',
    "This may take a few moments, so please don't leave this page."
  );
  const percent = number('Percent', 67, {
    max: 100,
    min: 0,
    range: true,
    step: 1,
  });

  return (
    <UploadProgress percent={percent}>
      <h2>{title}</h2>
      <p>{body}</p>
    </UploadProgress>
  );
});
