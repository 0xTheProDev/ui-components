import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Icon from '../src/icon';

import SortableTable from '../src/table/sortable-table';

import {
  HeaderCell,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from '../src/table/table';

const stories = storiesOf('Table', module);

const data = [
  {
    name: 'Awesome Wednesday',
    date: 7,
  },
  {
    name: 'Beautiful Thursday',
    date: 8,
  },
  {
    name: 'Celebratory Tuesday',
    date: 6,
  },
  {
    name: 'Delightful Friday',
    date: 9,
  },
  {
    name: 'Excellent Monday',
    date: 5,
  },
];

const column = [
  {
    name: 'Name',
    dataKey: 'name',
  },
  {
    name: 'Date',
    dataKey: 'date',
  },
];

const columnWithSort = [
  {
    name: 'Name',
    dataKey: 'name',
    sort(array: any[], dataKey: string) {
      return array.sort((a, b) => {
        const x = a[dataKey];
        const y = b[dataKey];
        return x < y ? -1 : x > y ? 1 : 0;
      });
    },
  },
  {
    name: 'Date',
    dataKey: 'date',
    sort(array: any[], dataKey: string) {
      return array.sort((a, b) => {
        const x = a[dataKey];
        const y = b[dataKey];
        return x < y ? -1 : x > y ? 1 : 0;
      });
    },
  },
];

interface ColumnData {
  name: string;
  date: string;
}

const RowRenderer = ({ columns }: { columns: ColumnData }) => (
  <TableRow>
    <TableCell>
      <a href="#">{columns.name}</a>
    </TableCell>
    <TableCell>2/{columns.date}/2018</TableCell>
  </TableRow>
);

const ColumnRenderer = ({
  name,
  dataKey,
  onClick,
  sort,
  ascending,
  sortBy,
}: {
  name: any;
  dataKey: string;
  onClick: () => void;
  sort?: () => any[];
  ascending?: boolean;
  sortBy: string;
}) => (
  <HeaderCell
    sortKey={dataKey}
    onClick={onClick}
    ascending={ascending}
    sorted={dataKey === sortBy}
  >
    <Icon type="button" /> {name}
  </HeaderCell>
);

stories.add('Sortable (Defaults)', () => (
  <SortableTable rowData={data} headerData={column} />
));

stories.add('Sortable (Default Render, Custom Sort)', () => (
  <SortableTable rowData={data} headerData={columnWithSort} />
));

stories.add('Sortable (Custom Render)', () => (
  <SortableTable
    rowRenderer={RowRenderer}
    rowData={data}
    headerData={columnWithSort}
    headerRenderer={ColumnRenderer}
  />
));
