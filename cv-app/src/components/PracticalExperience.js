import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PracticalExperience({ onSubmit }) {
  const [formData, setFormData] = useState({
    companyName: '',
    positionTitle: '',
    responsibilities: '',
    dateFrom: '',
    dateUntil: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.companyName && formData.positionTitle && formData.responsibilities && formData.dateFrom && formData.dateUntil) {
      onSubmit(formData);
      navigate('/about'); // Redirect to Resume page
    } else {
      alert('Please fill in all fields.');
    }
  };

  const handleSkip = () => {
    onSubmit({}); // Skip submitting data
    navigate('/about'); // Redirect to Resume page
  };

  return (
    <div>
    <form onSubmit={handleSubmit} className="practical-experience-form">
      <h2>Practical Experience</h2>
      <input
        type="text"
        name="companyName"
        placeholder="Company Name"
        value={formData.companyName}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="positionTitle"
        placeholder="Position Title"
        value={formData.positionTitle}
        onChange={handleChange}
        required
      />
      <textarea
        name="responsibilities"
        placeholder="Responsibilities"
        value={formData.responsibilities}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="dateFrom"
        placeholder="From"
        value={formData.dateFrom}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="dateUntil"
        placeholder="To"
        value={formData.dateUntil}
        onChange={handleChange}
        required
      />
      <button type="submit">Next</button>
      <button type="button" onClick={handleSkip}>Skip</button>
    </form>
    </div>
  );
}

export default PracticalExperience;
