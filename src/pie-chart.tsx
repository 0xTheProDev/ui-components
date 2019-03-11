import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Card from './card';
import Styles from './styles/pie-chart.module.scss';
import { color as ValidColor } from './types/color';
import cn from './utilities/classnames';

export interface BasicSegment {
  label: string;
  color: string;
}
export interface DonutSegment extends BasicSegment {
  count: number;
  legendClass?: string;
}
export interface BadgeRange {
  percent: number;
  content: string;
  color: ValidColor;
}
export interface PieChartCardProps {
  title?: React.ReactNode;
  segments: Array<DonutSegment>;
  mainSegment: string;
  badgeRanges?: Array<BadgeRange>;
  hasLegend?: boolean;
}

const renderSegments = (
  segments: Array<BasicSegment | DonutSegment>,
  percentages: Record<string, number>
) => {
  let cumulativePercentage = 0;
  return segments
    .reduce((returnArray, current) => {
      returnArray.push(
        <circle
          key={`segment-${current.label}`}
          className="donut-segment"
          cx="21"
          cy="21"
          r="15.91549430918954"
          fill="transparent"
          stroke={current.color}
          strokeWidth="2"
          strokeDasharray={`${percentages[current.label]} ${100 -
            percentages[current.label]}`}
          strokeDashoffset={`${125 - (cumulativePercentage || 100)}`}
        />
      );
      cumulativePercentage += percentages[current.label];
      return returnArray;
    }, [])
    .reverse();
};

export interface PieChartProps {
  segments: Array<BasicSegment | DonutSegment>;
  percentages: { [key: string]: number };
  mainSegment?: string;
}
export const PieChart = ({
  segments,
  percentages,
  mainSegment,
}: PieChartProps) => (
  <div className={Styles['pie-chart-svg']}>
    <svg width="100%" height="100%" viewBox="0 0 42 42" className="donut">
      {renderSegments(segments, percentages)}
    </svg>
    <span className={cn(Styles['pie-chart-number'], 'is-size-h2')}>
      {!isNaN(percentages[mainSegment]) && `${percentages[mainSegment]}%`}
    </span>
  </div>
);

export const PieChartLegend = ({ segments, percentages }: PieChartProps) => (
  <ul className={Styles['pie-chart-legend']}>
    {segments.map((segment: DonutSegment) => {
      return (
        <li key={segment.label}>
          <span className={cn('label', segment.legendClass)}>
            {`${percentages[segment.label] || 0}% ${segment.label}`}
          </span>
        </li>
      );
    })}
  </ul>
);
export class PieChartCard extends React.Component<PieChartCardProps> {
  public static defaultProps = {
    hasLegend: true,
  };
  public render() {
    const { title, segments, mainSegment, badgeRanges, hasLegend } = this.props;
    const percentages = this.calculatePercentages(segments);
    const badge =
      badgeRanges && this.getBadge(badgeRanges, percentages[mainSegment]);
    return (
      <Card centered className="pie-chart-card" badge={badge}>
        <div className={Styles['pie-chart']}>
          <PieChart
            segments={segments}
            percentages={percentages}
            mainSegment={mainSegment}
          />
          {hasLegend && (
            <PieChartLegend segments={segments} percentages={percentages} />
          )}
        </div>
        {title}
      </Card>
    );
  }

  private calculatePercentages = (
    segments: Array<BasicSegment | DonutSegment>
  ) => {
    const total = segments.reduce(
      (sum: number, curr: DonutSegment) => sum + curr.count,
      0
    );
    const percents = segments.reduce(
      (memo: Record<string, number>, curr: DonutSegment) => {
        memo[curr.label] = Math.round((curr.count / total) * 100);
        return memo;
      },
      {}
    );
    return percents;
  };

  private getBadge = (badgeRanges: Array<BadgeRange>, percent: number) => {
    let selectedRange = { percent: 0 } as BadgeRange;
    for (const range of badgeRanges) {
      if (percent >= range.percent && range.percent >= selectedRange.percent) {
        selectedRange = range;
      }
    }
    return {
      color: selectedRange.color,
      content: selectedRange.content,
    };
  };
}

export default PieChartCard;
