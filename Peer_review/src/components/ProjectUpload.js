import React, { useState } from 'react';
import '../styles/ProjectUpload.css';

function ProjectUpload({ addProject }) {
    const [file, setFile] = useState(null);
    const [status, setStatus] = useState(null); // To show the upload status (e.g., success/error)

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        setStatus(null); // Clear the status message when a new file is selected
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!file) {
            setStatus('Please select a file to upload.');
            return;
        }

        // Simulate a file upload process
        setStatus('Uploading...');
        setTimeout(() => {
            const project = {
                id: Date.now(), // Unique ID for the project
                name: file.name,
                uploadedAt: new Date().toLocaleString(),
            };

            // Add the project to the shared state
            addProject(project);

            setStatus(`Upload successful! The file "${file.name}" has been uploaded.`);
            setFile(null); // Reset the file input after successful upload
        }, 2000); // Simulate a 2-second delay
    };

    return (
        <div className="project-upload">
            <h2>Upload Your Project</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="file"
                    onChange={handleFileChange}
                />
                <button type="submit">Upload</button>
            </form>
            {status && <p className={status.startsWith('Error') ? 'error' : 'success'}>{status}</p>}
        </div>
    );
}

export default ProjectUpload;
