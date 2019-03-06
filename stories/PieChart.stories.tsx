import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React, { Fragment } from 'react';
import { Column } from '../src/grid/column';
import { Row } from '../src/grid/row';
import PieChart from '../src/pie-chart';

const stories = storiesOf('Pie Chart', module);

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
      <Fragment>
        <PieChart
          passed={23}
          failed={9}
          notRecieved={7}
          cutoffGood={75}
          cutoffBad={40}
          title="Overall Deliverability"
          tooltip="Including everything"
        />
        <PieChart
          passed={88}
          failed={12}
          notRecieved={0}
          cutoffGood={75}
          cutoffBad={40}
          title="B2B Deliverability"
          tooltip="Including everything"
        />
        <PieChart
          passed={0}
          failed={93}
          notRecieved={7}
          cutoffGood={75}
          cutoffBad={40}
          title="B2C Deliverability"
          tooltip="Including everything"
        />
        <PieChart
          passed={1000}
          failed={900}
          notRecieved={70}
          cutoffGood={75}
          cutoffBad={40}
          title="Overall Deliverability"
          tooltip="Including everything"
        />
      </Fragment>
    );
  }
}

stories.add('Basic', () => <StatefulWrapper />);
