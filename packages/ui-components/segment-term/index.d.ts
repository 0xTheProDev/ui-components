import React, { PureComponent } from 'react';
import SegmentWrapper from './segmentWrapper';
declare type Conjunction = 'and' | 'or';
export interface SegmentTermProps {
    editable?: boolean;
    editing?: boolean;
    hasAddButton?: boolean;
    hasQueryToggle?: boolean;
    hasSeparator?: boolean;
    label?: string;
    onAddButtonClick?: (e: any) => void;
    onDelete?: (e: any) => void;
    onConfirm?: (e: any) => void;
    onEdit?: (e: any) => void;
    onQueryToggle?: (operation: Conjunction) => void;
    queryName?: string;
    queryToggle?: string;
    radios?: boolean;
    renderAlert?: () => React.ReactNode;
    renderInputs?: () => React.ReactNode;
    showConfirm?: boolean;
    title?: string;
    className?: string;
}
export declare class SegmentTerm extends PureComponent<SegmentTermProps> {
    static defaultProps: {
        editable: boolean;
        editing: boolean;
        hasAddButton: boolean;
        hasQueryToggle: boolean;
        hasSeparator: boolean;
        queryToggle: string;
        radios: boolean;
    };
    readonly termControls: React.ReactNode;
    render(): JSX.Element;
}
export { SegmentWrapper };
