import { storiesOf } from '@storybook/react';
import React from 'react';
import ReactSelect, { components } from 'react-select';
import { Props as SelectProps } from 'react-select/lib/Select';
import Select, { AsyncSelect, Createable } from '.';
import './select.module.scss';

const stories = storiesOf('Select', module);

const feels = [
  { label: 'Double plus ungood', value: 'dbl_plus-un' },
  { label: 'Good', value: 'sys_good_01' },
  { label: 'Great', value: 'sys_great_id' },
  { label: 'Grand', value: 'grand' },
  { label: 'Fantastic', value: 'fantastic' },
  { label: 'Superb', value: 'superb' },
  { label: 'Stupendous', value: 'stupendous' },
  { label: 'Extraordinary', value: 'plvs_extra' },
];

const powerups = [
  { label: 'Mushroom', value: 'mushroom' },
  { label: 'Fire flower', value: 'fire-flower' },
  { label: 'Star', value: 'star' },
  { label: 'Feather', value: 'feather' },
  { label: 'Frog', value: 'frog' },
  { label: 'Tanooki', value: 'tanooki' },
  { label: '1-up', value: '1up' },
];

stories.add('Standard', () => (
  <div className="input-select-wrap">
    <Select defaultValue={feels[1]} name="single" options={feels} />
  </div>
));

stories.add('Standard open', () => (
  <div className="input-select-wrap">
    <Select options={feels} placeholder="Goobers" menuIsOpen />
  </div>
));

stories.add('With placeholder', () => (
  <div className="input-select-wrap">
    <Select options={feels} placeholder="Goobers" />
  </div>
));

stories.add('With tooltip', () => (
  <div className="input-select-wrap">
    <Select
      options={feels}
      placeholder="Goobers"
      tooltip="Great stuff!"
      tooltipDirection="left"
    />
  </div>
));

stories.add('With long tooltip', () => (
  <div className="input-select-wrap">
    <Select
      options={feels}
      placeholder="Goobers"
      tooltip="This tooltip has a lot of words, but that's okay because it should wrap. Don't be afraid to be descriptive using this select tooltip!"
      tooltipDirection="left"
      tooltipLength="large"
    />
  </div>
));

stories.add('With HTML tooltip', () => (
  <div className="input-select-wrap">
    <Select
      options={feels}
      placeholder="Goobers"
      tooltip={
        <p>
          The <a href="#">CCV number</a> is a 3 or 4 digit security code printed
          on the front or back of your card.
        </p>
      }
      tooltipDirection="left"
      tooltipLength="large"
    />
  </div>
));

stories.add('Disabled', () => (
  <div className="input-select-wrap is-disabled">
    <Select defaultValue={feels[7]} disabled options={feels} />
  </div>
));

stories.add('Disabled with tooltip', () => (
  <div className="input-select-wrap">
    <Select
      disabled
      options={feels}
      placeholder="Goobers"
      tooltip="Still works!"
      tooltipDirection="left"
    />
  </div>
));

stories.add('Searchable', () => (
  <div className="input-select-wrap">
    <Select defaultValue={feels[1]} isSearchable options={feels} />
  </div>
));

stories.add('Multi select - no values', () => (
  <div className="input-select-wrap">
    <Select isSearchable isMulti options={powerups} />
  </div>
));

stories.add('Multi select', () => (
  <div className="input-select-wrap">
    <Select
      defaultValue={[powerups[0], powerups[1]]}
      isSearchable
      isMulti
      options={powerups}
    />
  </div>
));

stories.add('Multi select - open', () => (
  <div className="input-select-wrap">
    <Select
      defaultValue={[powerups[0], powerups[1]]}
      isSearchable
      isMulti
      menuIsOpen
      options={powerups}
    />
  </div>
));

stories.add('Option groups', () => (
  <div className="input-select-wrap">
    <Select
      name="groups"
      placeholder="Feels vs. Powerups"
      options={[
        { label: 'Feels', options: feels },
        { label: 'Powerups', options: powerups },
      ]}
    />
  </div>
));

stories.add('Option groups - open', () => (
  <div className="input-select-wrap">
    <Select
      name="groups"
      placeholder="Feels vs. Powerups"
      menuIsOpen
      options={[
        { label: 'Feels', options: feels },
        { label: 'Powerups', options: powerups },
      ]}
    />
  </div>
));

// This is just to illustrate 2 diff ways to add custom styles.
// the styles={customStyles} way is strongly preferred.
stories.add('Custom classnames and styles', () => {
  const Control = (props: any) => (
    <div className="my-control-wrapper">
      <p>My amazing select!</p>
      <components.Control {...props} />
    </div>
  );

  // this is the preferred way to style react-select
  const customStyles = {
    option: (base: any) => ({
      ...base,
      borderBottom: '1px dotted pink',
      cursor: 'pointer',
    }),
  };

  return (
    <div>
      {/* i know this looks weird, but this is just to illustrate styling by classnames */}
      <style>
        {`
        .my-control-wrapper {
          background: #927;
          color: #eee;
          padding: 1em;
        }
      `}f
      </style>
      <ReactSelect
        components={{ Control }}
        options={powerups}
        styles={customStyles}
      />
    </div>
  );
});

const labelStories = storiesOf('Select/Label + Info', module);

