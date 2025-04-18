import { useEffect, useMemo } from 'react';

import { useRouter } from '@/hooks/router.hook';
import { PrivateRoutes } from '@/layouts/PrivateLayout/routes';
import { authService } from '@/services';
import { FileManager } from '@components/FileManager/FileManager';
import { MainLayout } from '@components/MainLayout/MainLayout';
import { ProfileSettings } from '@components/ProfileSettings/ProfileSettings';
import { ProfileSidebar } from '@components/ProfileSidebar/ProfileSidebar';

import styles from './ProfileScreen.module.scss';

export const ProfileScreen = () => {
  const { currentPath, router } = useRouter();

  const component = useMemo(() => {
    switch (true) {
      case currentPath.startsWith(PrivateRoutes.PROFILE_SETTINGS):
        return <ProfileSettings />;
      case currentPath.startsWith(PrivateRoutes.PROFILE_FILES):
        return <FileManager />;
      default:
        router.navigate(PrivateRoutes.PROFILE_FILES);

        return <FileManager />;
    }
  }, [currentPath, router]);

  useEffect(() => {
    void authService.getProfile().catch(console.error);
  }, []);

  return (
    <MainLayout>
      <div className={styles.mainLayout}>
        <ProfileSidebar />
        <main className={styles.mainContent}>{component}</main>
      </div>
    </MainLayout>
  );
};
