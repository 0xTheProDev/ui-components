import { PointerEventsProperty, TextTransformProperty } from 'csstype';
import React, { ReactNode } from 'react';
import ReactSelect, { components } from 'react-select';
import ReactAsyncSelect, {
  Props as ReactAsyncSelectProps,
} from 'react-select/lib/Async';
import { SelectComponents } from 'react-select/lib/components';
import { IndicatorProps } from 'react-select/lib/components/indicators';
import ReactCreateable, {
  Props as ReactCreateableProps,
} from 'react-select/lib/Creatable';
import { Props as ReactSelectProps } from 'react-select/lib/Select';
import {
  CommonProps,
  GroupedOptionsType,
  OptionsType,
} from 'react-select/lib/types';
import { noop } from 'react-select/lib/utils';
import Icon from '../icon';
import mixins from '../styles/global/mixins.scss';
import dropDownShadow from '../styles/global/mixins/dropdownShadow.scss';
import SassVars from '../styles/global/variables.scss';
import Tooltip from '../tooltip';
import { Omit } from '../types/utils';
import cn from '../utilities/classnames';
import SearchableSelect from './SearchableSelect';
import Styles from './select.module.scss';

const inputSelect = {
  color: 'inherit',
  margin: 0,
};

let iconX = SassVars['icon-x'];
let iconCaret = SassVars['icon-caret'];

if (process.env.NODE_ENV === 'test') {
  // DeadCode elimination will remove this from the bundle.
  iconX = `'"${SassVars['icon-x']}"'`;
  iconCaret = `'"${SassVars['icon-caret']}"'`;
}

const multiValueBaseStyles = {
  backgroundColor: SassVars['sg-blue'],
  color: SassVars.white,
  fontSize: 12,
};
const errorLabel = (error: boolean) =>
  error
    ? {
        backgroundColor: SassVars['ron-burgundy'],
      }
    : {};
const disabledLabel = (disabled: boolean) =>
  disabled
    ? {
        backgroundColor: SassVars['select-disabled-color'],
      }
    : {};
const hoverMultiValueRemove = (error: boolean) => ({
  backgroundColor: error ? SassVars['ron-burgundy'] : SassVars['sg-blue'],
  cursor: 'pointer',
});

const DropdownIndicatorStyles = (base: object) => {
  const dropdownIndicator = {
    padding: 0,

    '&::after': {
      ...mixins,
      color: SassVars['slate-60'],
      content: iconCaret,
      position: 'absolute',
      right: 5,
    },

    svg: {
      display: 'none',
    },
  };

  return { ...base, ...dropdownIndicator };
};

// Override styling to make tooltip work even if select is disabled
export const DropdownIndicatorStylesOverride = (base: object) => ({
  ...base,
  ...{
    padding: 0,
    pointerEvents: 'initial' as PointerEventsProperty,
  },
});

export const baseOptionStyles = (base: object, state: any) => {
  const focusedState = state.isFocused
    ? { backgroundColor: SassVars['slate-10'] }
    : {};
  const isSelected = state.isSelected
    ? { backgroundColor: SassVars['slate-20'], color: SassVars.slate }
    : {};

  return {
    ...base,
    padding: '9px 30px',
    ...focusedState,
    ...isSelected,
    ':active': {},
    'line-height': '18px',
  };
};

export const linkOptionStyles = (base: object, state: any) => {
  return {
    ...baseOptionStyles(base, state),
    'border-top': '1px solid #e9ecef',
  };
};

