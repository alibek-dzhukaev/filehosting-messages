import React, { useState } from 'react';

import { FaDownload, FaTrash, FaEllipsisV } from 'react-icons/fa'; // Import icons

import styles from './FileCard.module.scss';

interface FileCardProps {
  file: {
    id: number;
    name: string;
    type: string;
    size: string;
    thumbnail: string;
  };
}

export const FileCard: React.FC<FileCardProps> = ({ file }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={styles.fileCard}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* File Thumbnail */}
      <img src={file.thumbnail} alt={file.name} className={styles.thumbnail} />

      {/* File Details */}
      <div className={styles.details}>
        <h4 className={styles.name}>{file.name}</h4>
        <p className={styles.meta}>{`${file.type} • ${file.size}`}</p>
      </div>

      {/* Action Buttons (Visible on Hover) */}
      {isHovered && (
        <div className={styles.actionButtons}>
          <button className={styles.actionButton}>
            <FaDownload className={styles.icon} />
          </button>
          <button className={styles.actionButton}>
            <FaTrash className={styles.icon} />
          </button>
          <button className={styles.actionButton}>
            <FaEllipsisV className={styles.icon} />
          </button>
        </div>
      )}
    </div>
  );
};
