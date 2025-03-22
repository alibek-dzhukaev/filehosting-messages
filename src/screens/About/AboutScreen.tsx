import { Link } from '@components/Link/Link';
import styles from './AboutScreen.module.scss';

export const AboutScreen = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutContent}>
        <h1>About Our Messaging Platform</h1>
        <p>
          Our platform is designed to help you stay connected with your friends, family, and colleagues through seamless
          direct messaging and group channels. Whether you're collaborating on a project or just catching up, we've got
          you covered.
        </p>
        <p>
          With features like real-time messaging, file sharing, and customizable group channels, our platform makes
          communication easy and efficient.
        </p>
        <Link to="/" className={styles.backLink}>
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};
