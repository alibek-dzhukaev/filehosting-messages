import React from 'react'
import { FaUser, FaEnvelope, FaFolder } from 'react-icons/fa' // Import icons
import styles from './Header.module.scss'
import { Link } from '../Link/Link'
import { PrivateRoutes } from '@/layouts/PrivateLayout/routes'
import Typeahead from "@components/Typeahead/Typeahead";

const Header: React.FC = () => {
    const handleSearch = () => {
        console.log('handle-search')
    }

  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <h1 className={styles.title}>File Hosting</h1>
      </div>

      <div className={styles.middleSection}>
       <Typeahead onSearch={handleSearch} placeholder="Search files, users..." />
      </div>

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