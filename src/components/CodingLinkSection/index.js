import React from "react";
import CodingLink from "../CodingLink";

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

// Why won't this code run in App.js?
