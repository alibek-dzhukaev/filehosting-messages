import React from 'react'

import { FaUser, FaEnvelope, FaPhone, FaMapMarker, FaBirthdayCake, FaVenusMars, FaShieldAlt } from 'react-icons/fa';

import styles from  './UserInfoModalContent.module.scss'

import type {User} from "@services/users/types";

interface UserInfoModalContentProps {
    user: User
}

export const UserInfoModalContent: React.FC<UserInfoModalContentProps> = ({ user }) => (
        <div className={styles.userDetailsGrid}>
            <div className={styles.detailItem}>
                <FaUser className={styles.detailIcon} />
                <div>
                    <strong>Username:</strong>
                    <p>{user.username}</p>
                </div>
            </div>
            <div className={styles.detailItem}>
                <FaUser className={styles.detailIcon} />
                <div>
                    <strong>First name:</strong>
                    <p>{user.firstName}</p>
                </div>
            </div>
            <div className={styles.detailItem}>
                <FaUser className={styles.detailIcon} />
                <div>
                    <strong>Last name:</strong>
                    <p>{user.lastName}</p>
                </div>
            </div>
            <div className={styles.detailItem}>
                <FaEnvelope className={styles.detailIcon} />
                <div>
                    <strong>Email:</strong>
                    <p>{user.email}</p>
                </div>
            </div>
            <div className={styles.detailItem}>
                <FaPhone className={styles.detailIcon} />
                <div>
                    <strong>Phone:</strong>
                    <p>{user.phone}</p>
                </div>
            </div>
            <div className={styles.detailItem}>
                <FaMapMarker className={styles.detailIcon} />
                <div>
                    <strong>Address:</strong>
                    <p>{user.address}, {user.city}, {user.city}</p>
                </div>
            </div>
            <div className={styles.detailItem}>
                <FaBirthdayCake className={styles.detailIcon} />
                <div>
                    <strong>Date of Birth:</strong>
                    <p>{user.dateOfBirthday}</p>
                </div>
            </div>
            <div className={styles.detailItem}>
                <FaVenusMars className={styles.detailIcon} />
                <div>
                    <strong>Gender:</strong>
                    <p>{user.gender}</p>
                </div>
            </div>
            <div className={styles.detailItem}>
                <FaShieldAlt className={styles.detailIcon} />
                <div>
                    <strong>Roles:</strong>
                    <p>{user.roles.join(', ')}</p>
                </div>
            </div>
        </div>
    );
