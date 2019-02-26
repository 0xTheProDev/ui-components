import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Icon from '../src/icon';
import { TextInput } from '../src/text-input';
import { HTMLTooltip, Tooltip } from '../src/tooltip';

const stories = storiesOf('Tooltip', module);

stories.add('Standard', () => (
  <div style={{ maxWidth: '500px', width: '100%', margin: '0 auto' }}>
    <h2>No Direction Specified</h2>
    <h3>
      Up
      <Tooltip content="Hello.">
        <Icon type="info-circle" />
      </Tooltip>
    </h3>
    <hr />
    <h2>No Length Specified</h2>
    <h3>
      Up
      <Tooltip content="Hello." direction="up">
        <Icon type="info-circle" />
      </Tooltip>
    </h3>
    <h3>
      Right
      <Tooltip content="Hello." direction="right">
        <Icon type="info-circle" />
      </Tooltip>
    </h3>
    <h3>
      Down
      <Tooltip content="Hello." direction="down">
        <Icon type="info-circle" />
      </Tooltip>
    </h3>
    <h3>
      Left
      <Tooltip content="Hello." direction="left">
        <Icon type="info-circle" />
      </Tooltip>
    </h3>
    <hr />
    <h2>Small Content</h2>
    <h3>
      Up
      <Tooltip content="A blurb." direction="up" length="small">
        <Icon type="info-circle" />
      </Tooltip>
    </h3>
    <h3>
      Right
      <Tooltip content="A blurb." direction="right" length="small">
        <Icon type="info-circle" />
      </Tooltip>
    </h3>
    <h3>
      Down
      <Tooltip content="A blurb." direction="down" length="small">
        <Icon type="info-circle" />
      </Tooltip>
    </h3>
    <h3>
      Left
      <Tooltip content="A blurb." direction="left" length="small">
        <Icon type="info-circle" />
      </Tooltip>
    </h3>
    <hr />
    <h2>Medium Content</h2>
    <h3>
      Up
      <Tooltip content="Nulla vitae elit libero, a pharetra augue. Integer posuere erat a ante venenatis dapibus posuere velit aliquet." direction="up" length="medium">
        <Icon type="info-circle" />
      </Tooltip>
    </h3>
    <h3>
      Right
      <Tooltip content="Nulla vitae elit libero, a pharetra augue. Integer posuere erat a ante venenatis dapibus posuere velit aliquet." direction="right" length="medium">
        <Icon type="info-circle" />
      </Tooltip>
    </h3>
    <h3>
      Down
      <Tooltip content="Nulla vitae elit libero, a pharetra augue. Integer posuere erat a ante venenatis dapibus posuere velit aliquet." direction="down" length="medium">
        <Icon type="info-circle" />
      </Tooltip>
    </h3>
    <h3>
      Left
      <Tooltip content="Nulla vitae elit libero, a pharetra augue. Integer posuere erat a ante venenatis dapibus posuere velit aliquet." direction="left" length="medium">
        <Icon type="info-circle" />
      </Tooltip>
    </h3>
    <hr />
    <h2>Large Content</h2>
    <h3>
      Up
      <Tooltip content="Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Cras justo odio, dapibus ac facilisis in, egestas eget quam." direction="up" length="large">
        <Icon type="info-circle" />
      </Tooltip>
    </h3>
    <h3>
      Right
      <Tooltip content="Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Cras justo odio, dapibus ac facilisis in, egestas eget quam." direction="right" length="large">
        <Icon type="info-circle" />
      </Tooltip>
    </h3>
    <h3>
      Down
      <Tooltip content="Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Cras justo odio, dapibus ac facilisis in, egestas eget quam." direction="down" length="large">
        <Icon type="info-circle" />
      </Tooltip>
    </h3>
    <h3>
      Left
      <Tooltip content="Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Cras justo odio, dapibus ac facilisis in, egestas eget quam." direction="left" length="large">
        <Icon type="info-circle" />
      </Tooltip>
    </h3>
    <hr />
    <h2>X Large Content</h2>
    <h3>
      Up
      <Tooltip content="Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Cras justo odio, dapibus ac facilisis in, egestas eget quam." direction="up" length="xlarge">
        <Icon type="info-circle" />
      </Tooltip>
    </h3>
    <h3>
      Right
      <Tooltip content="Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Cras justo odio, dapibus ac facilisis in, egestas eget quam." direction="right" length="xlarge">
        <Icon type="info-circle" />
      </Tooltip>
    </h3>
    <h3>
      Down
      <Tooltip content="Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Cras justo odio, dapibus ac facilisis in, egestas eget quam." direction="down" length="xlarge">
        <Icon type="info-circle" />
      </Tooltip>
    </h3>
    <h3>
      Left
      <Tooltip content="Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Cras justo odio, dapibus ac facilisis in, egestas eget quam." direction="left" length="xlarge">
        <Icon type="info-circle" />
      </Tooltip>
    </h3>
    <hr />
    <h2>Style Bleed</h2>
    <h3 style={{ letterSpacing: '5px', textTransform: 'uppercase', fontFamily: 'Comic Sans MS', fontSize: '2em', color: 'rebeccapurple' }}>
      Oh god why
      <Tooltip content="This should not display any of the following styles set on the parent element: text-transform, letter-spacing, font-size, font-family, or color." direction="right" length="large">
        <Icon type="info-circle" />
      </Tooltip>
    </h3>
    <hr />
    <h2>With HTML Content</h2>
    <h3>
      Right
      <Tooltip
        content={
          <p>
            The <a href="#">CCV number</a> is a 3 or 4 digit security code printed
            on the front or back of your card.
          </p>
        }
        direction="up"
        hoverTarget={<Icon type="info-circle" />}
      >
        <span>testing testing testing</span>
      </Tooltip>
    </h3>
    <h3>
      Left
      <Tooltip
        className="input-info-tooltip"
        content={
          <p>
            The <a href="#">CCV number</a> is a 3 or 4 digit security code printed
            on the front or back of your card.
          </p>
        }
        direction="left"
        hoverTarget={<Icon type="info-circle" />}
      />
    </h3>
  </div>
));

