import React from 'react';
import { storiesOf } from '@storybook/react';

import SplitCard, { SplitCardSeparator } from '../src/split-card';

const stories = storiesOf('Split Card', module);

stories.add('Split Card (w/ labeled separator)', () => (
  <div className="row">
    <div className="col-4" style={{ width: '300px' }}>
      <SplitCard title="Split Card" body="Line of copy.">
        <p>Section 1</p>
        <SplitCardSeparator label="separator" />
        <p>Section 2</p>
      </SplitCard>
    </div>
  </div>
));

stories.add('Split Card (w/ unlabeled separator)', () => (
  <div className="row">
    <div className="col-4" style={{ width: '300px' }}>
      <SplitCard title="Split Card" body="Line of copy.">
        <p>Section 1</p>
        <SplitCardSeparator />
        <p>Section 2</p>
      </SplitCard>
    </div>
  </div>
));
