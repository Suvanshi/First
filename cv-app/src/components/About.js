import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function About({ onSubmit }) {
  const [bio, setBio] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Call the onSubmit function to send the data back to App
    onSubmit({ bio });
    
    // Navigate to the Resume page
    navigate('/resume'); 
  };

  return (
    <div className="about-container">
      <h3>About Me</h3>
      <form onSubmit={handleSubmit}>
        <textarea
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Write a short biography..."
          rows="4"
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default About;
