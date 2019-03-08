import { storiesOf } from '@storybook/react';
import React, { Component } from 'react';

import { ScrollToTopButton } from '../src/scroll-to-top';

const stories = storiesOf('Scroll to Top', module);

class ExampleContainer extends Component<{}, { scrollContainer: HTMLDivElement }> {
  public state = { scrollContainer: null };

  // since the component does not rerender after the initial didMount, the ref passed to the
  // scrollToTopButton will be null without this.  This is just a way to rerender with the updated
  // ref when the ref changes so that the scrollToTopButton receives an actual html element after
  // the initial mount.
  public updateRef = scrollContainer => {
    if (scrollContainer !== this.state.scrollContainer) {
      this.setState({ scrollContainer });
    }
  }

  public render() {
    return (
      <div>
        <div style={{ height: '400px', overflow: 'auto' }} ref={this.updateRef}>
          <div style={{ width: '100%', height: '4000px', backgroundImage: 'linear-gradient(red, yellow)' }} />
        </div>
        <ScrollToTopButton scrollContainerElement={this.state.scrollContainer} />
      </div>
    );
  }
}

stories.add('Scroll to Top [skip]', () => (
  <ExampleContainer />
));
