import React from 'react';

import styles from './ScreenContainer.module.scss';

interface ScreenContainerProps {
  children: React.ReactNode;
}

export const ScreenContainer: React.FC<ScreenContainerProps> = ({ children }) => <div className={styles.screenContainer}>{children}</div>;
