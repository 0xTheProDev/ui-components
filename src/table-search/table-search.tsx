import React from 'react';
import Button from '../button';
import cn from '../utilities/classnames';
import Styles from './table-search.module.scss';

export interface TableSearchProps {
  children: React.ReactNode;
  className?: string;
  onClearButtonClick: () => void;
}

const TableSearch: React.FC<TableSearchProps> = ({
  className,
  children,
  onClearButtonClick,
  ...passThroughProps
}) => {
  return (
    <div
      className={cn(Styles['table-state'], Styles['is-search'], {
        [`${className}`]: className,
      })}
      {...passThroughProps}
    >
      <p className={Styles['table-search-text']}>{children}</p>

      <Button type="secondary" onClick={onClearButtonClick} small>
        Clear
      </Button>
    </div>
  );
};

export default TableSearch;
export { TableSearch };
