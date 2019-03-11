/* eslint jsx-a11y/label-has-for: 0, jsx-a11y/aria-role: 0 */

import React from 'react';
import tinycolor from 'tinycolor2';
import classnames from './utilities/classnames';

import ColorPalette from './color-palette';

import { ColorResult, HSLColor, RGBColor } from 'react-color';
import { Icon } from './icon';
import Styles from './styles/color-picker.module.scss';
import { HTMLInputElementProps, TextInput } from './text-input';
import cn from './utilities/classnames';

export function getPalettePosition(
  clientHeight: number,
  paletteTriggerRect: ClientRect,
  initialPaletteRect: ClientRect
) {
  const triggerSpacing = 5;
  const newTop =
    clientHeight >= initialPaletteRect.bottom
      ? initialPaletteRect.top + paletteTriggerRect.height + triggerSpacing
      : initialPaletteRect.top - initialPaletteRect.height - triggerSpacing;

  const newLeft = initialPaletteRect.left - initialPaletteRect.width / 2;

  return { top: newTop, left: newLeft };
}
export type ColorResult = ColorResult;
export interface ColorPickerPropsTypes {
  labelText?: string;
  name: string;
  id: string;
  resetValue?: string; // reset color value and show/hide reset anchor
  initialValue: string; // the actual value selected
  textDisabled?: boolean;
  onChange: (event: React.SyntheticEvent<any>, value: string) => void; // callback for what happens on change
  onClose?: (event: React.SyntheticEvent<any>, value: ColorResult) => void;
}

export interface ColorPickerState {
  displayColorPalette: boolean;
  top: number;
  left: number;
  colorValue: ColorResult;
}

export const defaultColorResult: ColorResult = {
  hex: '',
  hsl: { h: 0, s: 0, l: 0 },
  rgb: { r: 0, g: 0, b: 0 },
};

export class ColorPicker extends React.Component<
  ColorPickerPropsTypes & HTMLInputElementProps,
  ColorPickerState
> {
  public readonly state = {
    colorValue: {
      ...defaultColorResult,
      ...this.colorResultFrom(this.props.initialValue),
    },
    displayColorPalette: false,
    left: 0,
    top: 0,
  };
  private paletteTriggerRect: ClientRect = null;
  private colorPaletteButton: Element;

  public render() {
    const {
      labelText,
      resetValue,
      initialValue,
      onChange,
      ...attributes
    } = this.props;
    const { displayColorPalette, top, left } = this.state;
    return (
      <div
        className={cn(Styles['picker-wrapper'], {
          [Styles['text-disabled']]: this.props.textDisabled,
        })}
      >
        <label>{labelText}</label>
        <div className={Styles['inputs-wrapper']}>
          {(resetValue || typeof resetValue === 'string') && (
            <Icon
              className={Styles['reset-button']}
              type="reload"
              data-role="reset-button"
              title="Reset to Default Color"
              onClick={this.onReset}
            />
          )}
          <TextInput
            {...attributes}
            id={this.props.id}
            onChange={this.handleChangeFromTextInput}
            placeholder="auto"
            step={this.props.step as number} // weird typing issues with Input types
            type={'text'}
            value={initialValue}
            isDisabled={!!this.props.textDisabled}
          />
          <button
            className={Styles.bubble}
            data-role="color-picker-trigger"
            style={{ backgroundColor: initialValue }}
            onClick={this.toggleColorPalette}
            ref={element => {
              this.colorPaletteButton = element;
            }}
          />
          {displayColorPalette && (
            <ColorPalette
              toggleColorPalette={this.toggleColorPalette}
              color={this.state.colorValue.hsl}
              colorValue={this.state.colorValue}
              onChange={this.handleChangeFromColorPalette}
              onMount={this.handleColorPaletteMount}
              textDisabled={this.props.textDisabled}
              top={top}
              left={left}
            />
          )}
        </div>
        <div className="cp-default" role="color-picker-container" />
      </div>
    );
  }

  private onReset = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { onChange, resetValue } = this.props;
    event.preventDefault();
    onChange(event, resetValue);
  };

  private handleChangeFromTextInput = (
    e: React.MouseEvent<HTMLButtonElement>,
    color: string
  ) => {
    if (!color && !e) {
      this.setState({ colorValue: defaultColorResult });
      this.props.onChange(e, '');
    } else {
      const newColorResult = this.colorResultFrom(color);
      this.props.onChange(e, color);
      this.setState({ colorValue: newColorResult });
    }
  };

  private handleChangeFromColorPalette = (color: ColorResult) => {
    this.setState({ colorValue: color });
    this.props.onChange(null, color.hex);
  };

  private toggleColorPalette = (e: React.SyntheticEvent<any>) => {
    const displayColorPalette = !this.state.displayColorPalette;

    // not in didMount so we can only compute this if we need it
    this.paletteTriggerRect = this.colorPaletteButton.getBoundingClientRect();
    const initialTop = this.paletteTriggerRect.top;
    const initialLeft =
      this.paletteTriggerRect.left + this.paletteTriggerRect.width / 2;

    this.setState({ displayColorPalette, top: initialTop, left: initialLeft });
    if (!displayColorPalette && this.props.onClose) {
      this.props.onClose(e, this.state.colorValue);
    }
  };

  // Need to do some calculations to determine if this is being clipped by the window edge
  // Also scoot it left by half its width to center it on the "bubble"
  // Note: this needs to run AFTER toggleColorPalette so the palette can be rendered and
  //   its initial size and position can be calculated.
  private handleColorPaletteMount = (paletteRect: ClientRect) => {
    this.setState(
      getPalettePosition(
        document.documentElement.clientHeight,
        this.paletteTriggerRect ||
          this.colorPaletteButton.getBoundingClientRect(),
        paletteRect
      )
    );
  };

  private colorResultFrom(colorStr: string): ColorResult {
    const color = tinycolor(colorStr);
    return {
      hex: color.toHex(),
      hsl: color.toHsl(),
      rgb: color.toRgb(),
    };
  }
}

export default ColorPicker;
