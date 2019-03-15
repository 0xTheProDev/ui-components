import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Action, ActionsCell } from '../src/actions';
import { DropdownButton } from '../src/dropdown-button';
import { Label } from '../src/label';
import {
  HeaderCell,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from '../src/table/table';

const stories = storiesOf('Table', module);

stories.add('Standard', () => (
  <Table>
    <TableHeader>
      <TableRow data-name={'name1'}>
        <HeaderCell>Contacts</HeaderCell>
        <HeaderCell>Date Added</HeaderCell>
        <HeaderCell>Last Opened</HeaderCell>
        <HeaderCell>Last Clicked</HeaderCell>
        <HeaderCell>Actions</HeaderCell>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow attributes={{ onClick: e => console.log('Clicked this row!') }}>
        <TableCell className="contact">
          <a href="#">todd.moy@sendgrid.com</a>
        </TableCell>
        <TableCell className="stats">02/02/2015</TableCell>
        <TableCell className="stats">02/10/2016</TableCell>
        <TableCell className="stats">02/08/2016</TableCell>
        <ActionsCell>
          <Action
            title="View"
            icon="view"
            onClick={action('View Action Clicked')}
          />
          <Action
            title="Edit"
            icon="pencil"
            onClick={action('Edit Action Clicked')}
          />
          <Action
            title="Copy"
            icon="copy"
            onClick={action('Copy Action Clicked')}
          />
          <Action
            title="Delete"
            icon="trash"
            onClick={action('Delete Action Clicked')}
          />
        </ActionsCell>
      </TableRow>
      <TableRow data-test="someHook">
        <TableCell className="contact">
          <a href="#">eric.tjossem@sendgrid.com</a>
        </TableCell>
        <TableCell className="stats">03/03/2015</TableCell>
        <TableCell className="stats">04/10/2016</TableCell>
        <TableCell className="stats">04/08/2016</TableCell>
        <ActionsCell>
          <Action
            title="View"
            icon="view"
            onClick={action('View Action Clicked')}
          />
          <Action
            title="Edit"
            icon="pencil"
            onClick={action('Edit Action Clicked')}
          />
          <Action
            title="Copy"
            icon="copy"
            onClick={action('Copy Action Clicked')}
          />
          <Action
            title="Delete"
            icon="trash"
            onClick={action('Delete Action Clicked')}
          />
        </ActionsCell>
      </TableRow>
      <TableRow>
        <TableCell className="contact">
          <a href="#">alex.thomsen@sendgrid.com</a>
        </TableCell>
        <TableCell className="stats">05/02/2015</TableCell>
        <TableCell className="stats">06/10/2016</TableCell>
        <TableCell className="stats">07/08/2016</TableCell>
        <ActionsCell>
          <Action
            title="View"
            icon="view"
            onClick={action('View Action Clicked')}
          />
          <Action
            title="Edit"
            icon="pencil"
            onClick={action('Edit Action Clicked')}
          />
          <Action
            title="Copy"
            icon="copy"
            onClick={action('Copy Action Clicked')}
          />
          <Action
            title="Delete"
            icon="trash"
            onClick={action('Delete Action Clicked')}
          />
        </ActionsCell>
      </TableRow>
    </TableBody>
  </Table>
));

stories.add('With dropdown menu', () => (
  <Table>
    <TableHeader>
      <TableRow>
        <HeaderCell className="sort">Status</HeaderCell>
        <HeaderCell className="sort">Campaign name</HeaderCell>
        <HeaderCell className="sort">Delivered</HeaderCell>
        <HeaderCell className="sort">Opens</HeaderCell>
        <HeaderCell className="sort">Clicks</HeaderCell>
        <HeaderCell className="sort">Unsubscribes</HeaderCell>
        <HeaderCell className="actions">
          <DropdownButton gear>
            <a href="javascript: void 0">View stats as numbers</a>
            <a href="javascript: void 0">View stats as percentages</a>
          </DropdownButton>
        </HeaderCell>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell className="cell-label">
          <Label type="draft" text="Draft" />
        </TableCell>
        <TableCell className="campaign-name">
          <a href="javascript: void 0">Fall Into Action</a>
        </TableCell>
        <TableCell className="stats-delivered">—</TableCell>
        <TableCell className="stats-opens">—</TableCell>
        <TableCell className="stats-clicks">—</TableCell>
        <TableCell className="stats-unsubscribes">—</TableCell>
        <ActionsCell>
          <Action title="Edit" icon="pencil" onClick={action('Edit clicked')} />
          <Action
            title="Duplicate"
            icon="copy"
            onClick={action('Duplicate clicked')}
          />
          <Action
            title="Create template"
            icon="create"
            onClick={action('Create template clicked')}
          />
          <Action
            title="Export HTML"
            icon="export"
            onClick={action('Export HTML clicked')}
          />
          <Action
            title="Preview"
            icon="view"
            onClick={action('Preview clicked')}
          />
          <Action
            title="Delete"
            icon="trash"
            onClick={action('Delete clicked')}
          />
        </ActionsCell>
      </TableRow>
    </TableBody>
  </Table>
));
