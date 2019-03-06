import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Column } from '../src/grid/column';
import { Row } from '../src/grid/row';
import PercentInput from '../src/percent-input';

const stories = storiesOf('Percent Input', module);

class StatefulWrapper extends React.Component<any> {
  public state = {
    value: undefined as any,
  };
  public onChange = (e: any, value: any) => {
    this.setState({
      value,
    });
  };
  public render() {
    return (
      <PercentInput
        {...this.props}
        value={this.state.value}
        id="test-percentage"
        onChange={this.onChange}
      />
    );
  }
}

stories.add('Basic', () => (
  <Row>
    <Column width={1}>
      <StatefulWrapper />
    </Column>
  </Row>
));
