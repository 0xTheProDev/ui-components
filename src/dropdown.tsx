import React from 'react';
import cn from './utilities/classnames';

import btnStyles from './styles/button.module.scss';
import Styles from './styles/dropdown.module.scss';

interface DropdownProps {
  className?: string;
  initialOpen: boolean;
}

interface DropdownState {
  active: boolean;
}

interface DropdownLinkProps {
  onClick: (e: React.MouseEvent) => void;
}

export const DropdownMenu: React.FunctionComponent = ({ children }) => (
  <ul className={cn('dropdown-menu', Styles['dropdown-menu'])}>{children}</ul>
);

export const DropdownLink: React.FunctionComponent<DropdownLinkProps> = ({
  children,
  onClick,
}) => (
  <a
    role="button list-item"
    onClick={onClick}
    className={cn('dropdown-link', Styles['dropdown-link'])}
  >
    {children}
  </a>
);

export class Dropdown extends React.Component<DropdownProps, DropdownState> {
  public static defaultProps = {
    initialOpen: false,
  };

  public state = {
    active: this.props.initialOpen,
  };

  public componentWillUnmount() {
    document.removeEventListener('click', this.dismissDropdown);
  }

  public render() {
    const { children, className, ...attributes } = this.props;
    const isActive = this.state.active;

    return (
      <div
        role="button"
        className={cn(
          'dropdown',
          Styles.dropdown,
          Styles['dropdown-block'],
          'dropdown-block',
          {
            [btnStyles['is-active']]: isActive,
            'is-active': isActive,
            [Styles['is-active']]: isActive,
          },
          className
        )}
        onClick={this.toggleDropdown}
        {...attributes}
      >
        <div className={cn('dropdown-content', Styles['dropdown-content'])}>
          {children}
        </div>
      </div>
    );
  }

  protected toggleDropdown = (event: React.MouseEvent<HTMLDivElement>) => {
    return this.setState(state => {
      const active = !state.active;

      if (active) {
        document.addEventListener('click', this.dismissDropdown, false);
      }

      return { active };
    });
  };

  private dismissDropdown = () => {
    this.setState({ active: false });
    document.removeEventListener('click', this.dismissDropdown, false);
  };
}
