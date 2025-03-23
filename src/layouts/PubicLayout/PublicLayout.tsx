import { FC } from "react"

import { LoginScreen } from "@screens/Login/LoginScreen"
import { useRouter } from "@/hooks/router.hook"
import { AboutScreen } from '@/screens/About/AboutScreen'
import { HomeScreen } from '@/screens/Home/HomeScreen'
import { SignupScreen } from '@/screens/Signup/SignupScreen'
import { PublicRoutes } from './routes'

export const PublicLayout: FC = () => {
    const { currentPath } = useRouter()
    const component = {
        [PublicRoutes.ABOUT]: <AboutScreen />,
        [PublicRoutes.HOME]: <HomeScreen />,
        [PublicRoutes.LOGIN]: <LoginScreen />,
        [PublicRoutes.SIGNUP]: <SignupScreen />
    }[currentPath]

    return (
        <main>{component}</main>
    )
};


