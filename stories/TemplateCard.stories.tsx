import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { EditorType, TemplateCard } from '../src/template-card';

import '../src/styles/global/main.scss';

const stories = storiesOf('Template Card', module);
const onSelect = (id: string) => {
  action(`Template ${id} selected`);
};
stories.add('Blank Card', () => (
  <div style={{ width: '240px' }}>
    <TemplateCard
      onSelect={onSelect}
      templateId="blank"
      blank
      name="Blank Template"
    />
  </div>
));

stories.add('Card with Image - Code', () => (
  <div style={{ width: '240px' }}>
    <TemplateCard
      onSelect={onSelect}
      templateId="blank"
      editorInfo={EditorType.Code}
      name="Modern"
      thumbnailUrl="http://via.placeholder.com/240"
    />
  </div>
));

stories.add('Card with Image - Design', () => (
  <div style={{ width: '240px' }}>
    <TemplateCard
      onSelect={onSelect}
      templateId="12345"
      editorInfo={EditorType.Design}
      name="Modern"
      thumbnailUrl="http://via.placeholder.com/240"
    />
  </div>
));

stories.add('Card with Image - Diff Name', () => (
  <div style={{ width: '240px' }}>
    <TemplateCard
      onSelect={onSelect}
      templateId="54321"
      name="Underwater Blue"
      editorInfo={EditorType.Design}
      thumbnailUrl="http://via.placeholder.com/240"
    />
  </div>
));

stories.add('Card with Image - No editor type', () => (
  <div style={{ width: '240px' }}>
    <TemplateCard
      onSelect={onSelect}
      templateId="09876"
      name="Modern"
      thumbnailUrl="http://via.placeholder.com/240"
    />
  </div>
));

const CustomEditBadge = <div style={{ color: 'red' }}>Styled Editor</div>;

stories.add('Card with Image - Custom editor type', () => (
  <div style={{ width: '240px' }}>
    <TemplateCard
      onSelect={onSelect}
      templateId="67890"
      editorInfo={CustomEditBadge}
      name="Modern"
      thumbnailUrl="http://via.placeholder.com/240"
    />
  </div>
));
