import cn from 'classnames';
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
  value: string;
}

class SearchableSelect extends Component<any> {
  public state = {
    isOpen: false,
    value: this.props.defaultValue || this.props.value || '',
  };

  public toggleOpen() {
    this.setState((state: SearchableSelectState) => ({
      isOpen: !state.isOpen,
    }));
  }

  public onSelectChange(value: any) {
    this.toggleOpen();
    this.setState({ value });
    this.props.onChange(value);
  }

  public render() {
    // Override dropdownIndicator styling when tooltip is present
    let dropdownIndicatorStylesOverride;
    if (this.props.tooltip) {
      dropdownIndicatorStylesOverride = {
        dropdownIndicator: DropdownIndicatorStylesOverride,
      };
    }

    const { isOpen, value } = this.state;

    return (
      <div style={{ position: 'relative' }}>
        {
          <ReactSelect
            {...this.props}
            value={value}
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
              onChange={(event: any) => this.onSelectChange(event)}
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
