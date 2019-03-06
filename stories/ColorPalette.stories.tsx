import { storiesOf } from '@storybook/react';
import React from 'react';

import ColorPalette from '../src/color-palette';
import ColorPicker, { defaultColorResult } from '../src/color-picker';
import { ColorResult } from 'react-color';
const stories = storiesOf('Color Palette', module);

const colorPickerWrapper = (
  WrappedComponent: any,
  initialStateValue: string,
  additionalProps?: any
) => {
  class ColorPickerWrapper extends React.Component<any, { value: string }> {
    public state = { value: initialStateValue };
    public onChange = (
      e: React.SyntheticEvent<HTMLInputElement>,
      value: string
    ) => {
      this.setState({ value });
    };

    public render() {
      return (
        <WrappedComponent
          onChange={this.onChange}
          initialValue={this.state.value}
          data-role="color-value"
          resetValue=""
          name="color-story"
          id="test-color"
          {...additionalProps}
        />
      );
    }
  }

  return ColorPickerWrapper;
};

const DefaultColorPicker = colorPickerWrapper(ColorPicker, '');
const TextDisabledColorPicker = colorPickerWrapper(ColorPicker, '', {
  textDisabled: true,
});
const InitialValueColorPicker = colorPickerWrapper(ColorPicker, '#1E82A2');

class ColorPaletteWrapper extends React.Component<any, any> {
  public state = { value: defaultColorResult };
  public onChange = (value: ColorResult) => this.setState({ value });
  public render() {
    return (
      <ColorPalette
        toggleColorPalette={() => {}}
        onChange={this.onChange}
        onMount={() => {}}
        color={this.state.value.hsl}
        colorValue={this.state.value}
      />
    );
  }
}

stories.add('Color Picker', () => <DefaultColorPicker />);
stories.add('Text Disabled', () => <TextDisabledColorPicker />);
stories.add('Initial Value', () => <InitialValueColorPicker />);
stories.add('Bare', () => <ColorPaletteWrapper />);
