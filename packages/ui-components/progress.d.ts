/// <reference types="react" />
import React from 'react';
export interface ProgressProps {
    vertical?: boolean;
    children: React.ReactElement<ProgressStageProps> | Array<React.ReactElement<ProgressStageProps>>;
}
export declare const Progress: React.SFC<ProgressProps>;
export interface ProgressStageProps {
    done?: boolean;
    selected?: boolean;
    children: string;
}
export declare const ProgressStage: React.SFC<ProgressStageProps>;
