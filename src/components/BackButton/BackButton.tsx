import React from 'react';
import styles from './BackButton.module.scss';
import { FaArrowLeft } from 'react-icons/fa';
import { routerService } from '@/services'

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