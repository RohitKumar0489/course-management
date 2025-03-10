// src/components/CourseList.js
import React from 'react';
import PropTypes from 'prop-types';
import './CourseList.css'; // Ensure this file exists

function CourseList({ courses, onDelete }) {
    return (
        <div className="course-list">
            <h2>Courses:</h2>
            {courses.length > 0 ? (
                <ul className="course-items">
                    {courses.map((course, index) => (
                        <li key={index} className="course-item">
                            <div className="course-details">
                                <h3>{course.title}</h3>
                                <p>{course.description}</p>
                            </div>
                            <button
                                onClick={() => {
                                    if (window.confirm(`Are you sure you want to delete the course: "${course.title}"?`)) {
                                        onDelete(index);
                                    }
                                }}
                                className="delete-button"
                                aria-label={`Delete course titled "${course.title}"`}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="empty-message">No courses available. Please add some!</p>
            )}
        </div>
    );
}

CourseList.propTypes = {
    courses: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
};

CourseList.defaultProps = {
    courses: [], // Default to an empty array if no courses are provided
};

export default CourseList;
