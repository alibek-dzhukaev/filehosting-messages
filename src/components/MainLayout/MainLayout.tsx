import React from 'react';
import styles from './MainLayout.module.scss';
import Header from '../Header/Header';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={styles.mainLayout}>
      <Header />
      <div className={styles.container}>
				{children}
      </div>
    </div>
  );
};

export default MainLayout;