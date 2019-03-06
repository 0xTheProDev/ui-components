import React from 'react';
import Styles from './styles/loader.module.scss';
import cn from './utilities/classnames';

export interface FragmentLoaderProps {
  centered?: boolean;
  className?: string;
  large?: boolean;
  small?: boolean;
}

export const FragmentLoader: React.SFC<FragmentLoaderProps> = ({
  className,
  centered,
  large,
  small,
  ...attributes
}) => {
  let size = 10;
  if (large) {
    size *= 2;
  } else if (small) {
    size /= 2;
  }

  return (
    <svg
      className={cn('fragment-loader', Styles['fragment-loader'], className, {
        [Styles['is-centered']]: centered,
        'is-centered': centered,
        [Styles['is-large']]: large,
        'is-large': large,
        [Styles['is-small']]: small,
        'is-small': small,
      })}
      {...attributes}
    >
      <rect
        className={cn(
          'fragment-square',
          Styles['fragment-square'],
          'left',
          Styles.left
        )}
        width={size}
        height={size}
      />
      <rect
        className={cn(
          'fragment-square',
          Styles['fragment-square'],
          'middle',
          Styles.middle
        )}
        width={size}
        height={size}
      />
      <rect
        className={cn(
          'fragment-square',
          Styles['fragment-square'],
          'right',
          Styles.right
        )}
        width={size}
        height={size}
      />
    </svg>
  );
};

export default FragmentLoader;
