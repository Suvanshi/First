import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GeneralInfo from './components/GeneralInfo';
import EducationExperience from './components/EducationExperience';
import PracticalExperience from './components/PracticalExperience';
import Resume from './components/Resume';
import About from './components/About';
import './styles/FormStyles.css';
import Footer from './components/Footer';

function App() {
  const [resumeData, setResumeData] = useState({
    general: {},
    about: {},
    education: {},
    practical: {},
  });

  // Handler for GeneralInfo submission
  const handleGeneralInfoSubmit = (data) => {
    setResumeData((prevData) => ({
      ...prevData,
      general: data,
    }));
  };

  // Handler for About submission
  const handleAboutSubmit = (data) => {
    setResumeData((prevData) => ({
      ...prevData,
      about: data,
    }));
  };

  // Handler for EducationExperience submission
  const handleEducationSubmit = (data) => {
    setResumeData((prevData) => ({
      ...prevData,
      education: data,
    }));
  };

  // Handler for PracticalExperience submission
  const handlePracticalSubmit = (data) => {
    setResumeData((prevData) => ({
      ...prevData,
      practical: data,
    }));
  };

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route
            path="/"
            element={<GeneralInfo onSubmit={handleGeneralInfoSubmit} />}
          />
          <Route
            path="/about"
            element={<About onSubmit={handleAboutSubmit} />}
          />
          <Route
            path="/education"
            element={<EducationExperience onSubmit={handleEducationSubmit} />}
          />
          <Route
            path="/practical"
            element={<PracticalExperience onSubmit={handlePracticalSubmit} />}
          />
          <Route
            path="/resume"
            element={<Resume resumeData={resumeData} />}
          />
        </Routes>
        <Footer/>
      </div>
    </Router>

  );
}

export default App;
