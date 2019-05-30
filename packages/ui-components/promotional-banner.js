import React from 'react';
import cn from './utilities/classnames';
import Icon from './icon';
import Styles from './styles/promotional-banner.module.scss';
export const PromotionalBanner = ({ actions, className, learnMore, title, description, onClickX, image, }) => {
    return (React.createElement("div", { className: cn({ [className]: !!className }, Styles.banner, 'promotional-banner-wrap') },
        React.createElement("div", { className: Styles['centered-content'] },
            React.createElement("div", { className: cn(Styles['image-wrap'], 'image-wrap') }, image),
            React.createElement("div", { className: Styles['main-content'] },
                React.createElement("div", null,
                    React.createElement("h1", null, title),
                    React.createElement("p", null, description)),
                React.createElement("div", { className: cn(Styles.actions, 'promotional-banner-actions') },
                    learnMore && (React.createElement("span", { className: Styles['learn-more'] }, learnMore)),
                    actions))),
        onClickX && React.createElement(Icon, { type: "x", onClick: onClickX })));
};
