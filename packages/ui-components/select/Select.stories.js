import { storiesOf } from '@storybook/react';
import React from 'react';
import ReactSelect, { components } from 'react-select';
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
stories.add('Standard', () => (React.createElement("div", { className: "input-select-wrap" },
    React.createElement(Select, { defaultValue: feels[1], name: "single", options: feels }))));
stories.add('Standard open', () => (React.createElement("div", { className: "input-select-wrap" },
    React.createElement(Select, { options: feels, placeholder: "Goobers", menuIsOpen: true }))));
stories.add('With placeholder', () => (React.createElement("div", { className: "input-select-wrap" },
    React.createElement(Select, { options: feels, placeholder: "Goobers" }))));
stories.add('With tooltip', () => (React.createElement("div", { className: "input-select-wrap" },
    React.createElement(Select, { options: feels, placeholder: "Goobers", tooltip: "Great stuff!", tooltipDirection: "left" }))));
stories.add('With long tooltip', () => (React.createElement("div", { className: "input-select-wrap" },
    React.createElement(Select, { options: feels, placeholder: "Goobers", tooltip: "This tooltip has a lot of words, but that's okay because it should wrap. Don't be afraid to be descriptive using this select tooltip!", tooltipDirection: "left", tooltipLength: "large" }))));
stories.add('Disabled', () => (React.createElement("div", { className: "input-select-wrap is-disabled" },
    React.createElement(Select, { defaultValue: feels[7], disabled: true, options: feels }))));
stories.add('Disabled with tooltip', () => (React.createElement("div", { className: "input-select-wrap" },
    React.createElement(Select, { disabled: true, options: feels, placeholder: "Goobers", tooltip: "Still works!", tooltipDirection: "left" }))));
stories.add('Searchable', () => (React.createElement("div", { className: "input-select-wrap" },
    React.createElement(Select, { defaultValue: feels[1], isSearchable: true, options: feels }))));
stories.add('Multi select - no values', () => (React.createElement("div", { className: "input-select-wrap" },
    React.createElement(Select, { isSearchable: true, isMulti: true, options: powerups }))));
stories.add('Multi select', () => (React.createElement("div", { className: "input-select-wrap" },
    React.createElement(Select, { defaultValue: [powerups[0], powerups[1]], isSearchable: true, isMulti: true, options: powerups }))));
stories.add('Multi select - open', () => (React.createElement("div", { className: "input-select-wrap" },
    React.createElement(Select, { defaultValue: [powerups[0], powerups[1]], isSearchable: true, isMulti: true, menuIsOpen: true, options: powerups }))));
stories.add('Option groups', () => (React.createElement("div", { className: "input-select-wrap" },
    React.createElement(Select, { name: "groups", placeholder: "Feels vs. Powerups", options: [
            { label: 'Feels', options: feels },
            { label: 'Powerups', options: powerups },
        ] }))));
stories.add('Option groups - open', () => (React.createElement("div", { className: "input-select-wrap" },
    React.createElement(Select, { name: "groups", placeholder: "Feels vs. Powerups", menuIsOpen: true, options: [
            { label: 'Feels', options: feels },
            { label: 'Powerups', options: powerups },
        ] }))));
// This is just to illustrate 2 diff ways to add custom styles.
// the styles={customStyles} way is strongly preferred.
stories.add('Custom classnames and styles', () => {
    const Control = (props) => (React.createElement("div", { className: "my-control-wrapper" },
        React.createElement("p", null, "My amazing select!"),
        React.createElement(components.Control, Object.assign({}, props))));
    // this is the preferred way to style react-select
    const customStyles = {
        option: (base) => (Object.assign({}, base, { borderBottom: '1px dotted pink', cursor: 'pointer' })),
    };
    return (React.createElement("div", null,
        React.createElement("style", null,
            `
        .my-control-wrapper {
          background: #927;
          color: #eee;
          padding: 1em;
        }
      `,
            "f"),
        React.createElement(ReactSelect, { components: { Control }, options: powerups, styles: customStyles })));
});
const labelStories = storiesOf('Select/Label + Info', module);
labelStories.add('error', () => (React.createElement(React.Fragment, null,
    React.createElement(Select, { label: 'Powerups', options: powerups, error: true, info: `it's a trap` }))));
labelStories.add('disabled', () => (React.createElement(React.Fragment, null,
    React.createElement(Select, { label: 'Powerups', options: powerups, disabled: true, info: `it's a trap` }))));
