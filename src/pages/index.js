import React from 'react';
import { Link } from 'gatsby'; // Make sure to import Link from Gatsby
import WesleyTanLogo from '../images/wesley-tan-logo.png';

const pageStyles = {
  color: "#232129",
  padding: "5rem", // Uniform padding
  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", // Professional sans-serif font
  display: "flex",
  flexDirection: "column",
  alignItems: "center", // Center items on the page
  justifyContent: "center",
  minHeight: "100vh", // Full view height
}

const logoContainerStyles = {
  display: "flex",
  alignItems: "center", // This will vertically center the logo with the adjacent text
  justifyContent: "flex-start", // Align the content to the start of the container
}
const logoStyles = {
  width: "150px", // Set a fixed size for your logo
  height: "150px", // Make it a perfect circle
  borderRadius: "50%", // This makes the image circular
  objectFit: "cover", // Ensures the image covers the area without stretching
  marginRight: "1rem", // Right margin for spacing between logo and text
  display: "inline-block", // Align inline with text
}

// Define your heading styles here
const headingStyles = {
  borderBottom: "2px solid #232129", // Add a subtle bottom border to the headings
  paddingBottom: "0.5rem",
  marginBottom: "2rem",
}

const headingContainerStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row", // Ensure that content is laid out in a row
  // Add other styling as needed
};

const headingAccentStyles = {
  color: "#232129",
}

const linkContainerStyles = {
  textAlign: "center", // Center-align the navigation links
}

const listStyles = {
  listStyle: "none", // Remove list bullets
  padding: 0, // Remove padding
  margin: "2rem 0", // Add some margin for spacing
}

const listItemStyles = {
  fontWeight: "normal", // Less emphasis on list item weight
  fontSize: "1.5rem", // Larger font for readability
  marginBottom: "3.0rem", // More white space between items
}

const linkStyle = {
  color: "#232129", // Same color for a more uniform look
  textDecoration: "none", // No underline for a cleaner look
  fontSize: "1.25rem", // Consistent font size with list items
}

const descriptionStyle = {
  fontSize: "1rem", // Smaller than the link for hierarchy
  color: "#696969", // Lighter color for less focus
  marginTop: "0.25rem", // Just a bit of space from the link
}

const links = [
  {
    text: "My CV (updated 10 January 2024)",
    url: "https://drive.google.com/file/d/1OhAsNJhTFc-omkgsXJHgEh0Bl4mGQGns/view?usp=sharing",
    isExternal: true, 
    description: "My updated CV",
  },
  {
    text: "Projects",
    url: "/projects",
    isExternal: false, // Flag for an internal link
    description: "My current projects",
  },
  {
    text: "Tutoring",
    url: "/tutoring",
    isExternal: false,
    description: "My tutoring and portfolio",
  },
];

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <div style={headingContainerStyles}>
        <img src={WesleyTanLogo} alt="Wesley Tan Logo" style={logoStyles} />
        <div>
          <h1>
            Hello!<br />
            <span style={headingAccentStyles}>Welcome to Wesley Tan's personal website</span>
          </h1>
        </div>
      </div>
      <ul style={listStyles}>
        {links.map((link, index) => (
          <li key={index} style={{ ...listItemStyles, borderBottom: index === links.length - 1 ? 'none' : '' }}>
            {link.isExternal ? (
              <a href={link.url} target="_blank" rel="noopener noreferrer" style={{ color: link.color }}>
                {link.text}
              </a>
            ) : (
              <Link to={link.url} style={{ color: link.color }}>
                {link.text}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>
