import React from 'react';
import BlankTemplateImage from './BlankTemplateImage';
import Icon from './icon';
import Styles from './styles/template-card.module.scss';
import { IconType } from './types/icons';
import cn from './utilities/classnames';

export enum EditorType {
  Code = 'code',
  Design = 'design',
}

export const EditorBadge: React.SFC<{
  type: EditorType;
  codeCopy?: string;
  codeIcon?: IconType;
  designCopy?: string;
  designIcon?: IconType;
}> = props => {
  let iconType = null;
  let editorCopy = null;

  if (props.type === EditorType.Code) {
    iconType = props.codeIcon || 'editor-code';
    editorCopy = props.codeCopy || 'Code Editor';
  } else if (props.type === EditorType.Design) {
    iconType = props.designIcon || 'editor-design';
    editorCopy = props.designCopy || 'Design Editor';
  }

  return props.type ? (
    <p className={cn('editor-type', Styles['editor-type'])}>
      {iconType && <Icon type={iconType as IconType} />}
      {editorCopy}
    </p>
  ) : null;
};

export interface TemplateCardProps {
  renderActions?: () => React.ReactElement<any>;
  label?: string;
  className?: string;
  blank?: boolean;
  thumbnailUrl?: string;
  editorInfo?: any;
  name: string;
  overlayText?: string | React.ReactElement<any>;
  templateId: string;
}

export const TemplateCard: React.SFC<TemplateCardProps> = ({
  renderActions = null,
  children,
  className,
  blank = false,
  thumbnailUrl = '',
  editorInfo = '',
  name,
  templateId,
  overlayText = null,
  ...attributes
}) => (
  <div
    className={cn('template-wrap', Styles['template-wrap'], className)}
    {...attributes}
  >
    <div
      className={cn(
        'thumb',
        Styles.thumb,
        blank ? ['is-blank', Styles['is-blank']] : ''
      )}
    >
      {!blank ? (
        <img src={thumbnailUrl} alt="Template Image" />
      ) : (
        BlankTemplateImage
      )}
      <div className={cn('btn-list', Styles['btn-list'])}>{children}</div>
      {overlayText && (
        <div className={cn('overlay-text', Styles['overlay-text'])}>
          {overlayText}
        </div>
      )}
    </div>
    <div
      className={cn('template-card-actions', Styles['template-card-actions'])}
    >
      <p className="is-size-h4">{name}</p>
      {renderActions && renderActions()}
    </div>
    {typeof editorInfo === 'string' ? (
      <EditorBadge type={editorInfo as EditorType} />
    ) : (
      <div className={cn('editor-type', Styles['editor-type'])}>
        {editorInfo}
      </div>
    )}
  </div>
);

export default TemplateCard;
