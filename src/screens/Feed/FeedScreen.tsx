import MainLayout from '@/components/MainLayout/MainLayout'
import Messenger from '@/components/Messenger/Messenger'
import styles from './FeedScreen.module.scss'
import MessageSidebar from '@/components/MessageSidebar/MessageSidebar'

export const FeedScreen = () => {
	return (
		<MainLayout>
			<MessageSidebar />
			<main className={styles.mainContent}>
				<Messenger />
			</main>
		</MainLayout>
	)
}