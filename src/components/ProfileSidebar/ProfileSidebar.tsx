import {useState} from 'react';
import {FaEdit, FaFolderOpen, FaInfoCircle} from 'react-icons/fa';
import styles from './ProfileSidebar.module.scss';
import Modal from "@components/Modal/Modal";
import UserInfoModalContent from "@components/UserInfoModalContent/UserInfoModalContent";
import {Link} from "@components/Link/Link";
import {PrivateRoutes} from "@/layouts/PrivateLayout/routes";
import {User} from "@services/users/types";
import {Role} from "@services/auth/types";

const ProfileSidebar = () => {
    const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

    const user: User = {
        id: '1',
        username: 'johndoe123',
        email: 'john.doe@example.com',
        firstName: 'John',
        lastName: 'Doe',
        phone: '+1 123-456-7890',
        address: '123 Main St',
        city: 'New York',
        dateOfBirthday: '1990-01-01',
        gender: 'Male',
        roles: [Role.ADMIN, Role.USER],
    };

    return (
        <aside className={styles.sidebar}>
            <div className={styles.avatar}>
                <img
                    src="https://masterpiecer-images.s3.yandex.net/578e2ac2973011ee8799c66dc44e86ec:upscaled"
                    alt="User Avatar"
                    className={styles.avatarImage}
                />
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
                    <FaFolderOpen  size={24}/>
                </Link>
            </div>
            <div className={styles.userInfo}>
                <h2>{user.firstName} {user.lastName}</h2>
                <p>{user.email}</p>
                <p>Joined: January 2023</p>
            </div>

            <Modal isOpen={isInfoModalOpen} onClose={() => setIsInfoModalOpen(false)}>
                <h2>User Information</h2>
                <UserInfoModalContent user={user} />
            </Modal>
        </aside>
    );
};

export default ProfileSidebar;