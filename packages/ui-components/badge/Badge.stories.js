import { storiesOf } from '@storybook/react';
import React from 'react';
import Badge from './index';
import colors from '../utilities/colors';
const stories = storiesOf('Badge', module);
stories.add('All Badges', () => (React.createElement(React.Fragment, null, colors.map(color => (React.createElement(React.Fragment, null,
    React.createElement(Badge, { color: color, key: color }, color),
    React.createElement("br", null)))))));
stories.add('Badge with custom classname', () => (React.createElement(Badge, { className: "custom-class" }, "custom")));
