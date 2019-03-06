import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import Badge from '../src/badge';

import colors from '../src/utilities/colors';

const stories = storiesOf('Badge', module);

stories.add('All Badges', () => (
  <React.Fragment>
    {colors.map(color => (
      <React.Fragment>
        <Badge color={color} key={color}>
          {color}
        </Badge>
        <br />
      </React.Fragment>
    ))}
  </React.Fragment>
));

stories.add('Badge with custom classname', () => (
  <Badge className="custom-class">custom</Badge>
));
