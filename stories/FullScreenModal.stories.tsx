import { storiesOf } from '@storybook/react';
import React, { Component } from 'react';

import Button from '../src/button';
import ButtonList from '../src/button-list';
import FullscreenModal from '../src/full-screen-modal';

const stories = storiesOf('FullScreen Modal', module);

class ExampleContainer extends Component<any, { isOpen: boolean }> {
  public readonly state = { isOpen: true };
  public open = (e: any) => {
    this.setState({ isOpen: true });
  };
  public close = (e: any) => {
    this.setState({ isOpen: false });
  };

  public render() {
    return (
      <div>
        <Button type="primary" onClick={this.open}>
          Open Modal
        </Button>
        {this.props.render({
          isOpen: this.state.isOpen,
          onClose: this.close,
        })}
      </div>
    );
  }
}

stories.add('Fullscreen Modal', () => (
  <ExampleContainer
    render={({ isOpen, onClose }: any) => (
      <FullscreenModal
        isOpen={isOpen}
        title="Fullscreen Modal"
        onClose={onClose}
      >
        <div>Here is some content</div>
      </FullscreenModal>
    )}
  />
));

stories.add('Fullscreen Modal with Credits', () => (
  <ExampleContainer
    render={({ isOpen, onClose }: any) => (
      <FullscreenModal
        isOpen={isOpen}
        creditsCount={'150'}
        title="Fullscreen Modal"
        onClose={onClose}
      >
        <div>Here is some content</div>
      </FullscreenModal>
    )}
  />
));

stories.add('Fullscreen Modal with renderProps', () => (
  <ExampleContainer
    render={({ isOpen, onClose }: any) => (
      <FullscreenModal
        isOpen={isOpen}
        onClose={onClose}
        title="With Render Props"
        tooltipText={'here is a tooltip '.repeat(10)}
        tooltipLength="large"
        renderHeaderActions={() => (
          <ButtonList>
            <Button>Confirm</Button>
            <Button type="secondary" onClick={onClose}>
              Cancel
            </Button>
          </ButtonList>
        )}
      >
        <div>Here is some content</div>
      </FullscreenModal>
    )}
  />
));
