import React from 'react';
import styles from './Messenger.module.scss';
import Message from "@components/Message/Message";
import InputSection from "@components/InputSection/InputSection";

const Messenger: React.FC = () => {
  return (
    <div className={styles.messenger}>
      {/* Message Display Section */}
      <div className={styles.messageDisplay}>
        <Message
          imageUrl="https://render.fineartamerica.com/images/rendered/default/poster/5.5/8/break/images/artworkimages/medium/3/beautiful-busty-girl-mihai-b.jpg"
          author="John Doe"
          time="10:00 AM"
          text="Hello! How are you doing today?"
        />
        <Message
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1eSwNV5lWYP_DW7e_PWFQFlELSRM8gOKGjQ&s"
            author="Jane Smith"
            time="10:05 AM"
            text="I'm doing great, thanks for asking!"
        />
      </div>

      {/* Future Input Section */}
      <InputSection />
    </div>
  );
};

export default Messenger;