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
import cn from './utilities/classnames';
import btnStyles from './styles/button.module.scss';
import Styles from './styles/dropdown.module.scss';
export const DropdownMenu = ({ children }) => (React.createElement("ul", { className: cn('dropdown-menu', Styles['dropdown-menu']) }, children));
export const DropdownLink = ({ children, onClick, }) => (React.createElement("a", { role: "button list-item", onClick: onClick, className: cn('dropdown-link', Styles['dropdown-link']) }, children));
export class Dropdown extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            active: this.props.initialOpen,
        };
        this.toggleDropdown = (event) => {
            return this.setState(state => {
                const active = !state.active;
                if (active) {
                    document.addEventListener('click', this.dismissDropdown, false);
                }
                return { active };
            });
        };
        this.dismissDropdown = () => {
            this.setState({ active: false });
            document.removeEventListener('click', this.dismissDropdown, false);
        };
    }
    componentWillUnmount() {
        document.removeEventListener('click', this.dismissDropdown);
    }
    render() {
        const _a = this.props, { children, className } = _a, attributes = __rest(_a, ["children", "className"]);
        const isActive = this.state.active;
        return (React.createElement("div", Object.assign({ role: "button", className: cn('dropdown', Styles.dropdown, Styles['dropdown-block'], 'dropdown-block', {
                [btnStyles['is-active']]: isActive,
                'is-active': isActive,
                [Styles['is-active']]: isActive,
            }, className), onClick: this.toggleDropdown }, attributes),
            React.createElement("div", { className: cn('dropdown-content', Styles['dropdown-content']) }, children)));
    }
}
Dropdown.defaultProps = {
    initialOpen: false,
};
