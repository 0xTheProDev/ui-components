import React from 'react';
import { storiesOf } from '@storybook/react';

import ModuleCard from '../src/module-card';

const stories = storiesOf('Drag & Drop Module Cards', module);

stories.add('All', () => (
  <div style={{ width: '400px' }}>
    <style>
      {`
        .is-module { 
          margin: 0 10px 10px 0;
          display: inline-flex;
        }
      `}
    </style>
    <ModuleCard type="button" />
    <ModuleCard type="code" />
    <ModuleCard type="columns" />
    <ModuleCard type="divider" />
    <ModuleCard type="image" />
    <ModuleCard type="image-text" />
    <ModuleCard type="social" />
    <ModuleCard type="spacer" />
    <ModuleCard type="text" />
    <ModuleCard type="unsubscribe" />
  </div>
));

stories.add('Button Module', () => <ModuleCard type="button" />);

stories.add('Code Module', () => <ModuleCard type="code" />);

stories.add('Columns Module', () => <ModuleCard type="columns" />);

stories.add('Divider Module', () => <ModuleCard type="divider" />);

stories.add('Image Module', () => <ModuleCard type="image" />);

stories.add('Image & Text Module', () => <ModuleCard type="image-text" />);

stories.add('Social Module', () => <ModuleCard type="social" />);

stories.add('Spacer Module', () => <ModuleCard type="spacer" />);

stories.add('Text Module', () => <ModuleCard type="text" />);

stories.add('Unsubscribe Module', () => <ModuleCard type="unsubscribe" />);
