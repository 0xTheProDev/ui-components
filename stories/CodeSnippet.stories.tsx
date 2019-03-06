import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import CodeSnippet from '../src/code-snippet';

const stories = storiesOf('Code Snippet', module);

const text = 'http://sendgrid.com';
const code = `
<html>
<head></head>
<body>Hello!</body>
</html>
`;

stories.add('Code Snippets', () => (
  <React.Fragment>
    <CodeSnippet text={text} />
  </React.Fragment>
));

stories.add('Code Snippets (Multiline)', () => (
  <React.Fragment>
    <CodeSnippet text={code} width="500px" height="300px" />
  </React.Fragment>
));
