import { Component } from 'react';
import { IconType } from '../types/icons';
import { SimpleSelectOptionData, SimpleSelectProps } from './';
export declare type SimpleSelectOptionProps = Pick<SimpleSelectProps, 'onOptionSelect'> & {
    data: SimpleSelectOptionData;
    selectedValue: string;
    iconType?: IconType;
};
export default class SimpleSelectOption extends Component<SimpleSelectOptionProps> {
    render(): JSX.Element;
    private handleClick;
}
