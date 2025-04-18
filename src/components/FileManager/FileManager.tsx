import React, {useState} from "react";

import {FaUpload} from "react-icons/fa";

import styles from './FileManager.module.scss'

interface File {
    id: number
    name: string
    size: string
    type: string
    thumbnail: string
}

export const FileManager: React.FC = () => {
    const [files, setFiles] = useState<File[]>([]); // State to store uploaded files

    // Simulate file upload
    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const uploadedFiles = event.target.files;

        if (uploadedFiles) {
            const newFiles = Array.from(uploadedFiles).map((file, index) => ({
                id: files.length + index + 1, // Unique ID for each file
                name: file.name,
                size: `${(file.size / 1024).toFixed(2)} KB`, // Convert size to KB
                type: file.type.split('/')[1], // Extract file type (e.g., jpeg, pdf)
                thumbnail: URL.createObjectURL(file), // Generate a thumbnail for images
            }));

            setFiles([...files, ...newFiles]);
        }
    };

    // Simulate file deletion
    const handleDeleteFile = (id: number) => {
        setFiles(files.filter((file) => file.id !== id));
    };

    return (
        <div className={styles.fileManager}>
            {/* File List */}
            <div className={styles.fileList}>
                {files.map((file) => (
                    <div key={file.id} className={styles.fileCard}>
                        <div className={styles.fileThumbnail}>
                            {file.type.startsWith('image') ? (
                                <img src={file.thumbnail} alt={file.name} />
                            ) : (
                                <div className={styles.fileIcon}>📄</div>
                            )}
                        </div>
                        <div className={styles.fileDetails}>
                            <h3>{file.name}</h3>
                            <p>{file.size}</p>
                            <p>{file.type}</p>
                        </div>
                        <div className={styles.fileActions}>
                            <button
                                className={styles.deleteButton}
                                onClick={() => handleDeleteFile(file.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Floating Upload Button */}
            <div className={styles.floatingUploadButton}>
                <input
                    type="file"
                    id="file-upload"
                    multiple
                    onChange={handleFileUpload}
                    className={styles.fileInput}
                />
                <label htmlFor="file-upload" className={styles.uploadIcon}>
                    <FaUpload />
                </label>
            </div>
        </div>
    );
};
