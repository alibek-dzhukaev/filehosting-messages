import type { FormEvent } from 'react';
import { useState } from 'react';

import { observer } from 'mobx-react-lite';

import { AuthBox } from '@/components/AuthBox/AuthBox';
import { ErrorNotification } from '@/components/ErrorNotification/ErrorNotification';
import { Link } from '@/components/Link/Link';
import { ScreenContainer } from '@/components/ScreenContainer/ScreenContainer';
import { signupFlow } from '@/flows';
import { signupModel } from '@/models';

import styles from './SignupScreen.module.scss';

export const SignupScreen = observer(() => {
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (signupModel.password !== signupModel.confirmPassword) {
      setError('Passwords do not match!');

      return;
    }
    signupFlow.start().catch(console.error);
  };

  const clearError = () => {
    setError(null);
  };

  return (
    <ScreenContainer>
      <AuthBox title="Sign Up">
        <form onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={signupModel.username}
              onChange={(event) => (signupModel.username = event.target.value)}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={signupModel.password}
              onChange={(event) => (signupModel.password = event.target.value)}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={signupModel.confirmPassword}
              onChange={(e) => (signupModel.confirmPassword = e.target.value)}
              required
            />
          </div>
          <button type="submit" className={styles.submitButton} disabled={signupModel.isLoading}>
            Sign Up
          </button>
        </form>
        <div className={styles.loginLink}>
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </AuthBox>
      {error && <ErrorNotification message={error} onClose={clearError} />}
    </ScreenContainer>
  );
});
