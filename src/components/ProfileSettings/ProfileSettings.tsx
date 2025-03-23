import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaMapMarker, FaBirthdayCake, FaVenusMars, FaShieldAlt } from 'react-icons/fa'; // Import icons from react-icons
import styles from './ProfileSettings.module.scss';

interface User {
    readonly address: string | null;
    readonly city: string | null;
    readonly dateOfBirthday: string | null;
    readonly email: string | null;
    readonly firstName: string | null;
    readonly gender: string | null;
    readonly id: string;
    readonly lastName: string | null;
    readonly phone: string | null;
    readonly roles: Role[];
    readonly username: string;
}

interface Role {
    id: string;
    name: string;
}

export const ProfileSettings: React.FC = () => {
    // Example user data (replace with actual data from your backend or state)
    const [user, setUser] = useState<User>({
        id: '123',
        username: 'johndoe123',
        email: 'john.doe@example.com',
        firstName: 'John',
        lastName: 'Doe',
        phone: '+1 123-456-7890',
        address: '123 Main St',
        city: 'New York',
        dateOfBirthday: '1990-01-01',
        gender: 'Male',
        roles: [{ id: '1', name: 'User' }],
    });

    // Handle input changes
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('Updated User:', user);
        // Add logic to save the updated user data (e.g., API call)
    };

    return (
        <div className={styles.profileSettingsPage}>
            <h1>Profile Settings</h1>
            <form onSubmit={handleSubmit} className={styles.profileForm}>
                {/* Username */}
                <div className={styles.formGroup}>
                    <label htmlFor="username">
                        <FaUser /> Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={user.username}
                        onChange={handleInputChange}
                        className={styles.formInput}
                        disabled // Username is typically not editable
                    />
                </div>

                {/* Email */}
                <div className={styles.formGroup}>
                    <label htmlFor="email">
                        <FaEnvelope /> Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={user.email || ''}
                        onChange={handleInputChange}
                        className={styles.formInput}
                    />
                </div>

                {/* First Name and Last Name */}
                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <label htmlFor="firstName">
                            <FaUser /> First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={user.firstName || ''}
                            onChange={handleInputChange}
                            className={styles.formInput}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="lastName">
                            <FaUser /> Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={user.lastName || ''}
                            onChange={handleInputChange}
                            className={styles.formInput}
                        />
                    </div>
                </div>

                {/* Phone and Date of Birth */}
                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <label htmlFor="phone">
                            <FaPhone /> Phone
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={user.phone || ''}
                            onChange={handleInputChange}
                            className={styles.formInput}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="dateOfBirthday">
                            <FaBirthdayCake /> Date of Birth
                        </label>
                        <input
                            type="date"
                            id="dateOfBirthday"
                            name="dateOfBirthday"
                            value={user.dateOfBirthday || ''}
                            onChange={handleInputChange}
                            className={styles.formInput}
                        />
                    </div>
                </div>

                {/* Address and City */}
                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <label htmlFor="address">
                            <FaMapMarker /> Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={user.address || ''}
                            onChange={handleInputChange}
                            className={styles.formInput}
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="city">
                            <FaMapMarker /> City
                        </label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={user.city || ''}
                            onChange={handleInputChange}
                            className={styles.formInput}
                        />
                    </div>
                </div>

                {/* Gender */}
                <div className={styles.formGroup}>
                    <label htmlFor="gender">
                        <FaVenusMars /> Gender
                    </label>
                    <select
                        id="gender"
                        name="gender"
                        value={user.gender || ''}
                        onChange={handleInputChange}
                        className={styles.formInput}
                    >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                {/* Roles */}
                <div className={styles.formGroup}>
                    <label htmlFor="roles">
                        <FaShieldAlt /> Roles
                    </label>
                    <input
                        type="text"
                        id="roles"
                        name="roles"
                        value={user.roles.map((role) => role.name).join(', ')}
                        className={styles.formInput}
                        disabled // Roles are typically not editable directly
                    />
                </div>

                {/* Save Button */}
                <div className={styles.formActions}>
                    <button type="submit" className={styles.saveButton}>
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
};
