// FeatureList.js
import React from 'react';

function FeatureList() {
    return (
        <section className="features-section">
            <h2>Why Choose Us?</h2>
            <div className="features-list">
                <div className="feature-item">
                    <h3>Peer Reviews</h3>
                    <p>Get insightful feedback on your work from fellow students to improve your skills.</p>
                </div>
                <div className="feature-item">
                    <h3>Collaborative Projects</h3>
                    <p>Work together with classmates to complete projects and assignments effectively.</p>
                </div>
                <div className="feature-item">
                    <h3>Real-Time Discussions</h3>
                    <p>Engage in live discussions and share ideas with your peers during collaborative tasks.</p>
                </div>
            </div>
        </section>
    );
}

export default FeatureList;
