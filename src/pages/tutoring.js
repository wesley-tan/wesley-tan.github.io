// tutoring.js
import React from 'react';
import { Link } from 'gatsby';


const pageStyles = {
    color: "#232129",
    padding: "5rem",
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    lineHeight: "1.6",
    backgroundColor: "#fff",
  }
  
  const headingStyles = {
    borderBottom: "2px solid #232129",
    paddingBottom: "0.5rem",
    marginBottom: "2rem",
    fontSize: "2.5rem",
  }

  const paragraphStyles = {
    marginBottom: "1.5rem",
    fontSize: "1.25rem",
    maxWidth: "800px", 
  }
  
  const sectionHeadingStyles = {
    fontSize: "2rem",
    marginTop: "2rem",
    marginBottom: "1rem",
  }
  
  const linkStyle = {
    color: "#663399",
    textDecoration: "none",
  }
  
  const backLinkStyle = {
    marginTop: "4rem",
    display: "block",
    textDecoration: "none",
    color: "#663399",
    fontWeight: "bold",
  }

const TutoringPage = () => {
    return (
      <main style={pageStyles}>
      <h1 style={headingStyles}>Tutoring Services</h1>
      <p style={paragraphStyles}>Wesley graduated from ACS Independent with 45 Points (A for TOK, A for EE)
          
      Wesley specialises in Economics, Mathematics and TOK, having 4 years of previous mentorship experience. He has previously founded and led Consultation Corner, a pro-bono academic mentorship service.

      Wesley will read Economics and Computer Science at Wesleyan University as a Freeman Asian Scholar. Wesley was offered the EDB Scholarship, NUS Merit Scholarship and SMU Global Impact Scholarship.

      Wesley believes in enabling students to understand fundamental concepts rather than rote memorisation. Wesley's students appreciate his clarity and knowledge of the IB system.</p>

      <section>
        <h2 style={headingStyles}>Tutoring Profiles</h2>
        <ul>
          <li>
            <a href="https://qeducation.sg/" target="_blank" rel="noopener noreferrer">
              Computer Science, Mathematics & Economics Tutor @ Quintessential Education
            </a>
          </li>
          <li>
            <a href="https://www.tigercampus.app/wesley-tan/profile/" target="_blank" rel="noopener noreferrer">
              Computer Science, Mathematics & Economics Tutor @ TigerCampus
            </a>
          </li>
          <li>
            <a href="https://www.imp.education/" target="_blank" rel="noopener noreferrer">
              Computer Science, Mathematics & Economics Tutor @ IMP Education
            </a>
          </li>
          <li>
            <a href="https://www.fiverr.com/wesleystan?up_rollout=true" target="_blank" rel="noopener noreferrer">
              Fiverr Profile
            </a>
          </li>
        </ul>
      </section>

      <Link to="/" style={backLinkStyle}>Go back to the homepage</Link>
    </main>
  );
}

export default TutoringPage;
