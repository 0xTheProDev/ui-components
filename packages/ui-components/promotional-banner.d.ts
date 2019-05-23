import React, { FC } from 'react';
export interface PromotionalBannerProps {
    actions?: React.ReactNode;
    description: React.ReactNode;
    learnMore: React.ReactNode;
    title: React.ReactNode;
    className?: string;
    image?: React.ReactNode;
    onClickX?: () => void;
}
export declare const PromotionalBanner: FC<PromotionalBannerProps>;
