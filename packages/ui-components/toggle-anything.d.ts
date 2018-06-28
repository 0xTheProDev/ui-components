/// <reference types="react" />
import React from 'react';
export interface ToggleAnythingProps {
    keys: Array<string>;
    selectedKey?: string;
    children: (...arr: Array<AnythingKey>) => React.ReactNode;
    onChange?: (event: Event, key: string) => void;
}
export interface ToggleAnythingState {
    selectedKey: string;
}
export interface AnythingKey {
    active: boolean;
    key: string;
    onClick: (event: Event) => void;
}
export default class ToggleAnything extends React.Component<ToggleAnythingProps, ToggleAnythingState> {
    constructor(props: ToggleAnythingProps);
    render(): React.ReactNode;
}
