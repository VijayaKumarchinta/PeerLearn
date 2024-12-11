import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import '../styles/Review.css';

function Review() {
    const [review, setReview] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    // Initialize navigate for redirection
    const navigate = useNavigate();

    // Handle changes in the textarea
    const handleReviewChange = (e) => {
        setReview(e.target.value);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple validation
        if (!review.trim()) {
            setError('Review cannot be empty!');
            return;
        }

        setLoading(true);
        setError(null);

        // Simulate review submission (no backend)
        setTimeout(() => {
            setSuccess(true); // Set success state if review is successfully submitted
            setReview(''); // Clear the review textarea after submission

            // Navigate to the Register page after successful submission
            setTimeout(() => {
                navigate('/register');  // Redirect to the Register page
            }, 2000);  // Wait for 2 seconds before navigating
        }, 1000);  // Simulate a delay for review submission (no actual API call)

        setLoading(false);
    };

    return (
        <div className="review">
            <h2>Provide Your Feedback</h2>

            {/* Display error or success messages */}
            {error && <p className="error">{error}</p>}
            {success && <p className="success">Your review was submitted successfully! Redirecting...</p>}

            <form onSubmit={handleSubmit}>
                <textarea
                    value={review}
                    onChange={handleReviewChange}
                    placeholder="Write your review here..."
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Submitting...' : 'Submit Review'}
                </button>
            </form>
        </div>
    );
}

export default Review;
