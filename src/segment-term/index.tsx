import React, { PureComponent } from 'react';
import Button from '../button';
import { ButtonList } from '../button-list';
import { Icon } from '../icon';
import ScssVars from '../styles/global/variables.scss';
import Styles from '../styles/segment-term.module.scss';
import ToggleButtons from '../toggle-buttons';
import cn from '../utilities/classnames';
import SegmentWrapper from './segmentWrapper';

type Conjunction = 'and' | 'or';
export interface SegmentTermProps {
  editable?: boolean;
  editing?: boolean;
  hasAddButton?: boolean;
  hasQueryToggle?: boolean;
  hasSeparator?: boolean;
  label?: string;
  onAddButtonClick?: (e: any) => void;
  onDelete?: (e: any) => void;
  onConfirm?: (e: any) => void;
  onEdit?: (e: any) => void;
  onQueryToggle?: (operation: Conjunction) => void;
  queryName?: string;
  queryToggle?: string;
  queryToggleKey?: string;
  radios?: boolean;
  renderAlert?: () => React.ReactNode;
  renderInputs?: () => React.ReactNode;
  showConfirm?: boolean;
  title?: string;
  className?: string;
}

export class SegmentTerm extends PureComponent<SegmentTermProps> {
  public static defaultProps = {
    editable: false,
    editing: false,
    hasAddButton: false,
    hasQueryToggle: false,
    hasSeparator: false,
    queryToggle: 'and',
    radios: false,
  };

  public get termControls(): React.ReactNode {
    const {
      editable,
      editing,
      onDelete,
      onConfirm,
      showConfirm,
      ...attributes
    } = this.props;

    if (editing) {
      return (
        onDelete && (
          <a
            className="btn btn-small btn-trash"
            style={{ cursor: 'pointer', color: ScssVars['slate-60'] }}
            onClick={onDelete}
          >
            <Icon type="trash" />
          </a>
        )
      );
    }

    if (editable) {
      return (
        <Icon
          type="pencil"
          className={cn('segment-term-edit', Styles['segment-term-edit'])}
          style={{ opacity: 1, color: ScssVars['slate-60'] }}
        />
      );
    }

    return null;
  }

  public render() {
    const {
      hasAddButton,
      hasQueryToggle,
      hasSeparator,
      editable,
      editing,
      label,
      onAddButtonClick,
      onEdit,
      onQueryToggle,
      queryName,
      queryToggle,
      radios,
      renderAlert,
      renderInputs,
      title,
      onDelete,
      onConfirm,
      showConfirm,
      className,
      ...attributes
    } = this.props;

    const queryToggleAnd = queryToggle === 'and';

    return (
      <div
        className={cn(
          'segment-term-wrap',
          Styles['segment-term-wrap'],
          className,
          {
            'is-collapsed': !queryToggleAnd,
            [Styles['is-collapsed']]: !queryToggleAnd,
          }
        )}
        {...attributes}
      >
        {title && (
          <p className={cn('segment-term-title', Styles['segment-term-title'])}>
            {title}
          </p>
        )}
        <div
          className={cn('segment-term', Styles['segment-term'], {
            // Double class names to keep unhashed classes for styleguide
            [Styles['has-alert']]: !!renderAlert,
            'has-alert': !!renderAlert,
            [Styles['has-radios']]: radios,
            'has-radios': radios,
            [Styles['has-separator']]: hasSeparator,
            'has-separator': hasSeparator,
            [Styles['is-editable']]: editing,
            'is-editable': editing,
            [Styles['is-live']]: !editable,
            'is-live': !editable,
          })}
          onClick={editable && !editing ? onEdit : undefined}
        >
          {editing && renderInputs && renderInputs()}
          {!editing && (
            <p>
              {`${label} `}
              <strong>{queryName}</strong>
            </p>
          )}
          {this.termControls}
          {renderAlert && renderAlert()}
        </div>
        {hasQueryToggle && (
          <div
            className={cn('segment-term-switch', Styles['segment-term-switch'])}
            key={this.props.queryToggleKey}
          >
            <ToggleButtons
              keys={['and', 'or']}
              selectedKey={this.props.queryToggle}
              onChange={(event: any, key: Conjunction) => onQueryToggle(key)}
            >
              {(and, or) => (
                <>
                  <Button {...and} small type="group-item">
                    AND
                  </Button>
                  <Button {...or} small type="group-item">
                    OR
                  </Button>
                </>
              )}
            </ToggleButtons>
          </div>
        )}
        {hasAddButton && (
          <ButtonList>
            <Button type="secondary" icon="plus" onClick={onAddButtonClick}>
              Add Condition
            </Button>
          </ButtonList>
        )}
      </div>
    );
  }
}

export { SegmentWrapper };
