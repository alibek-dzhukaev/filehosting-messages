import { MainLayout } from '@/components/MainLayout/MainLayout';
import { MessageSidebar } from '@/components/MessageSidebar/MessageSidebar';
import { Messenger } from '@/components/Messenger/Messenger';

import styles from './FeedScreen.module.scss';

export const FeedScreen = () => (
  <MainLayout>
    <MessageSidebar />
    <main className={styles.mainContent}>
      <Messenger />
    </main>
  </MainLayout>
);
