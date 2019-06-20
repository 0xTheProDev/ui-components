import React from 'react';
import cn from '../utilities/classnames';
import Styles from './table-search.module.scss';

export interface ComposableTableSearchProps {
  children: React.ReactNode;
  className?: string;
}

const ComposableTableSearch: React.FC<ComposableTableSearchProps> = ({
  children,
  className,
  ...passThroughProps
}) => {
  return (
    <div
      className={cn(Styles['table-state'], { [`${className}`]: className })}
      {...passThroughProps}
    >
      {children}
    </div>
  );
};

export default ComposableTableSearch;
export { ComposableTableSearch };
