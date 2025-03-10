// src/components/AddCourseForm.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AddCourseForm.css'; // Make sure this CSS exists

function AddCourseForm({ addCourse }) {
    const [course, setCourse] = useState({ title: '', description: '' });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCourse({ ...course, [name]: value });
        setError(''); // Reset error on input change
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic Validation
        if (!course.title.trim() || !course.description.trim()) {
            setError('Please fill in both fields.');
            return;
        }

        addCourse(course); // Pass course to parent component
        handleReset(); // Reset the form
    };

    const handleReset = () => {
        setCourse({ title: '', description: '' });
        setError('');
    };

    return (
        <div className="add-course-form">
            <h3>Add New Course</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Course Title</label>
                    <input
                        id="title"
                        type="text"
                        name="title"
                        placeholder="Enter course title"
                        value={course.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Course Description</label>
                    <textarea
                        id="description"
                        name="description"
                        placeholder="Enter course description"
                        value={course.description}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                {error && <p className="error-message">{error}</p>}
                <div className="button-group">
                    <button type="submit" disabled={!course.title || !course.description}>
                        Add Course
                    </button>
                    <button type="button" onClick={handleReset} className="reset-button">
                        Reset
                    </button>
                </div>
            </form>
        </div>
    );
}

AddCourseForm.propTypes = {
    addCourse: PropTypes.func.isRequired,
};

export default AddCourseForm;
