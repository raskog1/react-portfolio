import React from "react";
import "./style.css";

// Function to format Contributors with commas
function ProjectCard(props) {
  function contributors(arr) {
    let formatContributors = [];
    for (let i = 0; i < arr.length - 1; i++) {
      formatContributors.push(`${arr[i]}, `);
    }
    formatContributors.push(arr[arr.length - 1]);
    return formatContributors;
  }

  // Function to only display Contributors if there are any
  function hideEmpty() {
    if (props.project.contributors) {
      return (
        <p className="contributors">
          Contributors: {contributors(props.project.contributors)}
        </p>
      );
    }
  }

  return (
    <div className="col-12 slider4">
      <div className="card text-center">
        <a href={props.project.link} rel="noopener noreferrer" target="_blank">
          <img
            className="card-image"
            src={props.project.image}
            alt={props.project.alt}
          />
        </a>
        <div className="card-img-overlay">
          <h4 className="card-title">
            <strong>{props.project.name}</strong>
          </h4>
          <p className="description">{props.project.description}</p>
          {hideEmpty()}
          <a
            href={props.project.github}
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
