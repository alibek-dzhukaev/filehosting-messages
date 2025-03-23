import styles from './Message.module.scss'

interface Props {
    imageUrl: string
    author: string
    time: string
    text: string;
}

const Message = ({author, time, imageUrl, text}: Props) => {
    return (
        <div className={styles.message}>
            <div className={styles.avatar}>
                <img src={imageUrl} alt={author} />
            </div>
            <div className={styles.messageContent}>
                <div className={styles.messageHeader}>
                    <div className={styles.messageAuthor}>{author}</div>
                    <div className={styles.messageTime}>{time}</div>
                </div>
                <div className={styles.messageText}>{text}</div>
            </div>
        </div>
    );
};

export default Message;