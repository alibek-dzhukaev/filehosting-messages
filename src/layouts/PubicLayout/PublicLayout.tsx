import {FC, ReactNode} from "react";

import {LoginScreen} from "@screens/Login/LoginScreen";
import {useRouter} from "@/hooks/router.hook";
import { AboutScreen } from '@/screens/About/AboutScreen'
import { HomeScreen } from '@/screens/Home/HomeScreen'
import { SignupScreen } from '@/screens/Signup/SignupScreen'

interface Props {
    children: ReactNode;
}

export const enum PublicRoutes {
    LOGIN = '/login',
    SIGNUP = '/signup',
    HOME = '/',
    ABOUT = '/about',
}

export const PublicLayout: FC<Props> = ({children}) => {

    const {currentPath, router} = useRouter();

    const component = {
        [PublicRoutes.ABOUT]: <AboutScreen/>,
        [PublicRoutes.HOME]: <HomeScreen />,
        [PublicRoutes.LOGIN]: <LoginScreen />,
        [PublicRoutes.SIGNUP]: <SignupScreen />
    }[currentPath]

    return (
        <main>{component}</main>
    );
};


