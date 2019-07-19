import React from 'react';
import { AccordionPanel, AccordionPanelDescription, AccordionPanelIcon, AccordionPanelSFC, AccordionPanelTitle } from './accordion-panel';
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
export declare const Accordion: React.SFC<AccordionProps>;
export default Accordion;
export { AccordionPanel, AccordionPanelSFC, AccordionPanelDescription, AccordionPanelIcon, AccordionPanelTitle, TableAccordion, TableAccordionPanel, };
