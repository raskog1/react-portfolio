import React from "react";

function CodingLink(props) {
  return (
    <li>
      <h5>{props.link.name}</h5>
      <a
        href={props.link.website}
        target="_blank"
        rel="noopener noreferrer"
        className="text-info"
      >
        <div className="orangeHover">{props.link.www}</div>
      </a>
    </li>
  );
}

export default CodingLink;
