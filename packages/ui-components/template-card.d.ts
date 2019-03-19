import React from 'react';
import { IconType } from './types/icons';
export declare enum EditorType {
    Code = "code",
    Design = "design"
}
export declare const EditorBadge: React.SFC<{
    type: EditorType;
    codeCopy?: string;
    codeIcon?: IconType;
    designCopy?: string;
    designIcon?: IconType;
}>;
export interface TemplateCardProps {
    renderActions?: () => React.ReactElement<any>;
    label?: string;
    className?: string;
    blank?: boolean;
    thumbnailUrl?: string;
    editorInfo?: any;
    name: string;
    overlayText?: string | React.ReactElement<any>;
    templateId: string;
}
export declare const TemplateCard: React.SFC<TemplateCardProps>;
export default TemplateCard;
