import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React, { Fragment } from 'react';
import Dropzone from '../src/dropzone';

import FileUpload, { DroppedFile, FileSelect } from '../src/file-upload';

const stories = storiesOf('File Upload', module);

stories.add('Basic File Upload with JSX Content', () => (
  <FileUpload
    render={({
      hasFile,
      hovered,
      invalid,
      file,
      handleRemove,
      FileSelectLink,
    }) => (
      <Dropzone active={hasFile} hovered={hovered} invalid={invalid}>
        {file ? (
          <DroppedFile file={file} onRemove={handleRemove} />
        ) : (
          <FileSelect>
            <Fragment>
              Drag and drop your CSV file here or{' '}
              <FileSelectLink>select a CSV file to upload</FileSelectLink>.
            </Fragment>
          </FileSelect>
        )}
      </Dropzone>
    )}
    supportedType={'text/csv'}
  />
));
