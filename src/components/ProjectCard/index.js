import React from "react";
import "./style.css";

// Function to format Contributors with commas
function ProjectCard({
  project: { contributors, link, alt, image, name, github, description },
  slider,
}) {
  function listContributors(arr) {
    let formatContributors = [];
    for (let i = 0; i < arr.length - 1; i++) {
      formatContributors.push(`${arr[i]}, `);
    }
    formatContributors.push(arr[arr.length - 1]);
    return formatContributors;
  }

  // Function to only display Contributors if there are any
  function hideEmpty() {
    if (contributors.length > 0) {
      return (
        <p className="contributors">
          Contributors: {listContributors(contributors)}
        </p>
      );
    }
  }

  return (
    <div className="col-12" className={slider}>
      <div className="card text-center">
        <a href={link} rel="noopener noreferrer" target="_blank">
          <img className="card-image" src={image} alt={alt} />
        </a>
        <div className="card-img-overlay">
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
