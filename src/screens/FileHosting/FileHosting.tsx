import {useState, useEffect} from 'react';
import styles from './FileHosting.module.scss';
import FileCard from '@/components/FileCard/FileCard'
import Pagination from "@components/Pagination/Pagination";
import MainLayout from "@components/MainLayout/MainLayout";
import FilesSidebar from "@components/FilesSidebar/FilesSidebar";

interface File {
    id: number;
    name: string;
    type: string;
    size: string;
    thumbnail: string;
}

export const FileHosting: React.FC = () => {
    const [files, setFiles] = useState<File[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [filesPerPage, setFilesPerPage] = useState(10); // Number of files per page

    // Simulate fetching files from an API
    useEffect(() => {
        const fetchFiles = () => {
            const newFiles = Array.from({length: 50}, (_, i) => ({
                id: i + 1,
                name: `File ${i + 1}`,
                type: 'Document',
                size: '1.2MB',
                thumbnail: `https://a.storyblok.com/f/178900/750x422/25afc1b5e3/0280c99a837190e4ae1b55577c2708851651837601_main.jpg/m/filters:quality(95)format(webp)`,
            }));
            setFiles(newFiles);
        };

        fetchFiles();
    }, []);

    // Calculate the number of files to display based on screen size
    useEffect(() => {
        const updateFilesPerPage = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 600) {
                setFilesPerPage(4);
            } else if (screenWidth < 900) {
                setFilesPerPage(6);
            } else if (screenWidth < 1200) {
                setFilesPerPage(8);
            } else {
                setFilesPerPage(10);
            }
        };

        window.addEventListener('resize', updateFilesPerPage);
        updateFilesPerPage(); // Initial call

        return () => window.removeEventListener('resize', updateFilesPerPage);
    }, []);

    // Get current files
    const indexOfLastFile = currentPage * filesPerPage;
    const indexOfFirstFile = indexOfLastFile - filesPerPage;
    const currentFiles = files.slice(indexOfFirstFile, indexOfLastFile);

    // Change page
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <MainLayout>
            <FilesSidebar/>
            <main className={styles.mainContent}>
                <div className={styles.fileGrid}>
                    {currentFiles.map((file) => (
                        <FileCard key={file.id} file={file}/>
                    ))}
                </div>

                <div className={styles.paginationContainer}>
                    <Pagination
                        filesPerPage={filesPerPage}
                        totalFiles={files.length}
                        currentPage={currentPage}
                        paginate={paginate}
                    />
                </div>
            </main>
        </MainLayout>
    );
};