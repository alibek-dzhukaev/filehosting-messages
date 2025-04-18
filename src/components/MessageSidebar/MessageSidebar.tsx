import React from 'react';

import { FaHashtag, FaUserFriends } from 'react-icons/fa';

import styles from './MessageSidebar.module.scss';

export const MessageSidebar: React.FC = () => (
    <aside className={styles.sidebar}>
      <div className={styles.section}>
        <h3 className={styles.sectionHeader}>
          <FaHashtag className={styles.icon} /> Group Channels
        </h3>
        <ul className={styles.list}>
          <li className={styles.listItem}># General</li>
          <li className={styles.listItem}># Random</li>
          <li className={styles.listItem}># Projects</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionHeader}>
          <FaUserFriends className={styles.icon} /> Direct Messages
        </h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>John Doe</li>
          <li className={styles.listItem}>Jane Smith</li>
          <li className={styles.listItem}>Alice Johnson</li>
        </ul>
      </div>
    </aside>
  );
