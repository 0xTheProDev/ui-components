import React from 'react';
import { ColorResult, HSLColor, RGBColor } from 'react-color';
import { HTMLInputElementProps } from './text-input';
export declare function getPalettePosition(clientHeight: number, paletteTriggerRect: ClientRect, initialPaletteRect: ClientRect): {
    top: number;
    left: number;
};
export declare type ColorResult = ColorResult;
export interface ColorPickerPropsTypes {
    labelText?: string;
    name: string;
    id: string;
    resetValue?: string;
    initialValue: string;
    textDisabled?: boolean;
    onChange: (event: React.SyntheticEvent<any>, value: string) => void;
    onClose?: (event: React.SyntheticEvent<any>, value: ColorResult) => void;
}
export interface ColorPickerState {
    displayColorPalette: boolean;
    top: number;
    left: number;
    colorValue: ColorResult;
}
export declare const defaultColorResult: ColorResult;
export declare class ColorPicker extends React.Component<ColorPickerPropsTypes & HTMLInputElementProps, ColorPickerState> {
    readonly state: {
        colorValue: {
            hex: string;
            hsl: HSLColor;
            rgb: RGBColor;
        };
        displayColorPalette: boolean;
        left: number;
        top: number;
    };
    private paletteTriggerRect;
    private colorPaletteButton;
    render(): JSX.Element;
    private onReset;
    private handleChangeFromTextInput;
    private handleChangeFromColorPalette;
    private toggleColorPalette;
    private handleColorPaletteMount;
    private colorResultFrom;
}
export default ColorPicker;
