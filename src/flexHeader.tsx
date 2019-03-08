import React, { Component } from 'react';
import Counter from './counter';
import { Icon } from './icon';

import Styles from './styles/flex-header.module.scss';
import { HTMLTooltip, Tooltip, TooltipLength } from './tooltip';
import { IconType } from './types/icons';
import cn from './utilities/classnames';

export interface FlexHeaderProps {
  className?: string;
  creditsCount?: string;
  headerActions?: React.ReactNode;
  headerTabs?: React.ReactNode;
  title: string;
  tooltipText?: string;
  tooltipLength?: TooltipLength;
  onClose?: (event: any) => void;
  iconType?: 'x' | 'mc-return';
}

export class FlexHeader extends Component<FlexHeaderProps> {
  public render() {
    const {
      className,
      creditsCount,
      onClose,
      headerActions,
      headerTabs,
      title,
      tooltipText,
      tooltipLength: tooltipSize,
      iconType = 'x',
      ...attributes
    } = this.props;

    return (
      <header
        className={cn(Styles['flex-header'], 'flex-header', {
          [className]: !!className,
        })}
      >
        <div>
          {onClose && (
            <a
              className={cn(Styles['flex-header-action'], 'flex-header-action')}
              onClick={onClose}
            >
              <Icon type={iconType} />
            </a>
          )}
          <div className={cn(Styles['flex-header-title'], 'flex-header-title')}>
            <h3>
              {title}
              {typeof tooltipText === 'string' ? (
                <Tooltip
                  content={tooltipText}
                  length={tooltipSize}
                  direction="down"
                >
                  <Icon type="info-circle" />
                </Tooltip>
              ) : (
                tooltipText && (
                  <HTMLTooltip
                    style={{ display: 'inline-block' }}
                    direction="right"
                    length={tooltipSize}
                    hoverTarget={<Icon type="info-circle" />}
                  >
                    {tooltipText}
                  </HTMLTooltip>
                )
              )}
            </h3>
          </div>
          {headerTabs}
        </div>
        <div className={cn(Styles['flex-header-right'], 'flex-header-right')}>
          {typeof creditsCount !== 'undefined' ? (
            <Counter text="Credits" count={creditsCount} />
          ) : (
            ''
          )}
          {headerActions}
        </div>
      </header>
    );
  }
}

export default FlexHeader;

export const FlexHeaderTabs: React.SFC<{}> = props => {
  return (
    <div className={cn(Styles['flex-header-tabs'], 'flex-header-tabs')}>
      {props.children}
    </div>
  );
};

export interface FlexHeaderTabProps {
  iconType?: IconType;
  isActive?: boolean;
  text: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}
export const FlexHeaderTab: React.SFC<FlexHeaderTabProps> = props => {
  return (
    <div
      onClick={props.onClick}
      className={cn(Styles['flex-header-tab'], 'flex-header-tab', {
        [Styles['is-active']]: !!props.isActive,
      })}
    >
      {props.iconType && <Icon type={props.iconType} />}
      {props.text}
    </div>
  );
};
