import React, { Fragment } from 'react';
import cn from '../utilities/classnames';

import { Actions } from '../actions';
import AccordionPanel from './accordion-panel';
import Styles from './accordion.module.scss';

export interface TableAccordionPanelProps {
  actions: () => React.ReactNode;
  col1Title: string;
  col2Title: string;
  onClick?: (e: any) => void;
  open?: boolean;
}

export const TableAccordionPanel: React.SFC<
  TableAccordionPanelProps & React.HTMLAttributes<HTMLDivElement>
> = ({
  actions,
  children,
  col1Title,
  col2Title,
  onClick,
  open,
  ...attributes
}) => {
  const action = actions();

  return (
    <div
      className={cn('table-accordion-panel', Styles['table-accordion-panel'])}
    >
      <AccordionPanel
        onClick={onClick}
        open={open}
        title={
          <Fragment>
            <h3>{col1Title}</h3>
            <p className={cn('date', Styles.date)}>{col2Title}</p>
            {action ? (
              <div onClick={e => e.stopPropagation()}>
                <Actions className={Styles.actions} vertical>
                  {action}
                </Actions>
              </div>
            ) : (
              <span />
            )}
          </Fragment>
        }
        {...attributes}
      >
        {children}
      </AccordionPanel>
    </div>
  );
};

export default TableAccordionPanel;
