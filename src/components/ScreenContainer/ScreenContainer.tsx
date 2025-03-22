import React from 'react';
import styles from './ScreenContainer.module.scss';

interface ScreenContainerProps {
  children: React.ReactNode;
}

const ScreenContainer: React.FC<ScreenContainerProps> = ({ children }) => {
  return <div className={styles.screenContainer}>{children}</div>;
};

export default ScreenContainer;