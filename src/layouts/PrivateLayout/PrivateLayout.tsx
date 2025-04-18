import type { FC } from 'react';
import { useMemo } from 'react';

import { observer } from 'mobx-react-lite';

import { useRouter } from '@/hooks/router.hook';
import { FeedScreen } from '@/screens/Feed/FeedScreen';
import { FileHosting } from '@/screens/FileHosting/FileHosting';
import { ProfileScreen } from '@screens/Profile/ProfileScreen';

import { PrivateRoutes } from './routes';

export const PrivateLayout: FC = observer(() => {
  const { currentPath, router } = useRouter();
  const component = useMemo(() => {
    switch (true) {
      case currentPath.startsWith(PrivateRoutes.FEED):
        return <FeedScreen />;
      case currentPath.startsWith(PrivateRoutes.FILES):
        return <FileHosting />;
      case currentPath.startsWith(PrivateRoutes.PROFILE):
        return <ProfileScreen />;
      default:
        router.navigate(PrivateRoutes.FEED);

        return <FeedScreen />;
    }
  }, [currentPath, router]);

  return <main>{component}</main>;
});
