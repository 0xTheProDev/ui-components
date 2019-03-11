import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React, { Fragment } from 'react';
import { Column } from '../src/grid/column';
import { Row } from '../src/grid/row';
import {PieChart, PieChartCard} from '../src/pie-chart';
import Tooltip, { HTMLTooltip } from '../src/tooltip';
import { color as ValidColor } from '../src/types/color';

const stories = storiesOf('Pie Chart', module);
const storiesCard = storiesOf('Pie Chart Card', module);
class StatefulWrapper extends React.Component<any> {
 

  public render() {
    return (
      <Fragment>
        
        <PieChartCard
          badgeRanges={[
            {
              color: 'mantis' as ValidColor,
              content: 'Good',
              percent: 75,
            },
            {
              color: 'carrot' as ValidColor,
              content: 'Average',
              percent: 40,
            },
            {
              color: 'ron-burgundy' as ValidColor,
              content: 'Poor',
              percent: 0,
            }
          ]}
          segments={[
            {
              color: '#18c96e',
              count: 74,
              label:'passed',
              legendClass: 'label-delivered'
            },
            {
              color: '#b71c1c',
              count: 6,
              label:'failed',
              legendClass: 'label-error'
            },
            {
              color: '#9e9e9e',
              count: 20,
              label:'not received'
            }
          ]}
          mainSegment="passed"
          title="B2B Deliverability"
        />
        <PieChartCard
          badgeRanges={[
            {
              color: 'mantis' as ValidColor,
              content: 'Good',
              percent: 75,
            },
            {
              color: 'carrot' as ValidColor,
              content: 'Average',
              percent: 40,
            },
            {
              color: 'ron-burgundy' as ValidColor,
              content: 'Poor',
              percent: 0,
            }
          ]}
          segments={[
            {
              color: '#18c96e',
              count: 39,
              label: 'passed',
              legendClass: 'label-delivered'
            },
            {
              color: '#b71c1c',
              count: 41,
              label:'failed',
              legendClass: 'label-error'
            },
            {
              color: '#9e9e9e',
              count: 20,
              label:'not received'
            }
          ]}
          mainSegment="passed"
          title="B2C Deliverability"
        />
        <PieChartCard
          segments={[
            {
              color: '#18c96e',
              count: 100,
              label:'passed'
            },
            {
              color: '#b71c1c',
              count: 0,
              label:'failed'
            },
            {
              color: '#9e9e9e',
              count: 0,
              label:'not received'
            }
          ]}
          mainSegment="passed"
          title="Overall Deliverability"
        />
      </Fragment>
    );
  }
}

stories.add('Pie Chart', () => <PieChart
segments={[
  {
    color: '#18c96e',
    label:'passed',
  },
  {
    color: '#b71c1c',
    label:'failed',
  },
  {
    color: '#9e9e9e',
    label:'not received'
  }
]}
percentages={{
  failed: 30,
  'not received': 5,
  passed: 65,
}}
/>);

stories.add('Pie Chart with center number', () => <PieChart
segments={[
  {
    color: '#18c96e',
    label:'passed',
  },
  {
    color: '#b71c1c',
    label:'failed',
  },
  {
    color: '#9e9e9e',
    label:'not received'
  }
]}
percentages={{
  failed: 30,
  'not received': 5,
  passed: 65,
}}
mainSegment="passed"
/>);

storiesCard.add('Pie Chart Card', () => <PieChartCard
segments={[
  {
    color: '#18c96e',
    count: 78,
    label:'passed',
  },
  {
    color: '#b71c1c',
    count: 20,
    label:'failed',
  },
  {
    color: '#9e9e9e',
    count: 2,
    label:'not received'
  }
]}
hasLegend={false}
mainSegment="passed"
/>);


storiesCard.add('with legend', () => <PieChartCard
segments={[
  {
    color: '#18c96e',
    count: 78,
    label:'passed',
    legendClass: 'label-delivered'
  },
  {
    color: '#b71c1c',
    count: 20,
    label:'failed',
    legendClass: 'label-error'
  },
  {
    color: '#9e9e9e',
    count: 2,
    label:'not received'
  }
]}
mainSegment="passed"
/>);

storiesCard.add('with legend and badge', () => <PieChartCard
segments={[
  {
    color: '#18c96e',
    count: 78,
    label:'passed',
    legendClass: 'label-delivered'
  },
  {
    color: '#b71c1c',
    count: 20,
    label:'failed',
    legendClass: 'label-error'
  },
  {
    color: '#9e9e9e',
    count: 2,
    label:'not received'
  }
]}
badgeRanges={[
  {
    color: 'mantis' as ValidColor,
    content: 'Good',
    percent: 75,
  },
  {
    color: 'carrot' as ValidColor,
    content: 'Average',
    percent: 40,
  },
  {
    color: 'ron-burgundy' as ValidColor,
    content: 'Poor',
    percent: 0,
  }
]}
mainSegment="passed"
/>);

storiesCard.add('with legend, badge, and title', () => <PieChartCard
segments={[
  {
    color: '#18c96e',
    count: 78,
    label:'passed',
    legendClass: 'label-delivered'
  },
  {
    color: '#b71c1c',
    count: 20,
    label:'failed',
    legendClass: 'label-error'
  },
  {
    color: '#9e9e9e',
    count: 2,
    label:'not received'
  }
]}
badgeRanges={[
  {
    color: 'mantis' as ValidColor,
    content: 'Good',
    percent: 75,
  },
  {
    color: 'carrot' as ValidColor,
    content: 'Average',
    percent: 40,
  },
  {
    color: 'ron-burgundy' as ValidColor,
    content: 'Poor',
    percent: 0,
  }
]}
mainSegment="passed"
title={<Tooltip className="has-underline" content="Including Everything"><span className="is-size-h2">Overall Deliverability</span></Tooltip>}
/>);

storiesCard.add('with everything and multi-sections', () => <PieChartCard
segments={[
  {
    color: '#18c96e',
    count: 10,
    label:'A',
    legendClass: 'mantis'
  },
  {
    color: '#b71c1c',
    count: 10,
    label:'B',
    legendClass: 'ron-burgundy'
  },
  {
    color: '#9e9e9e',
    count: 10,
    label:'C',
  },
  {
    color: '#18c96e',
    count: 10,
    label:'D',
    legendClass: 'wild-strawberry'
  },
  {
    color: '#17546e',
    count: 10,
    label:'E',
    legendClass: 'sangria'
  },
  {
    color: '#18996e',
    count: 10,
    label:'F',
    legendClass: 'caribbean'
  },
  {
    color: '#11236e',
    count: 10,
    label:'G',
    legendClass: 'grass-stain'
  },
  {
    color: '#12396e',
    count: 10,
    label:'H',
    legendClass: 'screample'
  },
  {
    color: '#18c43e',
    count: 10,
    label:'I',
    legendClass: 'cobalt'
  },
  {
    color: '#19996e',
    count: 10,
    label:'J',
    legendClass: 'mango'
  }
]}
badgeRanges={[
  {
    color: 'mantis' as ValidColor,
    content: 'Good',
    percent: 75,
  },
  {
    color: 'carrot' as ValidColor,
    content: 'Average',
    percent: 40,
  },
  {
    color: 'ron-burgundy' as ValidColor,
    content: 'Poor',
    percent: 0,
  }
]}
mainSegment="A"
title={<HTMLTooltip hoverTarget={<span>Including Everything</span>}><span>Check link.<a href="#"> Learn More</a></span></HTMLTooltip>}
/>)
