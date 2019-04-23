import cn from 'classnames';
import React, { Component } from 'react';
import ReactSelect from 'react-select';
import Icon from '../icon';
import { DropdownIndicator, DropdownIndicatorStylesOverride, SelectStyles, } from './index';
import Styles from './select.module.scss';
class SearchableSelect extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            isOpen: false,
            value: this.props.defaultValue || this.props.value || '',
        };
    }
    toggleOpen() {
        this.setState((state) => ({
            isOpen: !state.isOpen,
        }));
    }
    onSelectChange(value) {
        this.toggleOpen();
        this.setState({ value });
        this.props.onChange(value);
    }
    render() {
        // Override dropdownIndicator styling when tooltip is present
        let dropdownIndicatorStylesOverride;
        if (this.props.tooltip) {
            dropdownIndicatorStylesOverride = {
                dropdownIndicator: DropdownIndicatorStylesOverride,
            };
        }
        const { isOpen, value } = this.state;
        return (React.createElement("div", { style: { position: 'relative' } },
            React.createElement(ReactSelect, Object.assign({}, this.props, { value: value, components: this.props.components || { DropdownIndicator }, placeholder: this.props.placeholder, menuIsOpen: false, onMenuOpen: () => this.toggleOpen(), styles: Object.assign({}, SelectStyles, this.props.styles, dropdownIndicatorStylesOverride), isDisabled: this.props.disabled })),
            isOpen && (React.createElement("div", { className: cn('input-search-wrap', Styles['input-search-wrap']) },
                React.createElement(ReactSelect, Object.assign({}, this.props, { autoFocus: true, backspaceRemovesValue: false, components: {
                        DropdownIndicator: SearchIcon,
                        IndicatorSeparator: null,
                    }, controlShouldRenderValue: false, hideSelectedOptions: false, isClearable: false, menuIsOpen: true, onChange: (event) => this.onSelectChange(event), options: this.props.options, placeholder: "Search...", styles: Object.assign({}, SelectStyles, this.props.styles, dropdownIndicatorStylesOverride), classNamePrefix: "search", tabSelectsValue: false })))),
            isOpen && React.createElement(Blanket, { onClick: () => this.toggleOpen() })));
    }
}
const SearchIcon = () => (React.createElement(Icon, { type: "search", className: cn('is-search', Styles['is-search']) }));
const Blanket = props => {
    return (React.createElement("div", Object.assign({ style: {
            bottom: 0,
            left: 0,
            position: 'fixed',
            right: 0,
            top: 0,
            zIndex: 1,
        } }, props)));
};
export default SearchableSelect;
export { SearchableSelect };
