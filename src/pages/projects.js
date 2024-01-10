import React from 'react';
import { Link } from 'gatsby';

// Define your page styles here
const pageStyles = {
  color: "#232129",
  padding: "5rem",
  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  lineHeight: "1.6",
  fontSize: "1.25rem"
//   backgroundColor: "#fff",
}

// Define your heading styles here
const headingStyles = {
  borderBottom: "2px solid #232129", // Add a subtle bottom border to the headings
  paddingBottom: "0.5rem",
  marginBottom: "2rem",
}

// Define your list styles here
const listStyles = {
  listStyle: "none",
  paddingLeft: 0,
}

const listItemStyles = {
    marginBottom: "1.5rem",
    fontSize: "1.25rem",
  }

// Define your link styles here
const linkStyle = {
    color: "#663399",
    textDecoration: "none",
    fontWeight: "bold",
  }

const projectTitleStyle = {
    ...linkStyle,
    display: "inline-block", // This makes the link end where the text ends
    marginRight: "0.5rem", // Adds a small space between the title and the description
  }
  
const projectDescriptionStyle = {
    display: "block", // This will make the description start on a new line
  }

const backLinkStyle = {
  marginTop: "4rem",
  display: "block",
  textDecoration: "none",
  color: "#663399",
  fontWeight: "bold",
}

const ProjectsPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>My Projects</h1>
      
      <section style={{ marginBottom: "3rem" }}>
        <h2 style={headingStyles}>Privacy Tech Lab</h2>
        <ul style={listStyles}>
          <li style={listItemStyles}>
            <a href="https://github.com/privacy-tech-lab/privacy-pioneer" style={projectTitleStyle} target="_blank" rel="noopener noreferrer">
              Privacy Pioneer:
            </a>
            <span style={projectDescriptionStyle}>
              A Firefox extension that informs users about websites selling data to third-party advertisers.
            </span>
          </li>
          <li style={listItemStyles}>
            <a href="https://github.com/privacy-tech-lab/gpc-android" style={projectTitleStyle} target="_blank" rel="noopener noreferrer">
              GPC Android:
            </a>
            <span style={projectDescriptionStyle}>
              An Android app sending privacy signals (Global Privacy Control).
            </span>
          </li>
        </ul>
      </section>

      <section>
        <h2 style={headingStyles}>Individual Projects</h2>
        <ul style={listStyles}>
          <li style={listItemStyles}>
            <a href="https://github.com/wesley-tan/overlay-app" style={linkStyle} target="_blank" rel="noopener noreferrer">
              Overlay Application for Android:
            </a>
            <span style={projectDescriptionStyle}>
              Provides additional overlay functionality for Android devices.
            </span>
          </li>
          <li style={listItemStyles}>
            <a href="https://github.com/wesley-tan/mastermind" style={linkStyle} target="_blank" rel="noopener noreferrer">
              Mastermind implemented in C: 
            </a>
            <span style={projectDescriptionStyle}>
             A command-line version of the classic Mastermind game in C.
             </span>
          </li>
        </ul>
      </section>

      <Link to="/" style={backLinkStyle}>Go back to the homepage</Link>
    </main>
  );
}

export default ProjectsPage;
