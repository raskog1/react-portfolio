import React from "react";

function Contact() {
  return (
    <>
      <div className="container">
        <h2 className="text-dark">Contact</h2>
        <br />

        <h5>
          Direct messaging coming soon. Please contact me at{" "}
          <a href="mailto: ryan.skog@outlook.com" className="orangeHover">
            ryan.skog@outlook.com
          </a>{" "}
          for a prompt response.
        </h5>

        <br />

        <form action="#">
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="firstName"
              className="form-control"
              placeholder="Enter first name"
              id="firstName"
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="lastName"
              className="form-control"
              placeholder="Enter last name"
              id="lastName"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email address"
              id="email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea className="form-control" rows="5" id="message" />
          </div>
          <br />

          {/* <button type="submit" className="btn btn-info">Submit</button> */}
        </form>
      </div>
    </>
  );
}

export default Contact;
