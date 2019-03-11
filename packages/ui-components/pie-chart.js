import React from 'react';
import Card from './card';
import Styles from './styles/pie-chart.module.scss';
import cn from './utilities/classnames';
const renderSegments = (segments, percentages) => {
    let cumulativePercentage = 0;
    return segments
        .reduce((returnArray, current) => {
        returnArray.push(React.createElement("circle", { key: `segment-${current.label}`, className: "donut-segment", cx: "21", cy: "21", r: "15.91549430918954", fill: "transparent", stroke: current.color, strokeWidth: "2", strokeDasharray: `${percentages[current.label]} ${100 -
                percentages[current.label]}`, strokeDashoffset: `${125 - (cumulativePercentage || 100)}` }));
        cumulativePercentage += percentages[current.label];
        return returnArray;
    }, [])
        .reverse();
};
export const PieChart = ({ segments, percentages, mainSegment, }) => (React.createElement("div", { className: Styles['pie-chart-svg'] },
    React.createElement("svg", { width: "100%", height: "100%", viewBox: "0 0 42 42", className: "donut" }, renderSegments(segments, percentages)),
    React.createElement("span", { className: cn(Styles['pie-chart-number'], 'is-size-h2') }, !isNaN(percentages[mainSegment]) && `${percentages[mainSegment]}%`)));
export const PieChartLegend = ({ segments, percentages }) => (React.createElement("ul", { className: Styles['pie-chart-legend'] }, segments.map((segment) => {
    return (React.createElement("li", { key: segment.label },
        React.createElement("span", { className: cn('label', segment.legendClass) }, `${percentages[segment.label] || 0}% ${segment.label}`)));
})));
export class PieChartCard extends React.Component {
    constructor() {
        super(...arguments);
        this.calculatePercentages = (segments) => {
            const total = segments.reduce((sum, curr) => sum + curr.count, 0);
            const percents = segments.reduce((memo, curr) => {
                memo[curr.label] = Math.round((curr.count / total) * 100);
                return memo;
            }, {});
            return percents;
        };
        this.getBadge = (badgeRanges, percent) => {
            let selectedRange = { percent: 0 };
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
    render() {
        const { title, segments, mainSegment, badgeRanges, hasLegend } = this.props;
        const percentages = this.calculatePercentages(segments);
        const badge = badgeRanges && this.getBadge(badgeRanges, percentages[mainSegment]);
        return (React.createElement(Card, { centered: true, className: "pie-chart-card", badge: badge },
            React.createElement("div", { className: Styles['pie-chart'] },
                React.createElement(PieChart, { segments: segments, percentages: percentages, mainSegment: mainSegment }),
                hasLegend && (React.createElement(PieChartLegend, { segments: segments, percentages: percentages }))),
            title));
    }
}
PieChartCard.defaultProps = {
    hasLegend: true,
};
export default PieChartCard;
