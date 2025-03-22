import React, { useEffect, useState } from 'react';
import styles from './ErrorNotification.module.scss';

interface ErrorNotificationProps {
  message: string;
  duration?: number;
  onClose: () => void;
}

const ErrorNotification: React.FC<ErrorNotificationProps> = ({ message, duration = 5000, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (duration) {
      const timer = setTimeout(() => {
        setVisible(false);
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  if (!visible) return null;

  return (
    <div className={styles.errorNotification}>
      <div className={styles.message}>{message}</div>
      <button className={styles.closeButton} onClick={() => setVisible(false)}>
        &times;
      </button>
    </div>
  );
};

export default ErrorNotification;