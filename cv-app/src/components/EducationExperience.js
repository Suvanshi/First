import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EducationExperience({ onSubmit }) {
  const [formData, setFormData] = useState({
    schoolName: '',
    titleOfStudy: '',
    dateOfStudy: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.schoolName && formData.titleOfStudy && formData.dateOfStudy) {
      onSubmit(formData);
      navigate('/practical'); // Redirect to Practical Experience page
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="education-form">
      <h2>Education Experience</h2>
      <input
        type="text"
        name="schoolName"
        placeholder="School Name"
        value={formData.schoolName}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="titleOfStudy"
        placeholder="Course Name"
        value={formData.titleOfStudy}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="dateOfStudy"
        placeholder="Date of Completion"
        value={formData.dateOfStudy}
        onChange={handleChange}
        required
      />
      <button type="submit">Next</button>
    </form>
  );
}

export default EducationExperience;