labelStories.add('disabled - defaultValue', () => (React.createElement(React.Fragment, null,
    React.createElement(Select, { label: 'Powerups', defaultValue: powerups[0], options: powerups, disabled: true, info: `it's a trap` }))));
labelStories.add('disabled - defaultValue - multi select', () => (React.createElement(React.Fragment, null,
    React.createElement(Select, { label: 'Powerups', defaultValue: powerups[0], options: powerups, disabled: true, isMulti: true, info: `it's a trap` }))));
labelStories.add('disabled + error', () => (React.createElement(React.Fragment, null,
    React.createElement(Select, { label: 'Powerups', options: powerups, disabled: true, error: true, info: `it's a trap` }))));
labelStories.add('label', () => (React.createElement(React.Fragment, null,
    React.createElement(Select, { label: 'Powerups', options: powerups, disabled: true }))));
labelStories.add('label - required', () => (React.createElement(React.Fragment, null,
    React.createElement(Select, { label: 'Powerups', options: powerups, required: true, info: `it's a trap` }))));
labelStories.add('info', () => (React.createElement(Select, { options: powerups, info: 'Read this to better understand the dropdown.' })));
export class CreateableTextInput extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            inputValue: '',
            value: [powerups[0], powerups[1], { label: 'row', value: 'row' }],
        };
        this.handleKeyDown = (event) => {
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
        this.handleInputChange = (inputValue) => {
            this.setState({ inputValue });
        };
        this.handleChange = (value) => {
            this.setState({ value, inputValue: '' });
        };
    }
    render() {
        return (React.createElement(Createable, Object.assign({}, this.props, { inputValue: this.state.inputValue, value: this.state.value, onChange: this.handleChange, onInputChange: this.handleInputChange, onKeyDown: this.handleKeyDown })));
    }
}
const createableStories = storiesOf('Select/Createable', module);
createableStories.add('Createable', () => (React.createElement("div", { className: "input-select-wrap" },
    React.createElement(CreateableTextInput, { isMulti: true, isClearable: true, options: powerups }))));
createableStories.add('Multi-select text input', () => (React.createElement("div", { className: "input-select-wrap" },
    React.createElement(CreateableTextInput, { components: { DropdownIndicator: null }, isMulti: true, menuIsOpen: false }))));
createableStories.add('Tagging', () => (React.createElement("div", { className: "input-select-wrap" },
    React.createElement(Createable, { isMulti: true, options: powerups, value: [powerups[0], powerups[1], { label: 'row', value: 'row' }] }))));
createableStories.add('Tagging - open', () => (React.createElement("div", { className: "input-select-wrap" },
    React.createElement(Createable, { isMulti: true, options: powerups, value: [powerups[0], powerups[1], { label: 'row', value: 'row' }], menuIsOpen: true }))));
createableStories.add('Tagging - tooltip', () => (React.createElement("div", { className: "input-select-wrap" },
    React.createElement(Createable, { isMulti: true, options: powerups, value: [powerups[0], powerups[1], { label: 'row', value: 'row' }], tooltip: "Much Power", tooltipDirection: "down" }))));
const asyncSelectStories = storiesOf('Select/AsyncSelect', module);
const filterPowerups = (inputValue) => {
    return powerups.filter(i => i.label.toLowerCase().includes(inputValue.toLowerCase()));
};
const promiseOptions = (inputValue) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(filterPowerups(inputValue));
    }, 1000);
});
asyncSelectStories.add('Single select', () => (React.createElement("div", { className: "input-select-wrap" },
    React.createElement(AsyncSelect, { loadOptions: promiseOptions }))));
asyncSelectStories.add('Single select with default options', () => (React.createElement("div", { className: "input-select-wrap" },
    React.createElement(AsyncSelect, { defaultOptions: powerups, loadOptions: promiseOptions }))));
asyncSelectStories.add('Single select with custom no options and loading messages', () => (React.createElement("div", { className: "input-select-wrap" },
    React.createElement(AsyncSelect, { defaultOptions: powerups, loadOptions: promiseOptions, loadingMessage: () => 'Some custom loading message...', noOptionsMessage: () => 'Some custom no options message...' }))));
asyncSelectStories.add('Multi select', () => (React.createElement("div", { className: "input-select-wrap" },
    React.createElement(AsyncSelect, { isMulti: true, loadOptions: promiseOptions }))));
asyncSelectStories.add('Multi select with default and cache options', () => (React.createElement("div", { className: "input-select-wrap" },
    React.createElement(AsyncSelect, { isMulti: true, defaultOptions: powerups, cacheOptions: true, loadOptions: promiseOptions }))));
