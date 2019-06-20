import React from 'react';
export interface TableSearchProps {
    children: React.ReactNode;
    className?: string;
    onClearButtonClick: () => void;
}
declare const TableSearch: React.FC<TableSearchProps>;
export default TableSearch;
export { TableSearch };
