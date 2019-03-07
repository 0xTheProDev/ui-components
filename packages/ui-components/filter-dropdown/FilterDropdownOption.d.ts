import React, { ChangeEvent, ReactNode } from 'react';
import { CheckboxProps } from '../checkbox';
import { CampaignStatType } from '../types/stats';
export interface FilterDropdownOptionProps extends Pick<CheckboxProps, 'value' | 'checked' | 'disabled' | 'info' | 'children'> {
    type?: CampaignStatType;
    label: ReactNode;
    onChange: (e: ChangeEvent<HTMLInputElement>, value: string) => void;
}
export declare class FilterDropdownOption extends React.Component<FilterDropdownOptionProps> {
    render(): JSX.Element;
    private handleChange;
}
export default FilterDropdownOption;
