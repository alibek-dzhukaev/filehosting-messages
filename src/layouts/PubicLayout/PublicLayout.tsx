import {FC, ReactNode} from "react";

import styles from './PublicLayout.module.scss';
import {LoginScreen} from "@screens/Login/LoginScreen";
import {useRouter} from "@/hooks/router.hook";

interface Props {
    children: ReactNode;
}

const publicRoutes = {
    LOGIN: '/login',
    SIGNUP: '/signup',
    HOME: '/home',
    ABOUT: '/about',
}

export const PublicLayout: FC<Props> = ({children}) => {

    const {currentPath, router} = useRouter();

    return (
        <div className={styles.publicLayout}>
            {currentPath === publicRoutes.LOGIN && <LoginScreen />}
            {children}
            <div style={{marginTop: '1rem', marginLeft: '3rem'}}>
                <button onClick={() => router.navigate(publicRoutes.LOGIN)}>Login Page</button>
            </div>
        </div>
    );
};


