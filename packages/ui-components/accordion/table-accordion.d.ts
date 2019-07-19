import React from 'react';
export interface TableAccordionProps {
    children: React.ReactNode;
    className?: string;
    col1Header: string;
    col2Header: string;
}
export declare const TableAccordion: React.SFC<TableAccordionProps & React.HTMLAttributes<HTMLDivElement>>;
export default TableAccordion;
