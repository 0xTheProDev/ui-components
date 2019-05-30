import React, { FC } from 'react';
import cn from './utilities/classnames';

import Icon from './icon';
import Styles from './styles/promotional-banner.module.scss';

export interface PromotionalBannerProps {
  actions?: React.ReactNode;
  description: React.ReactNode;
  learnMore: React.ReactNode;
  title: React.ReactNode;
  className?: string;
  image?: React.ReactNode;
  onClickX?: () => void;
}

export const PromotionalBanner: FC<PromotionalBannerProps> = ({
  actions,
  className,
  learnMore,
  title,
  description,
  onClickX,
  image,
}) => {
  return (
    <div
      className={cn(
        { [className]: !!className },
        Styles.banner,
        'promotional-banner-wrap'
      )}
    >
      <div className={Styles['centered-content']}>
        <div className={cn(Styles['image-wrap'], 'image-wrap')}>{image}</div>
        <div className={Styles['main-content']}>
          <div>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
          <div className={cn(Styles.actions, 'promotional-banner-actions')}>
            {learnMore && (
              <span className={Styles['learn-more']}>{learnMore}</span>
            )}
            {actions}
          </div>
        </div>
      </div>
      {onClickX && <Icon type="x" onClick={onClickX} />}
    </div>
  );
};
