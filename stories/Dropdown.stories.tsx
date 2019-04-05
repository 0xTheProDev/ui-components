import React from 'react';

import { storiesOf } from '@storybook/react';
import { Dropdown, DropdownLink, DropdownMenu } from '../src/dropdown';

const stories = storiesOf('Dropdown', module);

stories.add('Dropdown header', () => (
  <Dropdown>
    <h1>Test Results: Dec. 12, 2018 at 4:45 PM MST</h1>
    <DropdownMenu>
      <DropdownLink onClick={() => { }}>Dec. 12, 2018 at 4:45 PM MST</DropdownLink>
      <DropdownLink onClick={() => { }}>Dec. 11, 2018 at 2:11 PM MST</DropdownLink>
      <DropdownLink onClick={() => { }}>Dec. 11, 2018 at 10:17 AM MST</DropdownLink>
    </DropdownMenu>
  </Dropdown>
));

stories.add('Dropdown header - initially open', () => (
  <Dropdown initialOpen>
    <h1>Test Results: Dec. 12, 2018 at 4:45 PM MST</h1>
    <DropdownMenu>
      <DropdownLink onClick={() => { }}>Dec. 12, 2018 at 4:45 PM MST</DropdownLink>
      <DropdownLink onClick={() => { }}>Dec. 11, 2018 at 2:11 PM MST</DropdownLink>
      <DropdownLink onClick={() => { }}>Dec. 11, 2018 at 10:17 AM MST</DropdownLink>
    </DropdownMenu>
  </Dropdown>
));

stories.add('Dropdown Header - with subheader', () => (
  <Dropdown>
    <h1>Test Results: Dec. 12, 2018 at 4:45 PM MST</h1>
    <h3>This is a subheader</h3>
    <DropdownMenu>
      <DropdownLink onClick={() => { }}>Dec. 12, 2018 at 4:45 PM MST</DropdownLink>
      <DropdownLink onClick={() => { }}>Dec. 11, 2018 at 2:11 PM MST</DropdownLink>
      <DropdownLink onClick={() => { }}>Dec. 11, 2018 at 10:17 AM MST</DropdownLink>
    </DropdownMenu>
  </Dropdown>
));

stories.add('Dropdown paragraph', () => (
  <Dropdown>
    <p>This is a paragraph</p>
    <p>This is a paragraph</p>
    <p>This is a paragraph</p>
    <DropdownMenu>
      <DropdownLink onClick={() => { }}>Dec. 12, 2018 at 4:45 PM MST</DropdownLink>
      <DropdownLink onClick={() => { }}>Dec. 11, 2018 at 2:11 PM MST</DropdownLink>
      <DropdownLink onClick={() => { }}>Dec. 11, 2018 at 10:17 AM MST</DropdownLink>
    </DropdownMenu>
  </Dropdown>
));