stories.add('Underline', () => (
  <div style={{ maxWidth: '500px', width: '100%', margin: '0 auto' }}>
    <h2>No Length Specified</h2>
    <Tooltip
      content="That means automatic teller machine."
      direction="right"
      className="has-underline"
    >
      <span>Right</span>
    </Tooltip>
    <hr />
    <h2>No Direction Specified</h2>
    <Tooltip
      content="That means automatic teller machine."
      className="has-underline"
    >
      <span>Up</span>
    </Tooltip>
    <hr />
    <h2>Small Content</h2>
    <Tooltip
      content="A word."
      length="small"
      direction="up"
      className="has-underline"
    >
      <span>Up</span>
    </Tooltip>
    {' • '}
    <Tooltip
      content="A word."
      length="small"
      direction="right"
      className="has-underline"
    >
      <span>Right</span>
    </Tooltip>
    {' • '}
    <Tooltip
      content="A word."
      length="small"
      direction="down"
      className="has-underline"
    >
      <span>Down</span>
    </Tooltip>
    {' • '}
    <Tooltip
      content="A word."
      length="small"
      direction="left"
      className="has-underline"
    >
      <span>Left</span>
    </Tooltip>
    <hr />
    <h2>Medium Content</h2>
    <Tooltip
      content="Nulla vitae elit libero, a pharetra augue. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
      length="medium"
      direction="up"
      className="has-underline"
    >
      <span>Up</span>
    </Tooltip>
    {' • '}
    <Tooltip
      content="Nulla vitae elit libero, a pharetra augue. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
      length="medium"
      direction="right"
      className="has-underline"
    >
      <span>Right</span>
    </Tooltip>
    {' • '}
    <Tooltip
      content="Nulla vitae elit libero, a pharetra augue. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
      length="medium"
      direction="down"
      className="has-underline"
    >
      <span>Down</span>
    </Tooltip>
    {' • '}
    <Tooltip
      content="Nulla vitae elit libero, a pharetra augue. Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
      length="medium"
      direction="left"
      className="has-underline"
    >
      <span>Left</span>
    </Tooltip>
    <hr />
    <h2>Large Content</h2>
    <Tooltip
      content="Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Cras justo odio, dapibus ac facilisis in, egestas eget quam."
      length="large"
      direction="up"
      className="has-underline"
    >
      <span>Up</span>
    </Tooltip>
    {' • '}
    <Tooltip
      content="Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Cras justo odio, dapibus ac facilisis in, egestas eget quam."
      length="large"
      direction="right"
      className="has-underline"
    >
      <span>Right</span>
    </Tooltip>
    {' • '}
    <Tooltip
      content="Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Cras justo odio, dapibus ac facilisis in, egestas eget quam."
      length="large"
      direction="down"
      className="has-underline"
    >
      <span>Down</span>
    </Tooltip>
    {' • '}
    <Tooltip
      content="Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Cras justo odio, dapibus ac facilisis in, egestas eget quam."
      length="large"
      direction="left"
      className="has-underline"
    >
      <span>Left</span>
    </Tooltip>
    <hr />
    <h2>X Large Content</h2>
    <Tooltip
      content="Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Cras justo odio, dapibus ac facilisis in, egestas eget quam."
      length="xlarge"
      direction="up"
      className="has-underline"
    >
      <span>Up</span>
    </Tooltip>
    {' • '}
    <Tooltip
      content="Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Cras justo odio, dapibus ac facilisis in, egestas eget quam."
      length="xlarge"
      direction="right"
      className="has-underline"
    >
      <span>Right</span>
    </Tooltip>
    {' • '}
    <Tooltip
      content="Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Cras justo odio, dapibus ac facilisis in, egestas eget quam."
      length="xlarge"
      direction="down"
      className="has-underline"
    >
      <span>Down</span>
    </Tooltip>
    {' • '}
    <Tooltip
      content="Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Cras justo odio, dapibus ac facilisis in, egestas eget quam."
      length="xlarge"
      direction="left"
      className="has-underline"
    >
      <span>Left</span>
    </Tooltip>
  </div>
));

