import cn from 'classnames';
import { get, noop } from 'lodash';
import React, { Component } from 'react';
import ReactSelect from 'react-select';
import Icon from '../icon';
import {
  DropdownIndicator,
  DropdownIndicatorStylesOverride,
  SelectStyles,
} from './index';
import Styles from './select.module.scss';

export interface SearchableSelectState {
  isOpen: boolean;
}

class SearchableSelect extends Component<any> {
  public state = {
    isOpen: false,
  };

  public componentDidUpdate(prevProps: any) {
    const prevValue = get(prevProps, 'value.value', '');
    const currentValue = get(this.props, 'value.value', '');
    // Close the dropdown if the selection was changed or new option was created
    if (this.state.isOpen && prevValue !== currentValue) {
      this.toggleOpen();
    }
  }

  public toggleOpen() {
    this.setState((state: SearchableSelectState) => ({
      isOpen: !state.isOpen,
    }));
  }

  public onSelectChange(selectedOption: any) {
    const onChange = get(this.props, 'onChange', noop);
    const value = get(this.props, 'value.value', '');

    onChange(selectedOption);

    // Force the modal to close when selected value was clicked
    if (selectedOption.value === value) {
      this.toggleOpen();
    }
  }

  public render() {
    // Override dropdownIndicator styling when tooltip is present
    let dropdownIndicatorStylesOverride;
    if (this.props.tooltip) {
      dropdownIndicatorStylesOverride = {
        dropdownIndicator: DropdownIndicatorStylesOverride,
      };
    }

    const { isOpen } = this.state;

    return (
      <div style={{ position: 'relative' }}>
        {
          <ReactSelect
            {...this.props}
            components={this.props.components || { DropdownIndicator }}
            placeholder={this.props.placeholder}
            menuIsOpen={false}
            onMenuOpen={() => this.toggleOpen()}
            styles={{
              ...SelectStyles,
              ...this.props.styles,
              ...dropdownIndicatorStylesOverride,
            }}
            isDisabled={this.props.disabled}
          />
        }
        {isOpen && (
          <div className={cn('input-search-wrap', Styles['input-search-wrap'])}>
            <ReactSelect
              {...this.props}
              autoFocus
              backspaceRemovesValue={false}
              components={{
                DropdownIndicator: SearchIcon,
                IndicatorSeparator: null,
              }}
              controlShouldRenderValue={false}
              hideSelectedOptions={false}
              isClearable={false}
              menuIsOpen
              onChange={(value: any) => this.onSelectChange(value)}
              options={this.props.options}
              placeholder="Search..."
              styles={{
                ...SelectStyles,
                ...this.props.styles,
                ...dropdownIndicatorStylesOverride,
              }}
              classNamePrefix="search"
              tabSelectsValue={false}
            />
          </div>
        )}
        {isOpen && <Blanket onClick={() => this.toggleOpen()} />}
      </div>
    );
  }
}

const SearchIcon = () => (
  <Icon type="search" className={cn('is-search', Styles['is-search'])} />
);

const Blanket: React.SFC<any> = props => {
  return (
    <div
      style={{
        bottom: 0,
        left: 0,
        position: 'fixed',
        right: 0,
        top: 0,
        zIndex: 1,
      }}
      {...props}
    />
  );
};

export default SearchableSelect;
export { SearchableSelect };
