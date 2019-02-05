import React, { Component } from 'react';
import { ModalProps } from './utilities/modals';
export interface CenterModalProps extends ModalProps {
    hasX?: boolean;
    large?: boolean;
    modalContainer?: Element;
    onClose: (evt: any) => void;
    open: boolean;
    className?: string;
    renderBody: string | React.ReactNode | (() => React.ReactNode);
    renderFooter?: string | React.ReactNode | (() => React.ReactNode);
    renderHeader?: string | React.ReactNode | (() => React.ReactNode);
    padding?: boolean;
}
export declare class CenterModal extends Component<CenterModalProps> {
    static defaultProps: Partial<CenterModalProps>;
    componentDidUpdate(prevProps: CenterModalProps): void;
    render(): React.ReactPortal;
}
export default CenterModal;
