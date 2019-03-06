import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import SaveButton from '../src/save-button';

const stories = storiesOf('Save Button', module);

class Wrapper extends React.Component<
  any,
  {
    saving: boolean;
    saved: boolean;
  }
> {
  public state = {
    saved: false,
    saving: false,
  };

  public handleClick = () => {
    this.setState({
      saving: true,
    });
    setTimeout(() => {
      this.setState({
        saved: true,
        saving: false,
      });
    }, 1500);
    setTimeout(() => {
      this.setState({
        saved: false,
      });
    }, 5000);
    // tslint:disable-next-line:no-unused-expression
    this.props.onClick && this.props.onClick();
  };

  public render() {
    return (
      <SaveButton
        saving={this.state.saving}
        saved={this.state.saved}
        type={this.props.type}
        onDark={this.props.onDark}
        onClick={this.handleClick}
        hasIcon={this.props.hasIcon}
        style={{ minWidth: '123px' }}
        id="stui-test-locator-abc"
      >
        Save Draft
      </SaveButton>
    );
  }
}

stories.add('Primary', () => <Wrapper type="primary" />);

stories.add('Secondary', () => <Wrapper type="secondary" />);

stories.add('Primary on dark', () => (
  <div style={{ background: '#060235', padding: '25px', width: '300px' }}>
    <Wrapper type="primary" onDark />
  </div>
));

stories.add('Secondary on dark', () => (
  <div style={{ background: '#060235', padding: '25px', width: '300px' }}>
    <Wrapper type="secondary" onDark />
  </div>
));

stories.add('With icon', () => <Wrapper type="secondary" hasIcon />);

stories.add('With icon on dark', () => (
  <div style={{ background: '#060235', padding: '25px', width: '300px' }}>
    <Wrapper type="secondary" hasIcon onDark />
  </div>
));
