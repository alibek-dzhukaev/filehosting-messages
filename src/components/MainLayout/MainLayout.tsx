import React from 'react';

import { Header } from '../Header/Header';

import styles from './MainLayout.module.scss';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
  <div className={styles.mainLayout}>
    <Header />
    <div className={styles.container}>{children}</div>
  </div>
);
