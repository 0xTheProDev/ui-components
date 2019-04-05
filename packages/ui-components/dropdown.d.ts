import React from 'react';
interface DropdownProps {
    className?: string;
    initialOpen: boolean;
}
interface DropdownState {
    active: boolean;
}
interface DropdownLinkProps {
    onClick: (e: React.MouseEvent) => void;
}
export declare const DropdownMenu: React.FunctionComponent;
export declare const DropdownLink: React.FunctionComponent<DropdownLinkProps>;
export declare class Dropdown extends React.Component<DropdownProps, DropdownState> {
    static defaultProps: {
        initialOpen: boolean;
    };
    state: {
        active: boolean;
    };
    componentWillUnmount(): void;
    render(): JSX.Element;
    protected toggleDropdown: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    private dismissDropdown;
}
export {};
