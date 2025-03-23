import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from './Typeahead.module.scss';

interface TypeaheadProps {
    onSearch: (query: string) => void; // Callback for search
    placeholder?: string; // Placeholder text
}

const Typeahead: React.FC<TypeaheadProps> = ({ onSearch, placeholder = 'Search...' }) => {
    const [query, setQuery] = useState<string>('');
    const [isFocused, setIsFocused] = useState<boolean>(false);

    // Debounce the search input
    useEffect(() => {
        const debounceTimer = setTimeout(() => {
            if (query.trim()) {
                onSearch(query);
            }
        }, 300); // 300ms debounce delay

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
                onBlur={() => setTimeout(() => setIsFocused(false), 200)} // Delay to allow click on dropdown
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

export default Typeahead;