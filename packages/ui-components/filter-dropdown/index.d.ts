import { Component } from 'react';
import { ButtonProps } from '../button';
import { DropdownButtonProps } from '../dropdown-button';
import { FilterDropdownOptionProps } from './FilterDropdownOption';
import { FilterDropdownOptionType } from '../types/stats';
export interface FilterDropdownProps {
    options?: Array<FilterDropdownOptionType>;
    onChange?: FilterDropdownOptionProps['onChange'];
}
declare type CombinedProps = FilterDropdownProps & DropdownButtonProps & ButtonProps;
export declare class FilterDropdown extends Component<CombinedProps> {
    render(): JSX.Element;
}
export default FilterDropdown;
