import React from 'react';
import cn from '../utilities/classnames';
import Styles from './accordion.module.scss';
export const AccordionTable = ({ caretLeft, children, className, editor, large, list, }) => {
    return (React.createElement("div", { className: cn('accordion-wrapper', Styles['accordion-wrapper'], className, {
            [Styles['accordion-caret-left']]: caretLeft,
            'accordion-caret-left': caretLeft,
            [Styles['accordion-large']]: large,
            'accordion-large': large,
            [Styles['accordion-list']]: list,
            'accordion-list': list,
            [Styles['is-editor']]: editor,
            'is-editor': editor,
        }) }, children));
};
