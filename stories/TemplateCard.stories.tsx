import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { EditorType, TemplateCard } from '../src/template-card';
import Icon from '../src/icon';

import '../src/styles/global/main.scss';
import { Button } from '../src/button';
import DropdownButton from '../src/dropdown-button';

const stories = storiesOf('Template Card', module);

stories.add('Blank Card', () => (
  <div style={{ width: '240px' }}>
    <TemplateCard
      templateId="blank"
      blank
      name="Blank Template"
    >
      <Button>Select</Button>
    </TemplateCard>
  </div>
));

stories.add('Card with Image - Code', () => (
  <div style={{ width: '240px' }}>
    <TemplateCard
      templateId="blank"
      editorInfo={EditorType.Code}
      name="Modern"
      thumbnailUrl="http://via.placeholder.com/240"
    >
      <Button>Select</Button>
    </TemplateCard>
  </div>
));

stories.add('Card with Image - Design', () => (
  <div style={{ width: '240px' }}>
    <TemplateCard
      templateId="12345"
      editorInfo={EditorType.Design}
      name="Modern"
      thumbnailUrl="http://via.placeholder.com/240"
    >
      <Button>Select</Button>
    </TemplateCard>
  </div>
));

stories.add('Card with Image - Diff Name', () => (
  <div style={{ width: '240px' }}>
    <TemplateCard
      templateId="54321"
      name="Underwater Blue"
      editorInfo={EditorType.Design}
      thumbnailUrl="http://via.placeholder.com/240"
    >
      <Button>Select</Button>
    </TemplateCard>
  </div>
));

stories.add('Card with Image - No editor type', () => (
  <div style={{ width: '240px' }}>
    <TemplateCard
      templateId="09876"
      name="Modern"
      thumbnailUrl="http://via.placeholder.com/240"
    >
      <Button>Select</Button>
    </TemplateCard>
  </div>
));

const CustomEditBadge = <div style={{ color: 'red' }}>Styled Editor</div>;

stories.add('Card with Image - Custom editor type', () => (
  <div style={{ width: '240px' }}>
    <TemplateCard
      templateId="67890"
      editorInfo={CustomEditBadge}
      name="Modern"
      thumbnailUrl="http://via.placeholder.com/240"
    >
      <Button>Select</Button>
    </TemplateCard>
  </div>
));

stories.add('Card with Actions', () => (
  <div style={{ width: '240px' }}>
    <TemplateCard
      templateId="12345"
      name="Modern"
      overlayText="Updated: 3/15/19"
      thumbnailUrl="http://via.placeholder.com/240"
      renderActions={() => (
        <DropdownButton left type="tertiary" small icon="ellipsis-vertical">
          <a href="#"><Icon type="trash"></Icon>Delete</a>
          <a href="#"><Icon type="pencil"></Icon>Edit</a>
          <a href="#"><Icon type="view"></Icon>Preview</a>
        </DropdownButton>
      )}
    >
      <Button type="secondary">Select</Button>
      <Button type="secondary">Preview</Button>
    </TemplateCard>
  </div>
));

stories.add('Blank Card with Actions', () => (
  <div style={{ width: '240px' }}>
    <TemplateCard
      blank
      templateId="12345"
      name="Modern"
      overlayText="Updated: 3/15/19"
      renderActions={() => (
        <DropdownButton left type="tertiary" small icon="ellipsis-vertical">
          <a href="#"><Icon type="trash"></Icon>Delete</a>
          <a href="#"><Icon type="pencil"></Icon>Edit</a>
          <a href="#"><Icon type="view"></Icon>Preview</a>
        </DropdownButton>
      )}
    >
      <Button type="secondary">Select</Button>
      <Button type="secondary">Preview</Button>
    </TemplateCard>
  </div>
));