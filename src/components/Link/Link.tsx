import React from 'react';

import classNames from 'classnames';

import { routerService } from '@/services';

import styles from './Link.module.scss';

interface LinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  isIconButton?: boolean; // Add a prop to indicate if it's an icon button
}

export const Link: React.FC<LinkProps> = ({ to, children, className, isIconButton }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    routerService.navigate(to); // Assuming routerService is defined elsewhere
  };

  return (
    <a
      href={to}
      onClick={handleClick}
      className={classNames(
        styles.link,
        { [styles.iconButton]: isIconButton }, // Apply icon button styles if isIconButton is true
        className,
      )}
    >
      {isIconButton ? (
        <span className={styles.iconWrapper}>{children}</span> // Wrap the icon for consistent sizing
      ) : (
        children
      )}
    </a>
  );
};
