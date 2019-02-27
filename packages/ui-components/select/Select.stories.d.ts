import React from 'react';
import { Props as SelectProps } from 'react-select/lib/Select';
import './select.module.scss';
export interface FieldState {
    value: Array<{
        label: string;
        value: string;
    }>;
    inputValue: string;
}
export declare class CreateableTextInput extends React.Component<SelectProps<any>> {
    readonly state: FieldState;
    render(): JSX.Element;
    private handleKeyDown;
    private handleInputChange;
    private handleChange;
}
