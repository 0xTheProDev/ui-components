import React from 'react';
export interface AccordionPanelTitleTextProps {
    text: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
    badgeColor?: string;
    badgeContent?: string | number;
}
declare const AccordionPanelTitle: React.SFC<AccordionPanelTitleTextProps>;
export default AccordionPanelTitle;
