import React, { createContext, Fragment } from 'react';

import cn from './utilities/classnames';

import DropdownButton from './dropdown-button';
import Icon from './icon';
import Styles from './styles/actions.module.scss';
import EmailCardStyles from './styles/email-card.module.scss';

import { IconType } from './types/icons';

// using Children.map to attach this prop is problematic because we
// may wish to render <Link> elements as opposed to <Action> elements
// as children, or provide expressions which evaluate to false as children.
const { Provider, Consumer } = createContext({ showTitle: true });

export interface ActionsProps {
  className?: string;
  vertical?: boolean;
  inEmailCard?: boolean;
}

export const Actions: React.SFC<ActionsProps> = ({
  children,
  className,
  inEmailCard,
  vertical,
  ...attributes
}) => (
  <div
    className={cn(
      {
        actions: !inEmailCard,
        [Styles.actions]: !inEmailCard,
        [EmailCardStyles['email-row-actions']]: inEmailCard,
        'email-row-actions': inEmailCard,
      },
      className
    )}
    {...attributes}
  >
    <Provider value={{ showTitle: vertical }}>
      {vertical ? (
        <DropdownButton gear icon="ellipsis-vertical">
          {children}
        </DropdownButton>
      ) : (
        <Fragment>
          <Icon type="ellipsis" />
          <div className="action-icons">{children}</div>
        </Fragment>
      )}
    </Provider>
  </div>
);

export const ActionsCell: React.SFC<ActionsProps> = ({
  children,
  className,
  ...attributes
}) => (
  <Provider
    value={{ showTitle: false /* vertical not yet supported in tables */ }}
  >
    <td className={cn('actions', className)} {...attributes}>
      <Icon type="ellipsis" />
      <div className="action-icons">{children}</div>
    </td>
  </Provider>
);

export interface ActionProps {
  title: string;
  icon: IconType;
  onClick: (event: any) => void;
}

export const Action: React.SFC<ActionProps> = ({
  title,
  icon,
  onClick: handleClick,
  ...attributes
}) => {
  const hiddenTitleTooltipAttributes = {
    'data-tooltip': title,
    'data-tooltip-pos': 'up',
  };

  return (
    <Consumer>
      {({ showTitle }) => (
        <span
          {...(showTitle ? {} : hiddenTitleTooltipAttributes)}
          onClick={handleClick}
          {...attributes}
        >
          <Icon type={icon} />
          {showTitle && title}
        </span>
      )}
    </Consumer>
  );
};

export default Actions;
