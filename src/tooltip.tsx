import React from 'react';
import Styles from './styles/tooltip.module.scss';
import cn from './utilities/classnames';

export type TooltipDirection = 'up' | 'down' | 'left' | 'right';

export type TooltipLength = 'small' | 'medium' | 'large' | 'xlarge';

export interface TooltipProps {
  content?: string | React.ReactElement<any>;
  direction?: TooltipDirection;
  length?: TooltipLength;
  className?: string;
  children?: React.ReactElement<any>;
  hoverTarget?: React.ReactElement<any>;
}

export const Tooltip: React.SFC<TooltipProps> = ({
  content,
  direction,
  length,
  className,
  children,
  hoverTarget,
  ...attributes
}) => {
  return typeof content === 'string' ? (
    <span
      className={className}
      data-tooltip={content}
      data-tooltip-pos={direction}
      data-tooltip-length={length}
      {...attributes}
    >
      {children || hoverTarget}
    </span>
  ) : (
    <HTMLTooltip
      style={{ display: 'inline-block' }}
      direction={
        direction === 'left' || direction === 'right' ? direction : null
      }
      length={length}
      className={className}
      hoverTarget={hoverTarget}
    >
      {content}
    </HTMLTooltip>
  );
};

Tooltip.defaultProps = {
  direction: 'up',
};

export interface HTMLTooltipProps {
  direction?: TooltipDirection;
  length?: TooltipLength;
  className?: string;
  children?: React.ReactElement<any>;
  hoverTarget?: React.ReactElement<any>;
  debounce?: number;
  style?: object;
}

export interface HTMLTooltipState {
  hovered: boolean;
  tooltipHeight: number;
  tooltipWidth: number;
  opened: boolean;
}

export class HTMLTooltip extends React.Component<
  HTMLTooltipProps,
  HTMLTooltipState
> {
  public static defaultProps = {
    className: '',
    debounce: 1000,
    direction: 'right',
  };

  public state = {
    hovered: false,
    opened: false,
    tooltipHeight: 0,
    tooltipWidth: 0,
  };

  private tooltipRef: HTMLDivElement;

  public shouldComponentUpdate(nextProps?: any, nextState?: any) {
    if (
      nextProps.hoverTarget === this.props.hoverTarget &&
      this.state.opened === nextState.opened
    ) {
      return false;
    }
    return true;
  }

  public handleHoverIn = () => {
    this.setState({
      hovered: true,
      opened: true,
      tooltipHeight: this.tooltipRef.offsetHeight,
      tooltipWidth: this.tooltipRef.clientWidth,
    });
  };

  public handleHoverOut = () => {
    this.setState({ hovered: false });
    setTimeout(() => {
      if (!this.state.hovered) {
        this.setState({ opened: false });
      }
    }, this.props.debounce);
  };

  public render() {
    const {
      direction,
      className,
      children,
      hoverTarget,
      debounce,
      style,
      ...attributes
    } = this.props;

    return (
      <div
        className="html-tooltip"
        style={{ position: 'relative', ...style }}
        {...attributes}
      >
        <div
          className={cn('tooltip-js-parent', Styles['tooltip-js-parent'])}
          onMouseEnter={this.handleHoverIn}
          onMouseLeave={this.handleHoverOut}
        >
          {hoverTarget}
        </div>
        <div
          className={cn(
            'tooltip-js-content',
            Styles['tooltip-js-content'],
            className,
            {
              [Styles['is-down']]: direction === 'down',
              'is-down': direction === 'down',
              [Styles['is-left']]: direction === 'left',
              'is-left': direction === 'left',
              [Styles['is-up']]: direction === 'up',
              'is-up': direction === 'up',
              [Styles['is-visible']]: this.state.opened,
              'is-visible': this.state.opened,
            }
          )}
          style={this.styleForTooltipContent(direction)}
          data-tooltip-length={this.props.length}
          ref={input => {
            this.tooltipRef = input;
          }}
          onMouseEnter={this.handleHoverIn}
          onMouseLeave={this.handleHoverOut}
        >
          {children}
        </div>
      </div>
    );
  }

  /**
   * determines vertical & horizontal positioning for the tooltip content.
   * NOTE: this does NOT determine positioning for the ::after pseudoelement, i.e. the caret/arrow of the tooltip
   *
   * 'tooltip-js-content' always exists in the DOM for each tooltip. It's displayed/hidden via CSS opacity.
   * This is because we want the tooltip content to animate in when a user triggers it.
   * We move the tooltip content well off the screen, because we don't want it to block users' interactions
   * with other elements on the page. If we didn't do this,
   * a user could trigger a tooltip by hovering over its invisible content.
   *
   * @param direction TooltipDirection - which direction the tooltip will display
   * @returns React.CSSProperties
   */
  private styleForTooltipContent = (
    direction: TooltipDirection
  ): React.CSSProperties => {
    const { opened: isVisible, tooltipHeight, tooltipWidth } = this.state;

    const hiddenTooltipStyles = { left: -10000 };
    let styles;

    switch (direction) {
      case 'left': {
        styles = { top: -(tooltipHeight / 2) + 8, right: 17, left: 'auto' };

        return isVisible ? styles : { ...styles, ...hiddenTooltipStyles };
      }

      case 'right': {
        styles = { top: -(tooltipHeight / 2) + 8, left: '100%' };

        return isVisible ? styles : { ...styles, ...hiddenTooltipStyles };
      }

      case 'up': {
        styles = { top: -tooltipHeight - 5 };

        return isVisible
          ? { ...styles, left: -tooltipWidth / 2 }
          : { ...styles, ...hiddenTooltipStyles };
      }

      case 'down': {
        styles = { top: 21 };
        return isVisible
          ? { ...styles, left: -tooltipWidth / 2 }
          : { ...styles, ...hiddenTooltipStyles };
      }
    }
  };
}

export default Tooltip;
