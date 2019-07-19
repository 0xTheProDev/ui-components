import cn from 'classnames';
import React from 'react';

import Styles from './accordion.module.scss';
import Accordion from './index';

export interface TableAccordionProps {
  children: React.ReactNode;
  className?: string;
  col1Header: string;
  col2Header: string;
}

export const TableAccordion: React.SFC<
  TableAccordionProps & React.HTMLAttributes<HTMLDivElement>
> = ({ children, className, col1Header, col2Header, ...attributes }) => {
  return (
    <div className={cn('table-accordion', className)} {...attributes}>
      <header className={Styles['accordion-header']}>
        <p>{col1Header}</p>
        <p>{col2Header}</p>
      </header>
      <Accordion caretLeft templates>
        {children}
      </Accordion>
    </div>
  );
};

export default TableAccordion;
