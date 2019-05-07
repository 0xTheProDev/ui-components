import cn from 'classnames';
import { get } from 'lodash';
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
        };
    }
    componentDidUpdate(prevProps) {
        const prevValue = get(prevProps, 'value.value', '');
        const currentValue = get(this.props, 'value.value', '');
        // Close the dropdown if the selection was changed or new option was created
        if (this.state.isOpen && prevValue !== currentValue) {
            this.toggleOpen();
        }
    }
    toggleOpen() {
        this.setState((state) => ({
            isOpen: !state.isOpen,
        }));
    }
    render() {
        // Override dropdownIndicator styling when tooltip is present
        let dropdownIndicatorStylesOverride;
        if (this.props.tooltip) {
            dropdownIndicatorStylesOverride = {
                dropdownIndicator: DropdownIndicatorStylesOverride,
            };
        }
        const { isOpen } = this.state;
        return (React.createElement("div", { style: { position: 'relative' } },
            React.createElement(ReactSelect, Object.assign({}, this.props, { components: this.props.components || { DropdownIndicator }, placeholder: this.props.placeholder, menuIsOpen: false, onMenuOpen: () => this.toggleOpen(), styles: Object.assign({}, SelectStyles, this.props.styles, dropdownIndicatorStylesOverride), isDisabled: this.props.disabled })),
            isOpen && (React.createElement("div", { className: cn('input-search-wrap', Styles['input-search-wrap']) },
                React.createElement(ReactSelect, Object.assign({}, this.props, { autoFocus: true, backspaceRemovesValue: false, components: {
                        DropdownIndicator: SearchIcon,
                        IndicatorSeparator: null,
                    }, controlShouldRenderValue: false, hideSelectedOptions: false, isClearable: false, menuIsOpen: true, onChange: this.props.onChange, options: this.props.options, placeholder: "Search...", styles: Object.assign({}, SelectStyles, this.props.styles, dropdownIndicatorStylesOverride), classNamePrefix: "search", tabSelectsValue: false })))),
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
