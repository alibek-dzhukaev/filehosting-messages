import React from 'react';
import styles from './Messenger.module.scss';

const Messenger: React.FC = () => {
  return (
    <div className={styles.messenger}>
      {/* Message Display Section */}
      <div className={styles.messageDisplay}>
        <div className={styles.message}>
          <div className={styles.messageAuthor}>John Doe</div>
          <div className={styles.messageText}>Hello! How are you doing today?</div>
          <div className={styles.messageTime}>10:00 AM</div>
        </div>
        <div className={styles.message}>
          <div className={styles.messageAuthor}>Jane Smith</div>
          <div className={styles.messageText}>I'm doing great, thanks for asking!</div>
          <div className={styles.messageTime}>10:05 AM</div>
        </div>
      </div>

      {/* Future Input Section */}
      <div className={styles.inputSection}>
        <div className={styles.inputPlaceholder}>Type your message here...</div>
        <div className={styles.actionButtons}>
          <button className={styles.actionButton}>Send</button>
          <button className={styles.actionButton}>Attach</button>
        </div>
      </div>
    </div>
  );
};

export default Messenger;