import React from 'react';
import cn from '../utilities/classnames';
import Styles from './grid.module.scss';

export interface ColumnProps {
  children?: React.ReactNode;
  width?: number;
  offset?: number;
}

export const Column: React.SFC<ColumnProps> = ({ children, width, offset }) => {
  const colClass = width > 0 ? `col-${width}` : '';
  const offsetClass =
    offset > 0 && offset < 12 ? `col-start-${12 - (width || 0) - (offset || 0)}` : '';

  return (
    <div
      className={cn({
        [colClass]: width > 0,
        [Styles[colClass]]: width > 0,
        [offsetClass]: offset > 0,
        [Styles[offsetClass]]: offset > 0,
      })}
    >
      {children}
    </div>
  );
};

export default Column;