export const SelectStyles = {
  clearIndicator: (base: object) => {
    return {
      padding: 0,

      '&::after': {
        ...mixins,
        color: SassVars['slate-60'],
        content: iconX,
        position: 'absolute',
        right: 20,
        transform: 'scale(0.6)',
      },

      svg: {
        display: 'none',
      },
    };
  },
  container: (base: object) => {
    return {
      ...base,
      ...{ pointerEvents: 'initial' as PointerEventsProperty },
    };
  },
  control: (base: object, state: any) => {
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
    return {
      ...base,
      ...control,
      ...focusState,
      ...errorState,
      ...disabledState,
      ...placeholderState,
    };
  },
  dropdownIndicator: DropdownIndicatorStyles,
  groupHeading: (base: object) => {
    const groupStyle = {
      color: SassVars.slate,
      fontSize: 13,
      fontWeight: 600,
      marginBottom: 0,
      padding: '9px 30px',
      textTransform: 'capitalize' as TextTransformProperty,
    };
    return { ...base, ...groupStyle };
  },
  indicatorSeparator: () => {
    return {};
  },
  menu: (base: object) => {
    const menu = {
      ...dropDownShadow,
      backgroundColor: SassVars['slate-02'],
      borderColor: SassVars['slate-10'],
      borderRadius: 2,
      fontSize: 13,
      margin: 0,
    };

    return { ...base, ...menu };
  },
  multiValue: (base: object, state: any) => {
    return {
      ...base,
      ...multiValueBaseStyles,
      ...errorLabel(state.data.error),
      ...disabledLabel(state.selectProps.disabled),
    };
  },
  multiValueLabel: (base: object, state: any) => {
    return {
      ...base,
      ...multiValueBaseStyles,
      ...{
        padding: 3,
        paddingLeft: 6,
        paddingTop: 4,
      },
      ...errorLabel(state.data.error),
      ...disabledLabel(state.selectProps.disabled),
    };
  },
  multiValueRemove: (base: object, state: any) => {
    return {
      ...base,
      ...{
        ...multiValueBaseStyles,
        ':hover': hoverMultiValueRemove(state.data.error),
        paddingLeft: 0,
      },
      ...errorLabel(state.data.error),
      ...disabledLabel(state.selectProps.disabled),
    };
  },
  option: baseOptionStyles,
  placeholder: (base: object) => {
    return {
      ...base,
      ...{
        marginLeft: 0,
        marginRight: 0,
      },
    };
  },
  singleValue: (base: object) => {
    return {
      ...base,
      ...inputSelect,
      ...{
        marginLeft: 0,
        marginRight: 0,
      },
    };
  },
  valueContainer: (base: object) => {
    return {
      ...base,
      ...inputSelect,
      ...{
        padding: 0,
      },
    };
  },
};

export const DropdownIndicator: React.SFC<
  CommonProps<any> & SelectComponents<any> & IndicatorProps<any>
> = props => {
  if (!props.selectProps.tooltip) {
    return <components.DropdownIndicator {...props} />;
  }

  return (
    <components.DropdownIndicator {...props}>
      <Tooltip
        content={props.selectProps.tooltip}
        direction={props.selectProps.tooltipDirection}
        length={props.selectProps.tooltipLength}
        hoverTarget={<Icon type="info-circle" />}
      />
    </components.DropdownIndicator>
  );
};

export interface ReactNodeLabelOption {
  label: ReactNode;
  value: string;
}

export interface SelectProps extends Omit<ReactSelectProps, 'options'> {
  options?:
    | GroupedOptionsType<ReactNodeLabelOption>
    | OptionsType<ReactNodeLabelOption>;
  disabled?: boolean;
  error?: boolean;
  info?: string;
  label?: string;
  required?: boolean;
  tooltip?: ReactNode;
  tooltipDirection?: string;
  tooltipLength?: string;
}

const Select: React.SFC<ReactSelectProps<any> & SelectProps> = props => {
  const { id, ...restProps } = props;

  // Override dropdownIndicator styling when tooltip is present
  let dropdownIndicatorStylesOverride;
  if (props.tooltip) {
    dropdownIndicatorStylesOverride = {
      dropdownIndicator: DropdownIndicatorStylesOverride,
    };
  }

  return (
    <div
      id={id}
      className={cn('input-select-wrap', Styles['input-select-wrap'], {
        [Styles['is-disabled']]: props.disabled,
        'is-disabled': props.disabled,
        [Styles['is-error']]: props.error,
        'is-error': props.error,
        [Styles['is-required']]: props.required,
        'is-required': props.required,
      })}
    >
      {props.label && (
        <label
          className={cn('input-select-label', Styles['input-select-label'])}
        >
          {props.label}
        </label>
      )}
      {props.isSearchable && !props.isMulti ? (
        <SearchableSelect {...restProps} />
      ) : (
        <ReactSelect
          {...restProps}
          components={props.components || { DropdownIndicator }}
          isClearable={props.isClearable || false}
          styles={{
            ...SelectStyles,
            ...props.styles,
            ...dropdownIndicatorStylesOverride,
          }}
          isDisabled={props.disabled}
        />
      )}
      {props.info && (
        <span
          className={cn('input-info', Styles['input-info'], {
            danger: props.error,
            [Styles.danger]: props.error,
            isDisabled: props.disabled,
            [Styles.isDisabled]: props.disabled,
          })}
        >
          {props.info}
        </span>
      )}
    </div>
  );
};

