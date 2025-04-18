import React from 'react';

import { FaArrowLeft } from 'react-icons/fa';

import { routerService } from '@/services'

import styles from './BackButton.module.scss';


export const BackButton: React.FC = () => {
  const handleClick = () => {
    routerService.goBack(); 
  };

  return (
    <button onClick={handleClick} className={styles.backButton}>
      <FaArrowLeft /> 
    </button>
  );
};