/* eslint jsx-a11y/label-has-for: 0, jsx-a11y/aria-role: 0 */
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React from 'react';
import tinycolor from 'tinycolor2';
import ColorPalette from './color-palette';
import { Icon } from './icon';
import Styles from './styles/color-picker.module.scss';
import { TextInput } from './text-input';
import cn from './utilities/classnames';
export function getPalettePosition(clientHeight, paletteTriggerRect, initialPaletteRect) {
    const triggerSpacing = 5;
    const newTop = clientHeight >= initialPaletteRect.bottom
        ? initialPaletteRect.top + paletteTriggerRect.height + triggerSpacing
        : initialPaletteRect.top - initialPaletteRect.height - triggerSpacing;
    const newLeft = initialPaletteRect.left - initialPaletteRect.width / 2;
    return { top: newTop, left: newLeft };
}
export const defaultColorResult = {
    hex: '',
    hsl: { h: 0, s: 0, l: 0 },
    rgb: { r: 0, g: 0, b: 0 },
};
export class ColorPicker extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            colorValue: Object.assign({}, defaultColorResult, this.colorResultFrom(this.props.initialValue)),
            displayColorPalette: false,
            left: 0,
            top: 0,
        };
        this.paletteTriggerRect = null;
        this.onReset = (event) => {
            const { onChange, resetValue } = this.props;
            event.preventDefault();
            onChange(event, resetValue);
        };
        this.handleChangeFromTextInput = (e, color) => {
            if (!color && !e) {
                this.setState({ colorValue: defaultColorResult });
                this.props.onChange(e, '');
            }
            else {
                const newColorResult = this.colorResultFrom(color);
                this.props.onChange(e, color);
                this.setState({ colorValue: newColorResult });
            }
        };
        this.handleChangeFromColorPalette = (color) => {
            this.setState({ colorValue: color });
            this.props.onChange(null, color.hex);
        };
        this.toggleColorPalette = (e) => {
            const displayColorPalette = !this.state.displayColorPalette;
            // not in didMount so we can only compute this if we need it
            this.paletteTriggerRect = this.colorPaletteButton.getBoundingClientRect();
            const initialTop = this.paletteTriggerRect.top;
            const initialLeft = this.paletteTriggerRect.left + this.paletteTriggerRect.width / 2;
            this.setState({ displayColorPalette, top: initialTop, left: initialLeft });
            if (!displayColorPalette && this.props.onClose) {
                this.props.onClose(e, this.state.colorValue);
            }
        };
        // Need to do some calculations to determine if this is being clipped by the window edge
        // Also scoot it left by half its width to center it on the "bubble"
        // Note: this needs to run AFTER toggleColorPalette so the palette can be rendered and
        //   its initial size and position can be calculated.
        this.handleColorPaletteMount = (paletteRect) => {
            this.setState(getPalettePosition(document.documentElement.clientHeight, this.paletteTriggerRect ||
                this.colorPaletteButton.getBoundingClientRect(), paletteRect));
        };
    }
    render() {
        const _a = this.props, { labelText, resetValue, initialValue, onChange } = _a, attributes = __rest(_a, ["labelText", "resetValue", "initialValue", "onChange"]);
        const { displayColorPalette, top, left } = this.state;
        return (React.createElement("div", { className: cn(Styles['picker-wrapper'], {
                [Styles['text-disabled']]: this.props.textDisabled,
            }) },
            React.createElement("label", null, labelText),
            React.createElement("div", { className: Styles['inputs-wrapper'] },
                (resetValue || typeof resetValue === 'string') && (React.createElement(Icon, { className: Styles['reset-button'], type: "reload", "data-role": "reset-button", title: "Reset to Default Color", onClick: this.onReset })),
                React.createElement(TextInput, Object.assign({}, attributes, { id: this.props.id, onChange: this.handleChangeFromTextInput, placeholder: "auto", step: this.props.step, type: 'text', value: initialValue, isDisabled: !!this.props.textDisabled })),
                React.createElement("button", { className: Styles.bubble, "data-role": "color-picker-trigger", style: { backgroundColor: initialValue }, onClick: this.toggleColorPalette, ref: element => {
                        this.colorPaletteButton = element;
                    } }),
                displayColorPalette && (React.createElement(ColorPalette, { toggleColorPalette: this.toggleColorPalette, color: this.state.colorValue.hsl, colorValue: this.state.colorValue, onChange: this.handleChangeFromColorPalette, onMount: this.handleColorPaletteMount, textDisabled: this.props.textDisabled, top: top, left: left }))),
            React.createElement("div", { className: "cp-default", role: "color-picker-container" })));
    }
    colorResultFrom(colorStr) {
        const color = tinycolor(colorStr);
        return {
            hex: color.toHex(),
            hsl: color.toHsl(),
            rgb: color.toRgb(),
        };
    }
}
export default ColorPicker;
