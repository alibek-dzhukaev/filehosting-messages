import React, { useState, useEffect } from 'react';

import { FaSearch } from 'react-icons/fa';

import styles from './Typeahead.module.scss';

interface TypeaheadProps {
    onSearch: (query: string) => void;
    placeholder?: string;
}

export const Typeahead: React.FC<TypeaheadProps> = ({ onSearch, placeholder = 'Search...' }) => {
    const [query, setQuery] = useState<string>('');
    const [isFocused, setIsFocused] = useState<boolean>(false);

    useEffect(() => {
        const debounceTimer = setTimeout(() => {
            if (query.trim()) {
                onSearch(query);
            }
        }, 300);

        return () => clearTimeout(debounceTimer);
    }, [query, onSearch]);

    return (
        <div className={styles.searchBar}>
            <FaSearch className={styles.searchIcon} />
            <input
                type="text"
                placeholder={placeholder}
                className={styles.searchInput}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setTimeout(() => setIsFocused(false), 200)}
            />
            {/* Dropdown for suggestions */}
            {isFocused && query.trim() && (
                <div className={styles.dropdown}>
                    {/* Render suggestions here */}
                    <div className={styles.dropdownItem}>Suggestion 1</div>
                    <div className={styles.dropdownItem}>Suggestion 2</div>
                </div>
            )}
        </div>
    );
};
