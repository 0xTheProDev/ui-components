import cn from 'classnames';
import throttle from 'lodash/throttle';
import React, { RefObject, SFC, useCallback, useEffect, useState } from 'react';
import Button from './button';
import Icon from './icon';
import Styles from './styles/scroll-to-top.scss';

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
export const ScrollToTopButton: SFC<ScrollToTopButtonProps> = props => {
  const currentScrollContainer = props.scrollContainerRef
    ? props.scrollContainerRef.current
    : props.scrollContainerElement;
  const { className } = props;
  const [showButton, setButtonState] = useState(false);
  const onScroll = useCallback(
    throttle(
      () => {
        requestAnimationFrame(() => {
          const height = window.innerHeight;
          const scrollPosition = currentScrollContainer
            ? currentScrollContainer.scrollTop
            : 0;
          setButtonState(scrollPosition >= height / 2);
        });
      },
      100,
      { leading: false, trailing: true }
    ),
    [currentScrollContainer]
  );

  const onClick = useCallback(
    () => {
      if (currentScrollContainer) {
        currentScrollContainer.scrollTo({
          behavior: 'smooth',
          left: 0,
          top: 0,
        });
      }
    },
    [currentScrollContainer]
  );

  useEffect(
    () => {
      if (currentScrollContainer) {
        currentScrollContainer.addEventListener('scroll', onScroll);
      }
      return () => {
        if (currentScrollContainer) {
          currentScrollContainer.removeEventListener('scroll', onScroll);
        }
      };
    },
    [currentScrollContainer]
  );

  return (
    <Button
      className={cn('scroll-button', Styles['scroll-button'], {
        [className]: !!className,
        [Styles['is-visible']]: showButton,
        'is-visible': showButton,
      })}
      onClick={onClick}
      type="secondary"
      small
    >
      <Icon type="sort-asc" />
    </Button>
  );
};
