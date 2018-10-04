import { storiesOf } from '@storybook/react';
import React from 'react';

import { Column } from '../src/grid/column';
import { Row } from '../src/grid/row';
import { NumberedStep, NumberedSteps } from '../src/numbered-steps';

const stories = storiesOf('NumberedSteps', module);

stories.add('Numbered Steps with short content', () => (
  <Row>
    <Column width={4}>
      <NumberedSteps>
        <NumberedStep header="Use these settings">
          <p>Configure your application with the settings below.</p>
        </NumberedStep>
        <NumberedStep header="Send your first email">
          <p>Test your integration by sending email through your application.</p>
        </NumberedStep>
      </NumberedSteps>
    </Column>
  </Row>
));

stories.add('Numbered Steps with longer content', () => (
  <Row>
    <Column width={4}>
      <NumberedSteps>
        <NumberedStep header="Use these settings">
          <p>Configure your application with the settings below.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rutrum neque nec felis pellentesque,
            mollis varius libero consectetur. Nulla elementum pellentesque accumsan. Fusce sit amet quam quis
            elit lobortis egestas sed eu turpis. Nullam luctus pellentesque enim placerat pretium. Vivamus
            viverra nunc a tortor convallis egestas. Vestibulum mattis, nunc quis dapibus rhoncus, dui magna feugiat
            tortor, ut rutrum orci dui dictum leo. Fusce convallis diam sit amet luctus maximus. Pellentesque vehicula
            faucibus nunc, at cursus mi congue quis. Pellentesque tempus, est eget vestibulum ultricies, elit odio
            blandit diam, in venenatis risus leo luctus orci.
          </p>
        </NumberedStep>
        <NumberedStep header="Send your first email">
          <div>
            <p>Test your integration by sending email through your application.</p>
            <p>
              Vivamus quis volutpat nibh. Maecenas nibh eros, fermentum posuere convallis sed, consectetur et massa.
              Donec feugiat a nisl quis porttitor. Ut egestas, libero non cursus posuere, quam nulla feugiat magna,
              eget rutrum justo odio a nisi. Donec tincidunt urna in vulputate ultricies. Fusce id dolor vehicula,
              tincidunt neque vel, iaculis nulla. Duis sed arcu leo.
            </p>
          </div>
        </NumberedStep>
      </NumberedSteps>
    </Column>
  </Row>
));
