// Home.js
import React from 'react';
import '../styles/Home.css';
import FeatureList from './FeatureList';
import Testimonial from './Testimonial';

function Home() {
    return (
        <div className="home">
            {/* Welcome Section */}
            <section className="welcome-section">
                <h1>Welcome to the Peer Review and Collaboration Platform</h1>
                <p>Start collaborating with your peers on assignments and projects. Join the community and make your academic journey smoother!</p>
            </section>

            {/* Features Section */}
            <FeatureList />

            {/* Call to Action Section */}
            <section className="cta-section">
                <h2>Ready to get started?</h2>
                <p>Sign up today and begin your journey towards collaborative learning!</p>
                <button className="cta-button">Get Started</button>
            </section>

            {/* Testimonials Section */}
            <Testimonial />
        </div>
    );
}

export default Home;
