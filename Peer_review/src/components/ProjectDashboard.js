import React from 'react';
import '../styles/ProjectDashboard.css';

function ProjectDashboard({ projects }) {
    return (
        <div className="project-dashboard">
            <h2>Your Uploaded Projects</h2>

            {projects.length === 0 ? (
                <p>No projects uploaded yet.</p>
            ) : (
                <ul>
                    {projects.map((project) => (
                        <li key={project.id}>
                            <strong>{project.name}</strong>
                            <br />
                            <small>Uploaded at: {project.uploadedAt}</small>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ProjectDashboard;
