import type { FC } from 'react';
import { useMemo } from 'react';

import { useRouter } from '@/hooks/router.hook';
import { AboutScreen } from '@/screens/About/AboutScreen';
import { HomeScreen } from '@/screens/Home/HomeScreen';
import { SignupScreen } from '@/screens/Signup/SignupScreen';
import { LoginScreen } from '@screens/Login/LoginScreen';

import { PublicRoutes } from './routes';

export const PublicLayout: FC = () => {
  const { currentPath, router } = useRouter();

  const component = useMemo(() => {
    switch (true) {
      case currentPath.startsWith(PublicRoutes.ABOUT):
        return <AboutScreen />;
      case currentPath.startsWith(PublicRoutes.LOGIN):
        return <LoginScreen />;
      case currentPath.startsWith(PublicRoutes.SIGNUP):
        return <SignupScreen />;
      default:
        router.navigate(PublicRoutes.HOME);

        return <HomeScreen />;
    }
  }, [currentPath, router]);

  return <main>{component}</main>;
};
