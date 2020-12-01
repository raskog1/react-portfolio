import React from "react";
import currentResume from "../pdf/resume.pdf";

class Resume extends React.Component {
  render() {
    return (
      <>
        <div>
          {currentResume && (
            <iframe
              src={currentResume}
              className="resume-container"
              title="Ryan Skog Resume"
            />
          )}
        </div>
      </>
    );
  }
}

export default Resume;
