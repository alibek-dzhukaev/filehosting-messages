import styles from './FilesSidebar.module.scss'

const FilesSidebar = () => {
	return  (
		<aside className={styles.sidebar}>
          <h3 className={styles.sidebarHeader}>Users</h3>
          <ul className={styles.userList}>
            <li className={styles.userItem}>
              <img
                src="https://masterpiecer-images.s3.yandex.net/578e2ac2973011ee8799c66dc44e86ec:upscaled" // Placeholder avatar
                alt="User Avatar"
                className={styles.avatar}
              />
              <span className={styles.username}>John Doe</span>
            </li>
            <li className={styles.userItem}>
              <img
                src="https://masterpiecer-images.s3.yandex.net/578e2ac2973011ee8799c66dc44e86ec:upscaled"
                alt="User Avatar"
                className={styles.avatar}
              />
              <span className={styles.username}>Jane Smith</span>
            </li>
            <li className={styles.userItem}>
              <img
                src="https://masterpiecer-images.s3.yandex.net/578e2ac2973011ee8799c66dc44e86ec:upscaled"
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