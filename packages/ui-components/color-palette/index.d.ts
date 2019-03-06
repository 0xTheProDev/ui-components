import React from 'react';
import { ColorResult } from 'react-color';
import { ColorWrapChangeHandler } from 'react-color/lib/components/common/ColorWrap';
import { ExportedColorProps } from 'react-color/lib/components/common/ColorWrap';
export interface ColorPaletteProps {
    onMount: (rectangle: any) => void;
    toggleColorPalette: (rectangle: any) => void;
    colorValue: ColorResult;
    onChangeComplete?: ColorWrapChangeHandler;
    textDisabled?: boolean;
    top?: number;
    left?: number;
}
declare const _default: React.ComponentClass<ColorPaletteProps & ExportedColorProps, any>;
export default _default;
