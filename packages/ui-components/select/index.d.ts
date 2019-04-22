import React from 'react';
import { SelectComponents } from 'react-select/lib/components';
import { IndicatorProps } from 'react-select/lib/components/indicators';
import { CommonProps } from 'react-select/lib/types';
export declare const DropdownIndicatorStylesOverride: (base: object) => {
    pointerEvents: string;
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
        pointerEvents: string;
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
        textTransform: string;
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
    selectContainer: (base: object) => {
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
declare const Select: React.SFC<any>;
declare const Createable: React.SFC<any>;
declare const AsyncSelect: React.SFC<any>;
export default Select;
export { Select, Createable, AsyncSelect };
