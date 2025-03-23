import {FC, useState, useEffect, useCallback} from 'react';
import styles from './FileHosting.module.scss';
import MainLayout from '@/components/MainLayout/MainLayout'
import FilesSidebar from '@/components/FilesSidebar/FilesSidebar'
import useInfiniteScroll from '@/hooks/infinite-scroll.hook'
import FileCard from '@/components/FileCard/FileCard'

interface File {
  id: string;
  name: string;
  type: string;
  size: string;
  thumbnail: string;
}

export const FileHosting: FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [page, setPage] = useState(1);

  const loadMoreFiles = useCallback(async () => {
    const newFiles = Array.from({ length: 10 }, (_, i) => ({
      id: `${page}-${i}`,
      name: `File ${page}-${i}`,
      type: 'Document',
      size: '1.2MB',
      thumbnail: `https://via.placeholder.com/150?text=File+${page}-${i}`,
    }));

    setFiles((prev) => [...prev, ...newFiles]);
    setPage((prev) => prev + 1);
  }, [page]);

  const { isFetching } = useInfiniteScroll(loadMoreFiles);

  useEffect(() => {
    loadMoreFiles(); // Load initial files
  }, [loadMoreFiles]);


  return (
    <MainLayout>
      <div className={styles.fileHosting}>
        <FilesSidebar />

        <main className={styles.mainContent}>
          <div className={styles.fileList}>
            {files.map((file) => (
              <FileCard key={file.id} file={file} />
            ))}
          </div>
          {isFetching && <p className={styles.loading}>Loading more files...</p>}
        </main>
      </div>
    </MainLayout>
  );
};