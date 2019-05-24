import React from 'react';
import Styles from './styles/progress.module.scss';
import cn from './utilities/classnames';

export interface ProgressProps {
  vertical?: boolean;
  children:
    | React.ReactElement<ProgressStageProps>
    | Array<React.ReactElement<ProgressStageProps>>;
  className?: string;
}

export const Progress: React.SFC<ProgressProps> = ({
  children,
  vertical,
  className,
  ...attributes
}) => {
  return (
    <section
      className={cn(
        'progress-container',
        Styles['progress-container'],
        className,
        {
          [Styles['is-vertical']]: vertical,
        }
      )}
      {...attributes}
    >
      <ul className={cn('progress-stages', Styles['progress-stages'])}>
        {children}
      </ul>
    </section>
  );
};

Progress.defaultProps = {
  vertical: false,
};

export interface ProgressStageProps {
  done?: boolean;
  selected?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const ProgressStage: React.SFC<ProgressStageProps> = ({
  children: label,
  done,
  selected,
  className,
  ...attributes
}) => {
  return (
    <li
      className={cn(className, {
        [Styles['is-done']]: done,
        'is-done': done,
        [Styles['is-selected']]: selected,
        'is-selected': selected,
      })}
      {...attributes}
    >
      <label>{label}</label>
    </li>
  );
};

ProgressStage.defaultProps = {
  done: false,
  selected: false,
};
