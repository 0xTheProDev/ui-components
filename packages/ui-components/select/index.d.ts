import { PointerEventsProperty, TextTransformProperty } from 'csstype';
import React, { ReactNode } from 'react';
import { Props as ReactAsyncSelectProps } from 'react-select/lib/Async';
import { SelectComponents } from 'react-select/lib/components';
import { IndicatorProps } from 'react-select/lib/components/indicators';
import { Props as ReactCreateableProps } from 'react-select/lib/Creatable';
import { Props as ReactSelectProps } from 'react-select/lib/Select';
import { CommonProps, GroupedOptionsType, OptionsType } from 'react-select/lib/types';
import { Omit } from '../types/utils';
export declare const DropdownIndicatorStylesOverride: (base: object) => {
    padding: number;
    pointerEvents: PointerEventsProperty;
};
export declare const baseOptionStyles: (base: object, state: any) => {
    ':active': {};
    'line-height': string;
    backgroundColor: any;
    color: any;
    padding: string;
} | {
    ':active': {};
    'line-height': string;
    backgroundColor: any;
    color?: undefined;
    padding: string;
} | {
    ':active': {};
    'line-height': string;
    backgroundColor: any;
    color: any;
    padding: string;
} | {
    ':active': {};
    'line-height': string;
    backgroundColor?: undefined;
    color?: undefined;
    padding: string;
};
export declare const linkOptionStyles: (base: object, state: any) => {
    'border-top': string;
    ':active': {};
    'line-height': string;
    backgroundColor: any;
    color: any;
    padding: string;
} | {
    'border-top': string;
    ':active': {};
    'line-height': string;
    backgroundColor: any;
    color?: undefined;
    padding: string;
} | {
    'border-top': string;
    ':active': {};
    'line-height': string;
    backgroundColor: any;
    color: any;
    padding: string;
} | {
    'border-top': string;
    ':active': {};
    'line-height': string;
    backgroundColor?: undefined;
    color?: undefined;
    padding: string;
};
export declare const SelectStyles: {
    clearIndicator: (base: object) => {
        padding: number;
        '&::after': any;
        svg: {
            display: string;
        };
    };
    container: (base: object) => {
        pointerEvents: PointerEventsProperty;
    };
    control: (base: object, state: any) => {
        color: any;
        borderBottomColor: any;
        boxShadow: string;
        ':hover': {
            border: number;
            borderBottom: string;
        };
        backgroundColor: string;
        border: number;
        borderBottom: string;
        borderRadius: number;
        fontSize: number;
        minHeight: string;
    } | {
        color: any;
        borderBottomColor: any;
        boxShadow: string;
        ':hover': {
            border: number;
            borderBottom: string;
        };
        backgroundColor: string;
        border: number;
        borderBottom: string;
        borderRadius: number;
        fontSize: number;
        minHeight: string;
    } | {
        color: any;
        borderBottomColor: any;
        boxShadow: string;
        ':hover': {
            border: number;
            borderBottom: string;
        };
        backgroundColor: string;
        border: number;
        borderBottom: string;
        borderRadius: number;
        fontSize: number;
        minHeight: string;
    } | {
        color: any;
        borderBottomColor: any;
        boxShadow: string;
        ':hover': {
            border: number;
            borderBottom: string;
        };
        backgroundColor: string;
        border: number;
        borderBottom: string;
        borderRadius: number;
        fontSize: number;
        minHeight: string;
    } | {
        color: any;
        borderBottomColor: any;
        boxShadow: string;
        ':hover': {
            border: number;
            borderBottom: string;
        };
        backgroundColor: string;
        border: number;
        borderBottom: string;
        borderRadius: number;
        fontSize: number;
        minHeight: string;
    } | {
        color: any;
        borderBottomColor: any;
        boxShadow: string;
        ':hover': {
            border: number;
            borderBottom: string;
        };
        backgroundColor: string;
        border: number;
        borderBottom: string;
        borderRadius: number;
        fontSize: number;
        minHeight: string;
    } | {
        color: any;
        borderBottomColor: any;
        boxShadow: string;
        ':hover': {
            border: number;
            borderBottom: string;
        };
        backgroundColor: string;
        border: number;
        borderBottom: string;
        borderRadius: number;
        fontSize: number;
        minHeight: string;
    } | {
        color: any;
        borderBottomColor: any;
        boxShadow: string;
        ':hover': {
            border: number;
            borderBottom: string;
        };
        backgroundColor: string;
        border: number;
        borderBottom: string;
        borderRadius: number;
        fontSize: number;
        minHeight: string;
    } | {
        color: any;
        borderBottomColor: any;
        boxShadow: string;
        ':hover': {
            border: number;
            borderBottom: string;
        };
        backgroundColor: string;
        border: number;
        borderBottom: string;
        borderRadius: number;
        fontSize: number;
        minHeight: string;
    } | {
        color: any;
        borderBottomColor: any;
        boxShadow: string;
        ':hover': {
            border: number;
            borderBottom: string;
        };
        backgroundColor: string;
        border: number;
        borderBottom: string;
        borderRadius: number;
        fontSize: number;
        minHeight: string;
    } | {
        color: any;
        borderBottomColor: any;
        boxShadow: string;
        ':hover': {
            border: number;
            borderBottom: string;
        };
        backgroundColor: string;
        border: number;
        borderBottom: string;
        borderRadius: number;
        fontSize: number;
        minHeight: string;
    } | {
        color: any;
        borderBottomColor: any;
        boxShadow: string;
        ':hover': {
            border: number;
            borderBottom: string;
        };
        backgroundColor: string;
        border: number;
        borderBottom: string;
        borderRadius: number;
        fontSize: number;
        minHeight: string;
    } | {
        color: any;
        borderBottomColor?: undefined;
        boxShadow: string;
        ':hover': {
            border: number;
            borderBottom: string;
        };
        backgroundColor: string;
        border: number;
        borderBottom: string;
        borderRadius: number;
        fontSize: number;
        minHeight: string;
    } | {
        color: any;
        borderBottomColor?: undefined;
        boxShadow: string;
        ':hover': {
            border: number;
            borderBottom: string;
        };
        backgroundColor: string;
        border: number;
        borderBottom: string;
        borderRadius: number;
        fontSize: number;
        minHeight: string;
    } | {
        color: any;
        borderBottomColor?: undefined;
        boxShadow: string;
        ':hover': {
            border: number;
            borderBottom: string;
        };
        backgroundColor: string;
        border: number;
        borderBottom: string;
        borderRadius: number;
        fontSize: number;
        minHeight: string;
    } | {
        color: any;
        borderBottomColor?: undefined;
        boxShadow: string;
        ':hover': {
            border: number;
            borderBottom: string;
        };
        backgroundColor: string;
        border: number;
        borderBottom: string;
        borderRadius: number;
        fontSize: number;
        minHeight: string;
    };
    dropdownIndicator: (base: object) => {
        padding: number;
        '&::after': any;
        svg: {
            display: string;
        };
    };
    groupHeading: (base: object) => {
        color: any;
        fontSize: number;
        fontWeight: number;
        marginBottom: number;
        padding: string;
        textTransform: TextTransformProperty;
    };
    indicatorSeparator: () => {};
    menu: (base: object) => any;
    multiValue: (base: object, state: any) => {
        backgroundColor: any;
        color: any;
        fontSize: number;
    } | {
        backgroundColor: any;
        color: any;
        fontSize: number;
    } | {
        backgroundColor: any;
        color: any;
        fontSize: number;
    } | {
        backgroundColor: any;
        color: any;
        fontSize: number;
    };
    multiValueLabel: (base: object, state: any) => {
        backgroundColor: any;
        padding: number;
        paddingLeft: number;
        paddingTop: number;
        color: any;
        fontSize: number;
    } | {
        backgroundColor: any;
        padding: number;
        paddingLeft: number;
        paddingTop: number;
        color: any;
        fontSize: number;
    } | {
        backgroundColor: any;
        padding: number;
        paddingLeft: number;
        paddingTop: number;
        color: any;
        fontSize: number;
    } | {
        backgroundColor: any;
        padding: number;
        paddingLeft: number;
        paddingTop: number;
        color: any;
        fontSize: number;
    };
    multiValueRemove: (base: object, state: any) => {
        backgroundColor: any;
        ':hover': {
            backgroundColor: any;
            cursor: string;
        };
        paddingLeft: number;
        color: any;
        fontSize: number;
    } | {
        backgroundColor: any;
        ':hover': {
            backgroundColor: any;
            cursor: string;
        };
        paddingLeft: number;
        color: any;
        fontSize: number;
    } | {
        backgroundColor: any;
        ':hover': {
            backgroundColor: any;
            cursor: string;
        };
        paddingLeft: number;
        color: any;
        fontSize: number;
    } | {
        backgroundColor: any;
        ':hover': {
            backgroundColor: any;
            cursor: string;
        };
        paddingLeft: number;
        color: any;
        fontSize: number;
    };
    option: (base: object, state: any) => {
        ':active': {};
        'line-height': string;
        backgroundColor: any;
        color: any;
        padding: string;
    } | {
        ':active': {};
        'line-height': string;
        backgroundColor: any;
        color?: undefined;
        padding: string;
    } | {
        ':active': {};
        'line-height': string;
        backgroundColor: any;
        color: any;
        padding: string;
    } | {
        ':active': {};
        'line-height': string;
        backgroundColor?: undefined;
        color?: undefined;
        padding: string;
    };
    placeholder: (base: object) => {
        marginLeft: number;
        marginRight: number;
    };
    singleValue: (base: object) => {
        marginLeft: number;
        marginRight: number;
        color: string;
        margin: number;
    };
    valueContainer: (base: object) => {
        padding: number;
        color: string;
        margin: number;
    };
};
export declare const DropdownIndicator: React.SFC<CommonProps<any> & SelectComponents<any> & IndicatorProps<any>>;
export interface ReactNodeLabelOption {
    label: ReactNode;
    value: string;
}
export interface SelectProps extends Omit<ReactSelectProps, 'options'> {
    options?: GroupedOptionsType<ReactNodeLabelOption> | OptionsType<ReactNodeLabelOption>;
    disabled?: boolean;
    error?: boolean;
    info?: string | React.ReactNode;
    label?: string;
    required?: boolean;
    tooltip?: ReactNode;
    tooltipDirection?: string;
    tooltipLength?: string;
}
declare const Select: React.SFC<ReactSelectProps<any> & SelectProps>;
declare const Createable: React.SFC<ReactCreateableProps<any> & SelectProps>;
declare const AsyncSelect: React.SFC<ReactAsyncSelectProps<any> & SelectProps>;
export default Select;
export { Select, Createable, AsyncSelect };