const Createable: React.SFC<
  ReactCreateableProps<any> & SelectProps
> = props => {
  // Override dropdownIndicator styling when tooltip is present
  let dropdownIndicatorStylesOverride;
  if (props.tooltip) {
    dropdownIndicatorStylesOverride = {
      dropdownIndicator: DropdownIndicatorStylesOverride,
    };
  }

  return (
    <div
      className={cn('input-select-wrap', Styles['input-select-wrap'], {
        [Styles['is-disabled']]: props.disabled,
        'is-disabled': props.disabled,
        [Styles['is-error']]: props.error,
        'is-error': props.error,
        [Styles['is-required']]: props.required,
        'is-required': props.required,
      })}
    >
      {props.label && (
        <label
          className={cn('input-select-label', Styles['input-select-label'])}
        >
          {props.label}
        </label>
      )}
      <ReactCreateable
        {...props}
        components={props.components || { DropdownIndicator }}
        isClearable={props.isClearable || false}
        styles={{
          ...SelectStyles,
          ...props.styles,
          ...dropdownIndicatorStylesOverride,
        }}
        isDisabled={props.disabled}
      />
      {props.info && (
        <span
          className={cn('input-info', Styles['input-info'], {
            danger: props.error,
            [Styles.danger]: props.error,
            isDisabled: props.disabled,
            [Styles.isDisabled]: props.disabled,
          })}
        >
          {props.info}
        </span>
      )}
    </div>
  );
};

// Async Select has a lot of the same props as the original Select
// The notable different props include the following:
// defaultOptions, loadOptions, cacheOptions, and onInputChange
const AsyncSelect: React.SFC<
  ReactAsyncSelectProps<any> & SelectProps
> = props => {
  // Override dropdownIndicator styling when tooltip is present
  let dropdownIndicatorStylesOverride;
  if (props.tooltip) {
    dropdownIndicatorStylesOverride = {
      dropdownIndicator: DropdownIndicatorStylesOverride,
    };
  }

  return (
    <div
      className={cn('input-select-wrap', Styles['input-select-wrap'], {
        [Styles['is-disabled']]: props.disabled,
        'is-disabled': props.disabled,
        [Styles['is-error']]: props.error,
        'is-error': props.error,
        [Styles['is-required']]: props.required,
        'is-required': props.required,
      })}
    >
      {props.label && (
        <label
          className={cn('input-select-label', Styles['input-select-label'])}
        >
          {props.label}
        </label>
      )}
      <ReactAsyncSelect
        {...props}
        loadOptions={props.loadOptions || noop}
        components={
          props.components || {
            DropdownIndicator,
            // Disabling default loading dots
            LoadingIndicator: null,
          }
        }
        isClearable={props.isClearable || false}
        styles={{
          ...SelectStyles,
          ...props.styles,
          ...dropdownIndicatorStylesOverride,
        }}
        isDisabled={props.disabled}
      />
      {props.info && (
        <span
          className={cn('input-info', Styles['input-info'], {
            danger: props.error,
            [Styles.danger]: props.error,
            isDisabled: props.disabled,
            [Styles.isDisabled]: props.disabled,
          })}
        >
          {props.info}
        </span>
      )}
    </div>
  );
};

export default Select;
export { Select, Createable, AsyncSelect };
