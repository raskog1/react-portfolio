import React from "react";
import CodingLink from "../CodingLink";
import "./style.css";

function CodingLinkSection(props) {
  return (
    <ul className="link-section">
      {props.links.map((link) => (
        <CodingLink link={link} key={link.id} />
      ))}
    </ul>
  );
}

export default CodingLinkSection;

// Why won't this code run in main.js?
