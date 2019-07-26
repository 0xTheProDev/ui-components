import React from 'react';
export interface TableAccordionPanelProps {
    actions: () => React.ReactNode;
    col1Title: string;
    col2Title: string;
    onClick?: (e: any) => void;
    open?: boolean;
}
export declare const TableAccordionPanel: React.SFC<TableAccordionPanelProps & React.HTMLAttributes<HTMLDivElement>>;
export default TableAccordionPanel;
