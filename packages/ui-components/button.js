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
import Badge from './badge';
import Icon from './icon';
import Loader from './loader';
import Styles from './styles/button.module.scss';
import cn from './utilities/classnames';
import withNativeProps from './withNativeProps';
export const Button = props => {
    let btnType = 'button';
    if (props.isSubmit) {
        btnType = 'submit';
    }
    else if (props.isReset) {
        btnType = 'reset';
    }
    const { isSubmit, isReset } = props, restOfProps = __rest(props, ["isSubmit", "isReset"]);
    return (React.createElement(Buttonized, Object.assign({}, restOfProps),
        React.createElement("button", { type: btnType, disabled: props.disabled }, props.children)));
};
export const Buttonized = (_a) => {
    var { children, type, badge, disabled, loading, small, onDark, onClick, group, active, icon, id, className } = _a, attributes = __rest(_a, ["children", "type", "badge", "disabled", "loading", "small", "onDark", "onClick", "group", "active", "icon", "id", "className"]);
    const hasBadge = !!badge || badge === 0;
    const hasIcon = !!icon;
    const content = [];
    if (hasBadge) {
        content.push(React.createElement(Badge, { key: 1 }, badge));
    }
    if (hasIcon) {
        content.push(React.createElement(Icon, { key: 2, type: icon }));
    }
    if (loading) {
        content.push(React.createElement(Loader, { key: 3, small: true, onDark: type === 'primary' }));
    }
    // the children of the element being buttonized
    if (children.props.children) {
        content.push(children.props.children);
    }
    return React.cloneElement(children, Object.assign({ className: cn('btn', `btn-${type}`, Styles.btn, Styles[`btn-${type}`], className, {
            [Styles['btn-on-dark']]: onDark,
            'btn-on-dark': onDark,
            [Styles['btn-small']]: small,
            'btn-small': small,
            [Styles['has-badge']]: hasBadge,
            'has-badge': hasBadge,
            [Styles['has-icon']]: hasIcon || loading,
            'has-icon': hasIcon || loading,
            [Styles['is-active']]: active,
            'is-active': active,
            [Styles['is-disabled']]: disabled,
            'is-disabled': disabled,
            [Styles['is-loading']]: loading,
            'is-loading': loading,
        }), id,
        onClick }, attributes), content);
};
Button.defaultProps = {
    active: false,
    badge: null,
    children: '',
    disabled: false,
    group: false,
    icon: null,
    loading: false,
    onClick: () => { },
    onDark: false,
    small: false,
    type: 'primary',
};
export default withNativeProps(Button);
