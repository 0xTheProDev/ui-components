/* tslint:disable:jsx-no-lamda */

import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import values from 'lodash/values';
import React, { Fragment } from 'react';

import FilterableList from '../src/filterable-list';
import { TextInput } from '../src/text-input';

const stories = storiesOf('FilterableList', module);

const renderItems = (items: any[]) => (
  <Fragment>{items.map(item => <Item key={item.title} {...item} />)}</Fragment>
);

interface Item {
  name: string;
  type: string;
}

const mockItems: Item[] = [
  { name: 'Orange', type: 'Fruit' },
  { name: 'Apples', type: 'Fruit' },
  { name: 'Tomato', type: 'Vegetable' },
  { name: 'Cucumber', type: 'Vegetable' },
];

const Item = ({ name, type }: { name: string; type: string }) => (
  <article
    style={{
      border: '1px solid #e9ecef',
      margin: '10px 0',
      padding: '20px',
      width: '100%',
    }}
  >
    {name} ({type})
  </article>
);

stories.add('FilterableList', () => (
  <FilterableList
    title="Filter"
    items={mockItems}
    onChange={action('Filter Input Changed')}
    renderControls={({ value, handleFilterChange }) => {
      return (
        <TextInput
          type="text"
          fullWidth
          label="Name"
          id="name-filter"
          value={value as string}
          onChange={handleFilterChange}
        />
      );
    }}
    renderItems={renderItems}
  />
));

stories.add('FilterableList with Clear Button', () => (
  <FilterableList
    title="Filter"
    items={mockItems}
    onChange={action('Filter Input Changed')}
    showClearButton
    renderControls={({ value, handleFilterChange }) => (
      <TextInput
        type="text"
        fullWidth
        label="Name"
        id="name-filter"
        value={value as string}
        onChange={handleFilterChange}
      />
    )}
    renderItems={renderItems}
  />
));

stories.add(
  'FilterableList with Two Input Fields and Custom Filtering Logic',
  () => (
    <FilterableList
      title="Filter"
      items={mockItems}
      onChange={action('Filter Input Changed')}
      showClearButton
      filterTypes={['name', 'type']}
      onFilter={(items, filters: { [key: string]: string }) => {
        const { name, type } = filters;
        return items.filter(item => {
          if (!item.name.toLowerCase().includes(name.toLowerCase())) {
            return false;
          }
          if (!item.type.toLowerCase().includes(type.toLowerCase())) {
            return false;
          }
          return true;
        });
      }}
      renderControls={({
        name,
        type,
        handleFilterNameChange,
        handleFilterTypeChange,
      }) => (
        <Fragment>
          <TextInput
            type="text"
            fullWidth
            label="Name"
            id="name-filter"
            value={name}
            onChange={handleFilterNameChange}
          />
          <TextInput
            type="text"
            fullWidth
            label="Type"
            id="type-filter"
            value={type}
            onChange={handleFilterTypeChange}
          />
        </Fragment>
      )}
      renderItems={renderItems}
    />
  )
);

stories.add('FilterableList with Clear Button in Header', () => (
  <FilterableList
    title="Filter"
    showClearButton
    clearButtonInHeader
    items={mockItems}
    onChange={action('Filter Input Changed')}
    renderControls={({ value, handleFilterChange }) => (
      <TextInput
        type="text"
        fullWidth
        label="Name"
        id="name-filter"
        value={value as string}
        onChange={handleFilterChange}
      />
    )}
    renderItems={renderItems}
  />
));

stories.add('FilterableList as a Container Component', () => {
  const title = 'Filter Container';
  const items = mockItems;

  const renderControls = ({
    value,
    handleFilterChange,
  }: {
    value: string;
    handleFilterChange: any;
  }) => (
    <TextInput
      type="text"
      fullWidth
      label="Name"
      id="name-filter"
      value={value as string}
      onChange={handleFilterChange}
    />
  );

  const Wrapped = FilterableList.createClass({
    renderControls,
    renderItems,
    title,
  });

  return <Wrapped items={items} />;
});
