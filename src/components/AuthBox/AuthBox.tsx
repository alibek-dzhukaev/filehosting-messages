import React from 'react';

import { routerService } from '@/services';

import { BackButton } from '../BackButton/BackButton';

import styles from './AuthBox.module.scss';

interface AuthBoxProps {
  title: string;
  children: React.ReactNode;
}

export const AuthBox: React.FC<AuthBoxProps> = ({ title, children }) => (
  <div className={styles.authBox}>
    {routerService.canGoBack && <BackButton />}
    <h2>{title}</h2>
    {children}
  </div>
);
