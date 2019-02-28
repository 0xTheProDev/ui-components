import React from 'react';
import ReactSelect, { components } from 'react-select';
import ReactAsyncSelect from 'react-select/lib/Async';
import ReactCreateable from 'react-select/lib/Creatable';
import Icon from '../icon';
import mixins from '../styles/global/mixins.scss';
import dropDownShadow from '../styles/global/mixins/dropdownShadow.scss';
import SassVars from '../styles/global/variables.scss';
import Tooltip from '../tooltip';
import cn from '../utilities/classnames';
import Styles from './select.module.scss';
const inputSelect = {
    color: 'inherit',
    margin: 0,
};
const multiValueBaseStyles = {
    backgroundColor: SassVars['sg-blue'],
    color: SassVars.white,
    fontSize: 12,
};
const disabledLabel = (disabled) => disabled
    ? {
        backgroundColor: SassVars['select-disabled-color'],
    }
    : {};
const DropdownIndicatorStyles = (base) => {
    const dropdownIndicator = {
        padding: 0,
        '&::after': Object.assign({}, mixins, { color: SassVars['slate-60'], content: `${SassVars['icon-caret']}`, position: 'absolute', right: 5 }),
        svg: {
            display: 'none',
        },
    };
    return Object.assign({}, base, dropdownIndicator);
};
// Override styling to make tooltip work even if select is disabled
const DropdownIndicatorStylesOverride = (base) => (Object.assign({}, base, { pointerEvents: 'initial' }));
const SelectStyles = {
    clearIndicator: (base) => {
        return {
            padding: 0,
            '&::after': Object.assign({}, mixins, { color: SassVars['slate-60'], content: `${SassVars['icon-x']}`, position: 'absolute', right: 20, transform: 'scale(0.6)' }),
            svg: {
                display: 'none',
            },
        };
    },
    container: (base) => {
        return Object.assign({}, base, { pointerEvents: 'initial' });
    },
    control: (base, state) => {
        const control = {
            ':hover': {
                border: 0,
                borderBottom: `1px solid ${SassVars['slate-20']}`,
            },
            backgroundColor: 'transparent',
            border: 0,
            borderBottom: `1px solid ${SassVars['slate-20']}`,
            borderRadius: 0,
            boxShadow: 'none',
            color: SassVars.slate,
            fontSize: 13,
            minHeight: 'auto',
        };
        const focusState = state.isFocused
            ? {
                borderBottomColor: SassVars['sg-blue'],
                boxShadow: `${SassVars['sg-blue']} 0 1px 0`,
            }
            : {};
        const disabledState = state.selectProps.disabled
            ? {
                color: SassVars['select-disabled-color'],
            }
            : {};
        const errorState = state.selectProps.error
            ? {
                borderBottomColor: SassVars['ron-burgundy'],
                boxShadow: `${SassVars['ron-burgundy']} 0 1px 0`,
            }
            : {};
        const placeholderState = !state.hasValue
            ? {
                color: SassVars['slate-40'],
            }
            : {};
        return Object.assign({}, base, control, focusState, errorState, disabledState, placeholderState);
    },
    dropdownIndicator: DropdownIndicatorStyles,
    groupHeading: (base) => {
        const groupStyle = {
            color: SassVars.slate,
            fontSize: 13,
            fontWeight: 600,
            marginBottom: 0,
            padding: '9px 30px',
            textTransform: 'capitalize',
        };
        return Object.assign({}, base, groupStyle);
    },
    indicatorSeparator: () => {
        return {};
    },
    menu: (base) => {
        const menu = Object.assign({}, dropDownShadow, { backgroundColor: SassVars['slate-02'], borderColor: SassVars['slate-10'], borderRadius: 2, fontSize: 13, margin: 0 });
        return Object.assign({}, base, menu);
    },
    multiValue: (base, state) => {
        return Object.assign({}, base, multiValueBaseStyles, disabledLabel(state.selectProps.disabled));
    },
    multiValueLabel: (base, state) => {
        return Object.assign({}, base, multiValueBaseStyles, {
            padding: 3,
            paddingLeft: 6,
            paddingTop: 4,
        }, disabledLabel(state.selectProps.disabled));
    },
    multiValueRemove: (base, state) => {
        return Object.assign({}, base, Object.assign({}, multiValueBaseStyles, { ':hover': {
                backgroundColor: SassVars['sg-blue'],
                cursor: 'pointer',
            }, paddingLeft: 0 }), disabledLabel(state.selectProps.disabled));
    },
    option: (base, state) => {
        const focusedState = state.isFocused
            ? { backgroundColor: SassVars['slate-10'] }
            : {};
        const isSelected = state.isSelected
            ? { backgroundColor: SassVars['slate-20'], color: SassVars.slate }
            : {};
        return Object.assign({}, base, { padding: '9px 30px' }, focusedState, isSelected, { ':active': {}, 'line-height': '18px' });
    },
    placeholder: (base) => {
        return Object.assign({}, base, {
            marginLeft: 0,
            marginRight: 0,
        });
    },
    selectContainer: (base) => {
        return Object.assign({}, base, {
            marginLeft: 0,
            marginRight: 0,
        });
    },
    singleValue: (base) => {
        return Object.assign({}, base, inputSelect, {
            marginLeft: 0,
            marginRight: 0,
        });
    },
    valueContainer: (base) => {
        return Object.assign({}, base, inputSelect, {
            padding: 0,
        });
    },
};
const DropdownIndicator = props => {
    if (!props.selectProps.tooltip) {
        return React.createElement(components.DropdownIndicator, Object.assign({}, props));
    }
    return (React.createElement(components.DropdownIndicator, Object.assign({}, props),
        React.createElement(Tooltip, { content: props.selectProps.tooltip, direction: props.selectProps.tooltipDirection, length: props.selectProps.tooltipLength, hoverTarget: React.createElement(Icon, { type: "info-circle" }) })));
};
const Select = props => {
    // Override dropdownIndicator styling when tooltip is present
    let dropdownIndicatorStylesOverride;
    if (props.tooltip) {
        dropdownIndicatorStylesOverride = {
            dropdownIndicator: DropdownIndicatorStylesOverride,
        };
    }
    return (React.createElement("div", { className: cn('input-select-wrap', Styles['input-select-wrap'], {
            [Styles['is-disabled']]: props.disabled,
            'is-disabled': props.disabled,
            [Styles['is-error']]: props.error,
            'is-error': props.error,
            [Styles['is-required']]: props.required,
            'is-required': props.required,
        }) },
        props.label && (React.createElement("label", { className: cn('input-select-label', Styles['input-select-label']) }, props.label)),
        React.createElement(ReactSelect, Object.assign({}, props, { components: props.components || { DropdownIndicator }, isClearable: props.isClearable || false, styles: Object.assign({}, SelectStyles, props.styles, dropdownIndicatorStylesOverride), isDisabled: props.disabled })),
        props.info && (React.createElement("span", { className: cn('input-info', Styles['input-info'], {
                danger: props.error,
                [Styles.danger]: props.error,
                isDisabled: props.disabled,
                [Styles.isDisabled]: props.disabled,
            }) }, props.info))));
};
const Createable = props => {
    // Override dropdownIndicator styling when tooltip is present
    let dropdownIndicatorStylesOverride;
    if (props.tooltip) {
        dropdownIndicatorStylesOverride = {
            dropdownIndicator: DropdownIndicatorStylesOverride,
        };
    }
    return (React.createElement("div", { className: cn('input-select-wrap', Styles['input-select-wrap'], {
            [Styles['is-disabled']]: props.disabled,
            'is-disabled': props.disabled,
            [Styles['is-error']]: props.error,
            'is-error': props.error,
            [Styles['is-required']]: props.required,
            'is-required': props.required,
        }) },
        props.label && (React.createElement("label", { className: cn('input-select-label', Styles['input-select-label']) }, props.label)),
        React.createElement(ReactCreateable, Object.assign({}, props, { components: props.components || { DropdownIndicator }, isClearable: props.isClearable || false, styles: Object.assign({}, SelectStyles, props.styles, dropdownIndicatorStylesOverride), isDisabled: props.disabled })),
        props.info && (React.createElement("span", { className: cn('input-info', Styles['input-info'], {
                danger: props.error,
                [Styles.danger]: props.error,
                isDisabled: props.disabled,
                [Styles.isDisabled]: props.disabled,
            }) }, props.info))));
};
// Async Select has a lot of the same props as the original Select
// The notable different props include the following:
// defaultOptions, loadOptions, cacheOptions, and onInputChange
const AsyncSelect = props => {
    // Override dropdownIndicator styling when tooltip is present
    let dropdownIndicatorStylesOverride;
    if (props.tooltip) {
        dropdownIndicatorStylesOverride = {
            dropdownIndicator: DropdownIndicatorStylesOverride,
        };
    }
    return (React.createElement("div", { className: cn('input-select-wrap', Styles['input-select-wrap'], {
            [Styles['is-disabled']]: props.disabled,
            'is-disabled': props.disabled,
            [Styles['is-error']]: props.error,
            'is-error': props.error,
            [Styles['is-required']]: props.required,
            'is-required': props.required,
        }) },
        props.label && (React.createElement("label", { className: cn('input-select-label', Styles['input-select-label']) }, props.label)),
        React.createElement(ReactAsyncSelect, Object.assign({}, props, { components: props.components || {
                DropdownIndicator,
                // Disabling default loading dots
                LoadingIndicator: null,
            }, isClearable: props.isClearable || false, styles: Object.assign({}, SelectStyles, props.styles, dropdownIndicatorStylesOverride), isDisabled: props.disabled })),
        props.info && (React.createElement("span", { className: cn('input-info', Styles['input-info'], {
                danger: props.error,
                [Styles.danger]: props.error,
                isDisabled: props.disabled,
                [Styles.isDisabled]: props.disabled,
            }) }, props.info))));
};
export default Select;
export { Select, Createable, AsyncSelect };
