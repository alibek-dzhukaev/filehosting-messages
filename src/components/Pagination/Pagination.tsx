import React from 'react';
import styles from './Pagination.module.scss';

interface PaginationProps {
    filesPerPage: number;
    totalFiles: number;
    currentPage: number;
    paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
                                                   filesPerPage,
                                                   totalFiles,
                                                   currentPage,
                                                   paginate,
                                               }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalFiles / filesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className={styles.pagination}>
            <ul>
                {pageNumbers.map((number) => (
                    <li key={number}>
                        <button
                            onClick={() => paginate(number)}
                            className={`${styles.pageButton} ${
                                currentPage === number ? styles.active : ''
                            }`}
                        >
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;