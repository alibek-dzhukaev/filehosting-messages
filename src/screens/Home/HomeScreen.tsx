import { Link } from '@/components/Link/Link';

import styles from './HomeScreen.module.scss';

export const HomeScreen = () => (
  <div className={styles.landingContainer}>
    <div className={styles.heroSection}>
      <h1>Welcome to Our File Hosting Platform</h1>
      <p>Connect with your friends and colleagues through direct messages and group channels.</p>
      <div className={styles.ctaButtons}>
        <Link to="/login" className={styles.ctaButton}>
          Login
        </Link>
        <Link to="/signup" className={styles.ctaButton}>
          Sign Up
        </Link>
      </div>
      <Link to="/about" className={styles.aboutLink}>
        Learn More About Us
      </Link>
    </div>
  </div>
);
