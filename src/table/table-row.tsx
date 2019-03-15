import React from 'react';

export interface TableRowProps {
  children?: React.ReactNode;
  className?: string;
  // Allows us to pass through things like onClick inside this object
  attributes?: React.HTMLAttributes<HTMLTableRowElement>;
}

export const TableRow: React.SFC<TableRowProps> = ({
  children,
  className,
  attributes,
  ...rest
}) => {
  return (
    <tr className={className} {...attributes} {...rest}>
      {children}
    </tr>
  );
};

export default TableRow;
