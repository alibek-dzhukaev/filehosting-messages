import React from 'react'
import { FaUser, FaEnvelope, FaFolder, FaSearch } from 'react-icons/fa' // Import icons
import styles from './Header.module.scss'
import { Link } from '../Link/Link'
import { PrivateRoutes } from '@/layouts/PrivateLayout/routes'

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      {/* Left: Pretty Text */}
      <div className={styles.leftSection}>
        <h1 className={styles.title}>File Hosting</h1>
      </div>

      {/* Middle: Search Bar */}
      <div className={styles.middleSection}>
        <div className={styles.searchBar}>
          <FaSearch className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search..."
            className={styles.searchInput}
          />
        </div>
      </div>

      {/* Right: Icon Buttons */}
      <div className={styles.rightSection}>

        <Link to={PrivateRoutes.FEED} className={styles.iconButton}>
          <FaEnvelope className={styles.icon} />
        </Link>
        <Link to={PrivateRoutes.FILES} className={styles.iconButton}>
          <FaFolder className={styles.icon} />
        </Link>
        <Link to={PrivateRoutes.PROFILE} className={styles.iconButton}>
          <FaUser className={styles.icon} />
        </Link>
      </div>
    </header>
  )
}

export default Header