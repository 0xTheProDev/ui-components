import React from 'react';
import ReactSelect from 'react-select';
import ReactCreateable from 'react-select/lib/Creatable';
import mixins from '../styles/global/mixins.scss';
import dropDownShadow from '../styles/global/mixins/dropdownShadow.scss';
import cn from '../utilities/classnames';
import Styles from './select.module.scss';

/*tslint:disable no-console */
const inputSelect = {
  color: 'inherit',
  margin: 0,
};
const control = {
  ':hover': {
    border: 0,
    borderBottom: `1px solid ${Styles['slate-20']}`,
  },
  backgroundColor: 'transparent',
  border: 0,
  borderBottom: `1px solid ${Styles['slate-20']}`,
  borderRadius: 0,
  boxShadow: 'none',
  color: Styles.slate,
  fontSize: 13,
  minHeight: 'auto',
};
const dropdownIndicator = {
  padding: 0,

  '&::after': {
    ...mixins,
    color: Styles['slate-60'],
    content: Styles['icon-caret'],
    position: 'absolute',
    right: 5,
  },

  svg: {
    display: 'none',
  },
};
const menu = {
  ...dropDownShadow,
  backgroundColor: Styles['slate-02'],
  borderColor: Styles['slate-10'],
  borderRadius: 2,
  fontSize: 13,
  margin: 0,
};

const multiValueLabel = {
  backgroundColor: Styles['sg-blue'],
  color: Styles.white,
  fontSize: 12,
};

const SelectStyles = {
  clearIndicator: (base: object, state: Array<any>) => {
    return { display: 'none' };
  },
  container: (base: object, state: Array<any>) => {
    return { ...base };
  },
  control: (base: object, state: any) => {
    const focusState = state.isFocused
      ? {
          borderBottomColor: Styles['sg-blue'],
          boxShadow: `${Styles['sg-blue']} 0 1px 0`,
        }
      : {};
    const errorState = state.selectProps.error
      ? {
          borderBottomColor: Styles['ron-burgundy'],
          boxShadow: `${Styles['ron-burgundy']} 0 1px 0`,
        }
      : {};
    const disabledState = state.selectProps.disabled
      ? {
          color: Styles['select-disabled-color'],
        }
      : {};
    const placeholderState = !state.hasValue
      ? {
          color: Styles['slate-40'],
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
  dropdownIndicator: (base: object, state: Array<any>) => {
    return { ...base, ...dropdownIndicator };
  },
  group: (base: object, state: Array<any>) => {
    return { ...base };
  },
  groupHeading: (base: object, state: Array<any>) => {
    const groupStyle = {
      color: Styles.slate,
      fontSize: 13,
      fontWeight: 600,
      marginBottom: 0,
      padding: '9px 30px',
      textTransform: 'capitalize',
    };
    return { ...base, ...groupStyle };
  },
  indicatorSeparator: (base: object, state: Array<any>) => {
    return {};
  },
  indicatorsContainer: (base: object, state: Array<any>) => {
    return { ...base };
  },
  input: (base: object, state: Array<any>) => {
    return { ...base };
  },
  loadingIndicator: (base: object, state: Array<any>) => {
    return { ...base };
  },
  loadingMessage: (base: object, state: Array<any>) => {
    return { ...base };
  },
  menu: (base: object, state: Array<any>) => {
    return { ...base, ...menu };
  },
  menuList: (base: object, state: Array<any>) => {
    return { ...base };
  },
  multiValue: (base: object, state: Array<any>) => {
    return { ...base, ...multiValueLabel };
  },
  multiValueLabel: (base: object, state: Array<any>) => {
    return {
      ...base,
      ...multiValueLabel,
      ...{
        padding: 3,
        paddingLeft: 6,
        paddingTop: 4,
      },
    };
  },
  multiValueRemove: (base: object, state: Array<any>) => {
    return {
      ...base,
      ...{
        ...multiValueLabel,
        ':hover': {
          backgroundColor: Styles['sg-blue'],
          cursor: 'pointer',
        },
        paddingLeft: 0,
      },
    };
  },
  noOptionsMessage: (base: object, state: Array<any>) => {
    return { ...base };
  },
  option: (base: object, state: Array<any>) => {
    return { ...base, padding: '9px 30px' };
  },
  placeholder: (base: object, state: Array<any>) => {},
  singleValue: (base: object, state: Array<any>) => {
    return { ...base, ...inputSelect };
  },
  valueContainer: (base: object, state: Array<any>) => {
    return { ...base, ...inputSelect };
  },
};
const Select: React.SFC<any> = props => {
  const { hook } = props;
  return (
    <div
      className={cn(Styles['input-select-wrap'], {
        [Styles['is-required']]: props.required,
        [Styles['is-error']]: props.error,
        [Styles['is-disabled']]: props.disabled,
      })}
      {...{ hook }}
    >
      {props.label && (
        <label className={cn(Styles['input-select-label'])}>
          {props.label}
        </label>
      )}
      <ReactSelect
        {...props}
        styles={{ ...SelectStyles, ...props.styles }}
        isDisabled={props.disabled}
      />
      {props.info && (
        <span
          className={cn(Styles['input-info'], { [Styles.danger]: props.error })}
        >
          {props.info}
        </span>
      )}
    </div>
  );
};

const Createable: React.SFC<any> = props => {
  return (
    <div
      className={cn(Styles['input-select-wrap'], {
        [Styles['is-required']]: props.required,
        [Styles['is-error']]: props.error,
        [Styles['is-disabled']]: props.disabled,
      })}
    >
      {props.label && (
        <label className={cn(Styles['input-select-label'])}>
          {props.label}
        </label>
      )}
      <ReactCreateable
        {...props}
        styles={{ ...SelectStyles, ...props.styles }}
        isDisabled={props.disabled}
      />
      {props.info && (
        <span
          className={cn(Styles['input-info'], { [Styles.danger]: props.error })}
        >
          {props.info}
        </span>
      )}
    </div>
  );
};

export default Select;
export { Select, Createable };
