import React, { Fragment } from 'react';
import Badge from '../badge';
import cn from '../utilities/classnames';
import Styles from './accordion.module.scss';
export interface AccordionPanelTitleTextProps {
  text: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  badgeColor?: string;
  badgeContent?: string | number;
}
const AccordionPanelTitle: React.SFC<AccordionPanelTitleTextProps> = ({
  text,
  style,
  className,
  badgeColor,
  badgeContent,
  ...attributes
}) => (
  <h2
    className={cn(className, {
      'has-badge': !!badgeContent,
      [Styles['has-badge']]: !!badgeContent,
    })}
    style={style}
    {...attributes}
  >
    {text}
    {badgeContent && <Badge color={badgeColor}>{badgeContent}</Badge>}
  </h2>
);

export default AccordionPanelTitle;
