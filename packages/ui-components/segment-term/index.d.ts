import React, { PureComponent } from 'react';
import SegmentWrapper from './segmentWrapper';
export interface SegmentTermProps {
    editable?: boolean;
    editing?: boolean;
    hasAddButton?: boolean;
    hasSeparator?: boolean;
    label?: string;
    onAddButtonClick?: (e: any) => void;
    onDelete?: (e: any) => void;
    onConfirm?: (e: any) => void;
    onEdit?: (e: any) => void;
    queryName?: string;
    radios?: boolean;
    renderAlert?: () => React.ReactNode;
    renderInputs?: () => React.ReactNode;
    showConfirm?: boolean;
    title: string;
    className?: string;
}
export declare class SegmentTerm extends PureComponent<SegmentTermProps> {
    static defaultProps: {
        editable: boolean;
        editing: boolean;
        hasAddButton: boolean;
        hasSeparator: boolean;
        radios: boolean;
    };
    readonly termControls: React.ReactNode;
    render(): JSX.Element;
}
export { SegmentWrapper };
