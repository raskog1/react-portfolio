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
    <div className="col-12">
      <a href={props.project.link} rel="noopener noreferrer" target="_blank">
        <div className="card text-center">
          <img
            className="card-image"
            src={props.project.image}
            alt={props.project.alt}
          />
          <div className="card-img-overlay">
            <h4 className="card-title">
              <strong>{props.project.name}</strong>
            </h4>
            <p className="description">{props.project.description}</p>
            {hideEmpty()}
          </div>
        </div>
      </a>
    </div>
  );
}

export default ProjectCard;
