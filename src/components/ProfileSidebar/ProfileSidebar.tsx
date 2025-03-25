import { useState } from 'react';
import { FaEdit, FaFolderOpen, FaInfoCircle } from 'react-icons/fa';
import styles from './ProfileSidebar.module.scss';
import Modal from '@components/Modal/Modal';
import UserInfoModalContent from '@components/UserInfoModalContent/UserInfoModalContent';
import { Link } from '@components/Link/Link';
import { PrivateRoutes } from '@/layouts/PrivateLayout/routes';
import {useRouter} from "@/hooks/router.hook";
import {authModel} from "@/models";
import classNames from "classnames";
import {authFlow} from "@/flows";
import {BiLogOutCircle} from "react-icons/bi";

const ProfileSidebar = () => {
    const {currentPath} = useRouter()
    const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
    const [profileImage, setProfileImage] = useState<string>(
        'https://masterpiecer-images.s3.yandex.net/578e2ac2973011ee8799c66dc44e86ec:upscaled'
    );

    const showEditAvatarButton = currentPath.startsWith(PrivateRoutes.PROFILE_SETTINGS)

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                if (e.target?.result) {
                    setProfileImage(e.target.result as string);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <aside className={styles.sidebar}>
            <div className={styles.avatar}>
                <img
                    src={profileImage}
                    alt="User Avatar"
                    className={styles.avatarImage}
                />
                {showEditAvatarButton && (
                    <label htmlFor="profile-image-upload" className={styles.avatarEditButton}>
                        <FaEdit className={styles.editIcon} />
                        <input
                            id="profile-image-upload"
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className={styles.fileInput}
                        />
                    </label>
                )}
            </div>
            <div className={styles.iconButtonContainer}>
                <Link
                    className={`${styles.iconButton} ${styles.pulse}`}
                    to={PrivateRoutes.PROFILE_SETTINGS}
                    aria-label="Edit Profile"
                    isIconButton
                >
                    <FaEdit />
                </Link>
                <button
                    className={`${styles.iconButton} ${styles.pulse}`}
                    onClick={() => setIsInfoModalOpen(true)}
                    aria-label="User Information"
                >
                    <FaInfoCircle />
                </button>
                <Link
                    to={PrivateRoutes.PROFILE_FILES}
                    className={`${styles.iconButton} ${styles.pulse}`}
                    aria-label="Files Hosting"
                    isIconButton
                >
                    <FaFolderOpen size={24} />
                </Link>
            </div>
            <div className={styles.userInfo}>
                <h2>{authModel.profile.firstName} {authModel.profile.lastName}</h2>
                <p>{authModel.profile.email}</p>
                <p>{authModel.profile.username}</p>
            </div>

            <button
                className={classNames(styles.iconButton, styles.pulse, styles.logout)}
                aria-label="logout"
                onClick={() => authFlow.invalidateAuth()}
            >
                <BiLogOutCircle />
            </button>

            <Modal isOpen={isInfoModalOpen} onClose={() => setIsInfoModalOpen(false)}>
                <h2>User Information</h2>
                <UserInfoModalContent user={authModel.profile} />
            </Modal>
        </aside>
    );
};

export default ProfileSidebar;