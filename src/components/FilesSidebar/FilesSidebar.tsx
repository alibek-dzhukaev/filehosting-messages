import styles from './FilesSidebar.module.scss'

const FilesSidebar = () => {
	return  (
		<aside className={styles.sidebar}>
          <h3 className={styles.sidebarHeader}>Users</h3>
          <ul className={styles.userList}>
            <li className={styles.userItem}>
              <img
                src="https://via.placeholder.com/40" // Placeholder avatar
                alt="User Avatar"
                className={styles.avatar}
              />
              <span className={styles.username}>John Doe</span>
            </li>
            <li className={styles.userItem}>
              <img
                src="https://via.placeholder.com/40"
                alt="User Avatar"
                className={styles.avatar}
              />
              <span className={styles.username}>Jane Smith</span>
            </li>
            <li className={styles.userItem}>
              <img
                src="https://via.placeholder.com/40"
                alt="User Avatar"
                className={styles.avatar}
              />
              <span className={styles.username}>Alice Johnson</span>
            </li>
          </ul>
        </aside>
	)
}

export default FilesSidebar;