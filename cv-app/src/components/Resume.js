import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Resume({ resumeData }) {
  const { general, about, education, practical } = resumeData;
  const navigate = useNavigate(); // Initialize navigate

  const downloadResume = async () => {
    const input = document.getElementById('resume');

    // Use html2canvas to take a snapshot of the resume
    const canvas = await html2canvas(input);
    const imgData = canvas.toDataURL('image/png');

    // Create a new PDF document
    const doc = new jsPDF();
    const imgWidth = 190; // Width of the image
    const pageHeight = doc.internal.pageSize.height; // Height of the page
    const imgHeight = (canvas.height * imgWidth) / canvas.width; // Calculate height proportionally
    let heightLeft = imgHeight;

    // Add image to PDF
    let position = 0;

    // If the image height exceeds page height, split it into multiple pages
    while (heightLeft >= 0) {
      doc.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      position -= pageHeight; // Move position for the next page
      if (heightLeft >= 0) doc.addPage();
    }

    // Save the PDF
    doc.save('resume.pdf');
  };

  return (
    <div className="resume-container">
      <div id="resume">
      <br/>
        <h1>{general.name}</h1>
        <hr />
        <p><strong>Email:</strong> {general.email}</p>
        <p><strong>Phone:</strong> {general.phone}</p>
        <hr />
        <h3>About Me</h3>
        <p>{about.bio}</p>
        <hr />
        <h3>Education</h3>
        <p><strong>Institution Name:</strong> {education.schoolName}</p>
        <p><strong>Course Name:</strong> {education.titleOfStudy}</p>
        <p><strong>Date of Completion:</strong> {education.dateOfStudy}</p>
        <hr />
        <h3>Experience</h3>
        <p><strong>Company Name:</strong> {practical.companyName}</p>
        <p><strong>Position Title:</strong> {practical.positionTitle}</p>
        <p><strong>Responsibilities:</strong> {practical.responsibilities}</p>
        <p><strong>From:</strong> {practical.dateFrom}</p>
        <p><strong>To:</strong> {practical.dateUntil}</p>
        <hr />
      </div>
      <button onClick={downloadResume}>Download as PDF</button>
      <button className="back-button"onClick={() => navigate(-1)}>Back</button> {/* Back button */}
    </div>
  );
}

export default Resume;
