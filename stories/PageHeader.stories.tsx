import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Breadcrumb } from '../src/breadcrumb';
import { Button } from '../src/button';
import { PageHeader, PageHeading } from '../src/page-header';

const stories = storiesOf('PageHeader', module);
const breadcrumbs = [{ to: 'Aaa', href: '#' }, { to: 'Bbb', href: '#' }];

stories.add('Page Header containing: Breadcrumbs and a Page Heading', () => (
  <PageHeader>
    <Breadcrumb>
      <a href="#">Contacts</a>
      <a href="#">Upload CSV</a>
    </Breadcrumb>
    <PageHeading title="Page Title">
      <Button type="primary" onClick={action('Button Clicked')}>
        Create Campaign
      </Button>
    </PageHeading>
  </PageHeader>
));