stories.add('HTML Content', () => (
  <div style={{ maxWidth: '500px', width: '100%', margin: '0 auto' }}>
    <h2>No Direction Specified</h2>
    <div className="input-text-wrap">
      <TextInput
        type="text"
        label="Label"
        id="input-text-example-ccv"
        onChange={action('Input Changed')}
      >
        <div className="input-info-tooltip">
          <HTMLTooltip hoverTarget={<Icon type="info-circle" />}>
            <p>
              The <a href="#">CCV number</a> is a 3 or 4 digit security code printed
              on the front or back of your card.
            </p>
          </HTMLTooltip>
        </div>
      </TextInput>
    </div>
    <hr />
    <h2>No Length Specified</h2>
    <div className="input-text-wrap">
      <TextInput
        type="text"
        label="Label"
        id="input-text-example-ccv"
        onChange={action('Input Changed')}
      >
        <div className="input-info-tooltip">
          <HTMLTooltip hoverTarget={<Icon type="info-circle" />} direction="right">
            <p>
              The <a href="#">CCV number</a> is a 3 or 4 digit security code printed
              on the front or back of your card.
            </p>
          </HTMLTooltip>
        </div>
      </TextInput>
    </div>
    <hr />
    <h2>Small Content</h2>
    <div className="input-text-wrap">
      <TextInput
        type="text"
        label="Left"
        id="input-text-example-ccv"
        onChange={action('Input Changed')}
      >
        <div className="input-info-tooltip">
          <HTMLTooltip hoverTarget={<Icon type="info-circle" />} direction="left" length="small">
            <p>
              <a href="#">Click</a>.
            </p>
          </HTMLTooltip>
        </div>
      </TextInput>
    </div>
    <div className="input-text-wrap">
      <TextInput
        type="text"
        label="Right"
        id="input-text-example-ccv"
        onChange={action('Input Changed')}
      >
        <div className="input-info-tooltip">
          <HTMLTooltip hoverTarget={<Icon type="info-circle" />} direction="right" length="small">
            <p>
              <a href="#">Click</a>.
            </p>
          </HTMLTooltip>
        </div>
      </TextInput>
    </div>
    <hr />
    <h2>Medium Content</h2>
    <div className="input-text-wrap">
      <TextInput
        type="text"
        label="Left"
        id="input-text-example-ccv"
        onChange={action('Input Changed')}
      >
        <div className="input-info-tooltip">
          <HTMLTooltip hoverTarget={<Icon type="info-circle" />} direction="left" length="medium">
            <p>
              This is a <a href="#">decent-sized</a> blurb.
            </p>
          </HTMLTooltip>
        </div>
      </TextInput>
    </div>
    <div className="input-text-wrap">
      <TextInput
        type="text"
        label="Right"
        id="input-text-example-ccv"
        onChange={action('Input Changed')}
      >
        <div className="input-info-tooltip">
          <HTMLTooltip hoverTarget={<Icon type="info-circle" />} direction="right" length="medium">
            <p>
              This is a <a href="#">decent-sized</a> blurb.
            </p>
          </HTMLTooltip>
        </div>
      </TextInput>
    </div>
    <hr />
    <h2>Large Content</h2>
    <div className="input-text-wrap">
      <TextInput
        type="text"
        label="Left"
        id="input-text-example-ccv"
        onChange={action('Input Changed')}
      >
        <div className="input-info-tooltip">
          <HTMLTooltip hoverTarget={<Icon type="info-circle" />} direction="left" length="large">
            <p>
              Donec sed odio dui. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Etiam porta sem malesuada magna mollis euismod. <a href="#">Lorem</a> ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </HTMLTooltip>
        </div>
      </TextInput>
    </div>
    <div className="input-text-wrap">
      <TextInput
        type="text"
        label="Right"
        id="input-text-example-ccv"
        onChange={action('Input Changed')}
      >
        <div className="input-info-tooltip">
          <HTMLTooltip hoverTarget={<Icon type="info-circle" />} direction="right" length="large">
            <p>
              Donec sed odio dui. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Etiam porta sem malesuada magna mollis euismod. <a href="#">Lorem</a> ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </HTMLTooltip>
        </div>
      </TextInput>
    </div>
  </div>
));





