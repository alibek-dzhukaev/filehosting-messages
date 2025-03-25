import MainLayout from "@components/MainLayout/MainLayout";
import styles from './ProfileScreen.module.scss';
import ProfileSidebar from "@components/ProfileSidebar/ProfileSidebar";
import FileManager from "@components/ProfileContent/FileManager";
import {useRouter} from "@/hooks/router.hook";
import {useEffect, useMemo} from "react";
import {PrivateRoutes} from "@/layouts/PrivateLayout/routes";
import {ProfileSettings} from "@components/ProfileSettings/ProfileSettings";
import {authService} from "@/services";



export const ProfileScreen = () => {

    const {currentPath, router} = useRouter();

    const component = useMemo(() => {
        switch (true) {
            case currentPath.startsWith(PrivateRoutes.PROFILE_SETTINGS):
                return <ProfileSettings />
            case currentPath.startsWith(PrivateRoutes.PROFILE_FILES):
                return <FileManager />
            default:
                router.navigate(PrivateRoutes.PROFILE_FILES)
                return <FileManager />
        }
    }, [currentPath])

    useEffect(() => {
        void authService.getProfile()
            .catch(console.error)
    }, [])

    return (
        <MainLayout>
            <div className={styles.mainLayout}>
               <ProfileSidebar />
                <main className={styles.mainContent}>
                    {component}
                </main>
            </div>
        </MainLayout>
    );
};
