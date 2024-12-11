// ProjectDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // for accessing the dynamic route params
import '../styles/ProjectDetails.css';

function ProjectDetails() {
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams(); // Use useParams() hook to access route parameters

    useEffect(() => {
        // Function to fetch project details by ID from the backend
        const fetchProjectDetails = async (projectId) => {
            try {
                setLoading(true); // Start loading
                setError(null); // Reset any previous error
                const response = await fetch(`/api/projects/${projectId}`); // Replace with your API endpoint
                if (!response.ok) {
                    throw new Error('Failed to fetch project details');
                }
                const data = await response.json(); // Assuming the API returns project data in JSON format
                setProject(data); // Set project data to state
            } catch (err) {
                setError(err.message); // Set error if any occurred during fetch
            } finally {
                setLoading(false); // Stop loading
            }
        };

        fetchProjectDetails(id); // Fetch project details based on the dynamic `id`
    }, [id]);

    if (loading) {
        return <p>Loading project details...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="project-details">
            {project ? (
                <>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>

                    <div className="project-meta">
                        <p><strong>Project ID:</strong> {project.id}</p>
                        <p><strong>Created At:</strong> {new Date(project.created_at).toLocaleDateString()}</p>
                        <p><strong>Last Updated:</strong> {new Date(project.updated_at).toLocaleDateString()}</p>
                    </div>

                    <div className="project-files">
                        <h3>Downloadable Files:</h3>
                        <ul>
                            {project.files && project.files.length > 0 ? (
                                project.files.map((file) => (
                                    <li key={file.name}>
                                        <a href={file.url} download>{file.name}</a>
                                    </li>
                                ))
                            ) : (
                                <li>No files available for download.</li>
                            )}
                        </ul>
                    </div>
                </>
            ) : (
                <p>No project found.</p>
            )}
        </div>
    );
}

export default ProjectDetails;
