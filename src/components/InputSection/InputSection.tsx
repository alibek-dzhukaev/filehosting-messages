import React, { useState } from 'react';

import { FaPaperPlane } from 'react-icons/fa'; // Import send icon

import styles from './InputSection.module.scss';

export const InputSection: React.FC = () => {
    const [message, setMessage] = useState<string>('');

    return (
        <div className={styles.inputSection}>
            {/* Input Field */}
            <input
                type="text"
                placeholder="Type your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={styles.inputField}
            />

            {/* Send Button */}
            <button className={styles.sendButton}>
                <FaPaperPlane className={styles.buttonIcon} />
            </button>
        </div>
    );
};