labelStories.add('error', () => (
  <React.Fragment>
    <Select label={'Powerups'} options={powerups} error info={`it's a trap`} />
  </React.Fragment>
));
labelStories.add('disabled', () => (
  <React.Fragment>
    <Select
      label={'Powerups'}
      options={powerups}
      disabled
      info={`it's a trap`}
    />
  </React.Fragment>
));
labelStories.add('disabled - defaultValue', () => (
  <React.Fragment>
    <Select
      label={'Powerups'}
      defaultValue={powerups[0]}
      options={powerups}
      disabled
      info={`it's a trap`}
    />
  </React.Fragment>
));
labelStories.add('disabled - defaultValue - multi select', () => (
  <React.Fragment>
    <Select
      label={'Powerups'}
      defaultValue={powerups[0]}
      options={powerups}
      disabled
      isMulti
      info={`it's a trap`}
    />
  </React.Fragment>
));
labelStories.add('disabled + error', () => (
  <React.Fragment>
    <Select
      label={'Powerups'}
      options={powerups}
      disabled
      error
      info={`it's a trap`}
    />
  </React.Fragment>
));

labelStories.add('label', () => (
  <React.Fragment>
    <Select label={'Powerups'} options={powerups} disabled />
  </React.Fragment>
));
labelStories.add('label - required', () => (
  <React.Fragment>
    <Select
      label={'Powerups'}
      options={powerups}
      required
      info={`it's a trap`}
    />
  </React.Fragment>
));

labelStories.add('info', () => (
  <Select
    options={powerups}
    info={'Read this to better understand the dropdown.'}
  />
));

export interface FieldState {
  value: Array<{ label: string; value: string }>;
  inputValue: string;
}
export class CreateableTextInput extends React.Component<SelectProps<any>> {
  public readonly state: FieldState = {
    inputValue: '',
    value: [powerups[0], powerups[1], { label: 'row', value: 'row' }],
  };

  public render() {
    return (
      <Createable
        {...this.props}
        inputValue={this.state.inputValue}
        value={this.state.value}
        onChange={this.handleChange}
        onInputChange={this.handleInputChange}
        onKeyDown={this.handleKeyDown}
      />
    );
  }

  private handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    const { value, inputValue } = this.state;

    if (!inputValue) {
      return;
    }

    switch (event.key) {
      case 'Enter':
      case 'Tab':
        this.setState({
          inputValue: '',
          value: [...value, { value: inputValue, label: inputValue }],
        });
        event.preventDefault();
    }
  };

  private handleInputChange = (inputValue: string) => {
    this.setState({ inputValue });
  };

  private handleChange = (value: Array<{ label: string; value: string }>) => {
    this.setState({ value, inputValue: '' });
  };
}

const createableStories = storiesOf('Select/Createable', module);

createableStories.add('Createable', () => (
  <div className="input-select-wrap">
    <CreateableTextInput isMulti isClearable options={powerups} />
  </div>
));

createableStories.add('Multi-select text input', () => (
  <div className="input-select-wrap">
    <CreateableTextInput
      components={{ DropdownIndicator: null }}
      isMulti
      menuIsOpen={false}
    />
  </div>
));

createableStories.add('Tagging', () => (
  <div className="input-select-wrap">
    <Createable
      isMulti
      options={powerups}
      value={[powerups[0], powerups[1], { label: 'row', value: 'row' }]}
    />
  </div>
));

createableStories.add('Tagging - open', () => (
  <div className="input-select-wrap">
    <Createable
      isMulti
      options={powerups}
      value={[powerups[0], powerups[1], { label: 'row', value: 'row' }]}
      menuIsOpen
    />
  </div>
));

createableStories.add('Tagging - tooltip', () => (
  <div className="input-select-wrap">
    <Createable
      isMulti
      options={powerups}
      value={[powerups[0], powerups[1], { label: 'row', value: 'row' }]}
      tooltip="Much Power"
      tooltipDirection="down"
    />
  </div>
));

const asyncSelectStories = storiesOf('Select/AsyncSelect', module);

const filterPowerups = (inputValue: string) => {
  return powerups.filter(i =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const promiseOptions = (inputValue: string) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(filterPowerups(inputValue));
    }, 1000);
  });

asyncSelectStories.add('Single select', () => (
  <div className="input-select-wrap">
    <AsyncSelect loadOptions={promiseOptions} />
  </div>
));
asyncSelectStories.add('Single select with default options', () => (
  <div className="input-select-wrap">
    <AsyncSelect defaultOptions={powerups} loadOptions={promiseOptions} />
  </div>
));
asyncSelectStories.add(
  'Single select with custom no options and loading messages',
  () => (
    <div className="input-select-wrap">
      <AsyncSelect
        defaultOptions={powerups}
        loadOptions={promiseOptions}
        loadingMessage={() => 'Some custom loading message...'}
        noOptionsMessage={() => 'Some custom no options message...'}
      />
    </div>
  )
);

asyncSelectStories.add('Multi select', () => (
  <div className="input-select-wrap">
    <AsyncSelect isMulti loadOptions={promiseOptions} />
  </div>
));
asyncSelectStories.add('Multi select with default and cache options', () => (
  <div className="input-select-wrap">
    <AsyncSelect
      isMulti
      defaultOptions={powerups}
      cacheOptions
      loadOptions={promiseOptions}
    />
  </div>
));
