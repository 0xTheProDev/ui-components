import { RefObject, SFC } from 'react';
interface ScrollToTopButtonProps {
    scrollContainerRef?: RefObject<HTMLElement>;
    scrollContainerElement?: HTMLElement;
    className?: string;
}
/**
 * Render a button that will scroll to the top of an html element,
 * given that the top of the html element is scrolled out of view.
 *
 * One of scrollContainerRef or scrollContainerElement must be provided.  If both are provided,
 * scrollContainerRef takes precedence.
 *
 * @param {RefObject<HTMLElement>} scrollContainerRef - (optional) a ref to a scrollable html element
 * @param {HTMLElement} scrollContainerElement - (optional) a scrollable html element
 */
export declare const ScrollToTopButton: SFC<ScrollToTopButtonProps>;
export {};
