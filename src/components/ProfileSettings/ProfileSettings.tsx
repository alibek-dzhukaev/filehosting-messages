import React, { useState } from 'react';

import { observer } from 'mobx-react-lite';
import {
  FaBirthdayCake,
  FaEnvelope,
  FaMapMarker,
  FaPhone,
  FaShieldAlt,
  FaUser,
  FaVenusMars,
} from 'react-icons/fa'; // Import icons from react-icons

import { authModel } from '@/models';
import { usersService } from '@/services';

import styles from './ProfileSettings.module.scss';

import type { User } from '@services/users/types';

export const ProfileSettings: React.FC = observer(() => {
  const [user, setUser] = useState<User>(authModel.profile);

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
    void usersService.updateUser(user.id, {
      address: user.address ?? undefined,
      city: user.city ?? undefined,
      email: user.email ?? undefined,
      gender: user.gender ?? undefined,
      roles: user.roles ?? undefined,
      phone: user.phone ?? undefined,
      firstName: user.firstName ?? undefined,
      lastName: user.lastName ?? undefined,
      username: user.username ?? undefined,
      dateOfBirthday: user.dateOfBirthday ?? undefined,
    });
  };

  return (
    <div className={styles.profileSettingsPage}>
      <h1>Profile Settings</h1>
      <form onSubmit={handleSubmit} className={styles.profileForm}>
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
            disabled
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">
            <FaEnvelope /> Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email ?? ''}
            onChange={handleInputChange}
            className={styles.formInput}
          />
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="firstName">
              <FaUser /> First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={user.firstName ?? ''}
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
              value={user.lastName ?? ''}
              onChange={handleInputChange}
              className={styles.formInput}
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="phone">
              <FaPhone /> Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={user.phone ?? ''}
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
              value={user.dateOfBirthday ?? ''}
              onChange={handleInputChange}
              className={styles.formInput}
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="address">
              <FaMapMarker /> Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={user.address ?? ''}
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
              value={user.city ?? ''}
              onChange={handleInputChange}
              className={styles.formInput}
            />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="gender">
            <FaVenusMars /> Gender
          </label>
          <select
            id="gender"
            name="gender"
            value={user.gender ?? ''}
            onChange={handleInputChange}
            className={styles.formInput}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="roles">
            <FaShieldAlt /> Roles
          </label>
          <input
            type="text"
            id="roles"
            name="roles"
            value={user.roles.join(', ')}
            className={styles.formInput}
            disabled
          />
        </div>

        <div className={styles.formActions}>
          <button type="submit" className={styles.saveButton}>
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
});
