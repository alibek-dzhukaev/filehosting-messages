import {FormEvent} from 'react';
import styles from './LoginScreen.module.scss';
import {authModel} from '@/models'
import {authFlow} from '@/flows'
import ScreenContainer from '@/components/ScreenContainer/ScreenContainer'
import AuthBox from '@/components/AuthBox/AuthBox'
import {observer} from "mobx-react-lite";

export const LoginScreen = observer(() => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        authFlow.start()
    };

    return (
        <ScreenContainer>
            <AuthBox title='Login'>
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="username">Username</label>
                        <input
                            placeholder="john.doe"
                            type="text"
                            id="username"
                            value={authModel.username}
                            onChange={(e) => authModel.username = e.target.value}
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="password">Password</label>
                        <input
                            placeholder="********"
                            type="password"
                            id="password"
                            value={authModel.password}
                            onChange={(e) => authModel.password = e.target.value}
                            required
                        />
                    </div>
                    <button type="submit" className={styles.submitButton}>
                        Login
                    </button>
                </form>
            </AuthBox>
        </ScreenContainer>
    );
});
