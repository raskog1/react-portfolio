import React from "react";
import Navbar from "../components/Navbar";
import currentResume from "../pdf/resume.pdf";

class Resume extends React.Component {
  render() {
    return (
      <>
        <Navbar />
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
