import MainLayout from "@components/MainLayout/MainLayout";
import styles from './ProfileScreen.module.scss';
import ProfileSidebar from "@components/ProfileSidebar/ProfileSidebar";
import FileManager from "@components/ProfileContent/FileManager";
import {useRouter} from "@/hooks/router.hook";
import {useMemo} from "react";
import {PrivateRoutes} from "@/layouts/PrivateLayout/routes";
import {ProfileSettings} from "@components/ProfileSettings/ProfileSettings";



export const ProfileScreen = () => {

    const {currentPath} = useRouter();

    const component = useMemo(() => {
        switch (true) {
            case currentPath.startsWith(PrivateRoutes.PROFILE_SETTINGS):
                return <ProfileSettings />
            case currentPath.startsWith(PrivateRoutes.PROFILE_FILES):
                return <FileManager />
        }
    }, [currentPath])

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
