import React, { ReactNode } from 'react';
export interface CheckboxProps {
    checked: boolean;
    disabled?: boolean;
    id: string;
    info?: string;
    label?: ReactNode;
    children?: any;
    onChange: (event: any) => void;
    value?: string;
}
export declare const Checkbox: React.SFC<CheckboxProps>;
export default Checkbox;
