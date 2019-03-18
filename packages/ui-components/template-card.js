var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React from 'react';
import BlankTemplateImage from './BlankTemplateImage';
import Icon from './icon';
import Styles from './styles/template-card.module.scss';
import cn from './utilities/classnames';
export var EditorType;
(function (EditorType) {
    EditorType["Code"] = "code";
    EditorType["Design"] = "design";
})(EditorType || (EditorType = {}));
export const EditorBadge = props => {
    let iconType = null;
    let editorCopy = null;
    if (props.type === EditorType.Code) {
        iconType = props.codeIcon || 'editor-code';
        editorCopy = props.codeCopy || 'Code Editor';
    }
    else if (props.type === EditorType.Design) {
        iconType = props.designIcon || 'editor-design';
        editorCopy = props.designCopy || 'Design Editor';
    }
    return props.type ? (React.createElement("p", { className: cn('editor-type', Styles['editor-type']) },
        iconType && React.createElement(Icon, { type: iconType }),
        editorCopy)) : null;
};
export const TemplateCard = (_a) => {
    var { renderActions = null, children, className, blank = false, thumbnailUrl = '', editorInfo = '', name, templateId, overlayText = null } = _a, attributes = __rest(_a, ["renderActions", "children", "className", "blank", "thumbnailUrl", "editorInfo", "name", "templateId", "overlayText"]);
    return (React.createElement("div", Object.assign({ className: cn('template-wrap', Styles['template-wrap'], className) }, attributes),
        React.createElement("div", { className: cn('thumb', Styles.thumb, blank ? ['is-blank', Styles['is-blank']] : '') },
            !blank ? (React.createElement("img", { src: thumbnailUrl, alt: "Template Image" })) : (BlankTemplateImage),
            React.createElement("div", { className: cn('btn-list', Styles['btn-list']) }, children),
            overlayText && (React.createElement("div", { className: cn('overlay-text', Styles['overlay-text']) }, overlayText))),
        React.createElement("div", { className: cn('template-card-actions', Styles['template-card-actions']) },
            React.createElement("p", { className: "is-size-h4" }, name),
            renderActions && renderActions()),
        typeof editorInfo === 'string' ? (React.createElement(EditorBadge, { type: editorInfo })) : (React.createElement("div", { className: cn('editor-type', Styles['editor-type']) }, editorInfo))));
};
export default TemplateCard;
