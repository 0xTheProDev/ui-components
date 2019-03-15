import React from 'react';
export interface TableRowProps {
    children?: React.ReactNode;
    className?: string;
    attributes?: React.HTMLAttributes<HTMLTableRowElement>;
}
export declare const TableRow: React.SFC<TableRowProps>;
export default TableRow;
