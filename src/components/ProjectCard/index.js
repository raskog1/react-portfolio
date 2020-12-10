import React, { useState } from "react";

function ProjectCard({
  project: { contributors, link, alt, image, name, github, description },
  slider,
}) {
  // Hook to execute a hover color effect for the entire card when only
  // hovering over the image
  const [accentColor, setAccentColor] = useState("#17a2b8");

  // Initial styling for the card
  const cardColor = {
    border: `2px solid ${accentColor}`,
    color: accentColor,
  };

  // Function to only display Contributors if there are any
  function hideEmpty() {
    if (contributors.length > 0) {
      return (
        <p className="contributors">Contributors: {contributors.join(", ")}</p>
      );
    }
  }

  return (
    <div className={slider}>
      <div className="card text-center" style={cardColor}>
        <a
          className="card-link"
          href={link}
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            className="card-image"
            src={image}
            alt={alt}
            onMouseEnter={() => {
              setAccentColor("#ff9933");
            }}
            onMouseLeave={() => {
              setAccentColor("#17a2b8");
            }}
          />
        </a>
        <div className="card-img-overlay" style={{ color: accentColor }}>
          <h4 className="card-title">
            <strong>{name}</strong>
          </h4>
          <p className="description">{description}</p>
          {hideEmpty()}
          <a
            href={github}
            className="github orangeHover"
            rel="noopener noreferrer"
            target="_blank"
          >
            Github Repository
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
