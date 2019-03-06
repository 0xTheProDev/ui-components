import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import Button from '../src/button';
import ButtonList from '../src/button-list';
import EmptyState from '../src/empty-state';
import Footer from '../src/small-footer';

const stories = storiesOf('Empty State', module);

stories.add('Empty State With Icon', () => (
  <EmptyState icon="contacts" header="Get started adding contacts">
    <p>
      Add and update your contacts via CSV upload or manually add them one at a
      time, then create static lists or dynamic segments for better targeting.
      Use the Add List or Segment button above to get started.
    </p>
  </EmptyState>
));

stories.add('Empty State With Render Prop', () => (
  <EmptyState
    icon={() => (
      <svg
        className="icon icon-editor-dnd"
        width="40"
        height="40"
        viewBox="140 30 60 60"
      >
        <g fill="none">
          <path
            className="window"
            d="M198.25 83.75c0 2.485-2.015 4.5-4.5 4.5h-47.5c-2.484 0-4.5-2.016-4.5-4.5v-47.5c0-2.484 2.016-4.5 4.5-4.5h47.5c2.485 0 4.5 2.015 4.5 4.5v47.5zm1 0v-47.5c0-3.037-2.462-5.5-5.5-5.5h-47.5c-3.036 0-5.5 2.464-5.5 5.5v47.5c0 3.036 2.464 5.5 5.5 5.5h47.5c3.038 0 5.5-2.463 5.5-5.5zm-58-39.5h57.5c.276 0 .5-.224.5-.5s-.224-.5-.5-.5h-57.5c-.276 0-.5.224-.5.5s.224.5.5.5zm9.5-6.75c0 .414-.336.75-.75.75s-.75-.336-.75-.75.336-.75.75-.75.75.336.75.75zm1 0c0-.966-.784-1.75-1.75-1.75s-1.75.784-1.75 1.75.784 1.75 1.75 1.75 1.75-.784 1.75-1.75zm6.5 0c0 .414-.336.75-.75.75s-.75-.336-.75-.75.336-.75.75-.75.75.336.75.75zm1 0c0-.966-.784-1.75-1.75-1.75s-1.75.784-1.75 1.75.784 1.75 1.75 1.75 1.75-.784 1.75-1.75zm6.5 0c0 .414-.336.75-.75.75s-.75-.336-.75-.75.336-.75.75-.75.75.336.75.75zm1 0c0-.966-.784-1.75-1.75-1.75s-1.75.784-1.75 1.75.784 1.75 1.75 1.75 1.75-.784 1.75-1.75z"
            fill="#445B6C"
          />
          <path
            className="content"
            d="M191.25 55.75h-42.5l.5.5v-7.5l-.5.5h42.5l-.5-.5v7.5l.5-.5zm0 1c.276 0 .5-.224.5-.5v-7.5c0-.276-.224-.5-.5-.5h-42.5c-.276 0-.5.224-.5.5v7.5c0 .276.224.5.5.5h42.5zm-35 4h-7.5c-.276 0-.5.224-.5.5v20c0 .276.224.5.5.5h7.5c.276 0 .5-.224.5-.5v-20c0-.276-.224-.5-.5-.5zm0 1l-.5-.5v20l.5-.5h-7.5l.5.5v-20l-.5.5h7.5zm35 6.5h-27.5l.5.5v-7.5l-.5.5h27.5l-.5-.5v7.5l.5-.5zm0 1c.276 0 .5-.224.5-.5v-7.5c0-.276-.224-.5-.5-.5h-27.5c-.276 0-.5.224-.5.5v7.5c0 .276.224.5.5.5h27.5zm0 11.5h-27.5l.5.5v-7.5l-.5.5h27.5l-.5-.5v7.5l.5-.5zm0 1c.276 0 .5-.224.5-.5v-7.5c0-.276-.224-.5-.5-.5h-27.5c-.276 0-.5.224-.5.5v7.5c0 .276.224.5.5.5h27.5z"
            fill="#1A82E2"
          />
        </g>
      </svg>
    )}
    header="Get started adding contacts"
  >
    <p>
      Add and update your contacts via CSV upload or manually add them one at a
      time, then create static lists or dynamic segments for better targeting.
      Use the Add List or Segment button above to get started.
    </p>
  </EmptyState>
));

stories.add('Empty State With Buttons', () => (
  <EmptyState header="Get started adding contacts">
    <p>
      Add and update your contacts via CSV upload or manually add them one at a
      time, then create static lists or dynamic segments for better targeting.
      Use the Add List or Segment button above to get started.
    </p>
    <ButtonList>
      <Button type="primary" onClick={action('Button Clicked')}>
        Primary
      </Button>
      <Button type="secondary" onClick={action('Button Clicked')}>
        Secondary
      </Button>
    </ButtonList>
  </EmptyState>
));

stories.add('Empty State With Everything', () => (
  <div>
    <EmptyState icon="contacts" header="Get started adding contacts">
      <p>
        Add and update your contacts via CSV upload or manually add them one at
        a time, then create static lists or dynamic segments for better
        targeting. Use the Add List or Segment button above to get started.
      </p>
      <ButtonList>
        <Button type="primary" onClick={action('Button Clicked')}>
          Primary
        </Button>
        <Button type="secondary" onClick={action('Button Clicked')}>
          Secondary
        </Button>
      </ButtonList>
    </EmptyState>
    <Footer icon="help" header="Need help?">
      <a href="#">Get more info</a> on adding and updating contacts.
    </Footer>
  </div>
));
