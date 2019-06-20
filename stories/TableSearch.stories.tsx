import React from 'react';
import { storiesOf } from '@storybook/react';

import { TableSearch } from '../src/table-search/table-search';
import { ComposableTableSearch } from '../src/table-search/composable-table-search';

storiesOf('Table Search', module)
  .add('Default (with clear button and children)', () => (
    <TableSearch
      className="some-table-search-class"
      onClearButtonClick={() => console.log('Clear button clicked!')}
    >
      Displaying results for: <strong>alfred.lucero</strong>
    </TableSearch>
  ))
  .add('Composable Table Search (accepts children)', () => (
    <ComposableTableSearch className="some-composable-table-search-class">
      <p>Adding my own shtuff inside!</p>
    </ComposableTableSearch>
  ));
