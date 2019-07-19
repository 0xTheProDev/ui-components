import React, { ReactNode } from 'react';
import cn from '../utilities/classnames';
import Styles from './accordion.module.scss';

import {
  AccordionPanel,
  AccordionPanelDescription,
  AccordionPanelIcon,
  AccordionPanelSFC,
  AccordionPanelTitle,
} from './accordion-panel';

import TableAccordion from './table-accordion';
import TableAccordionPanel from './table-accordion-panel';

export interface AccordionProps {
  caretLeft?: boolean;
  className?: string;
  editor?: boolean;
  large?: boolean;
  list?: boolean;
  templates?: boolean;
}

export const Accordion: React.SFC<AccordionProps> = ({
  caretLeft,
  children,
  className,
  editor,
  large,
  list,
  templates,
}) => {
  return (
    <div
      className={cn(
        'accordion-wrapper',
        Styles['accordion-wrapper'],
        className,
        {
          [Styles['accordion-caret-left']]: caretLeft,
          'accordion-caret-left': caretLeft,
          [Styles['accordion-large']]: large,
          'accordion-large': large,
          [Styles['accordion-list']]: list,
          'accordion-list': list,
          [Styles['is-editor']]: editor,
          'is-editor': editor,
          [Styles['is-templates']]: templates,
          'is-templates': templates,
        }
      )}
    >
      {children}
    </div>
  );
};

export default Accordion;
export {
  AccordionPanel,
  AccordionPanelSFC,
  AccordionPanelDescription,
  AccordionPanelIcon,
  AccordionPanelTitle,
  TableAccordion,
  TableAccordionPanel,
};
