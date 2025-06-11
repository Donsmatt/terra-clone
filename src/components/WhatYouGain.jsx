import React from "react";
// import { BiCertificate } from "react-icons/bi";
// import { FiTool } from "react-icons/fi";
// import { FaChalkboardTeacher } from "react-icons/fa";
// import { MdRocketLaunch } from "react-icons/md";

import "../styles/WhatYouGain.css";

const WhatYouGain = () => {
  return (
    <section className="whatYouWillGainSection">
      <div className="firstContainer">
        <div className="textGrid">
          <h2 className="titleText">
            What you stand to <span className="green">gain</span>
          </h2>
          <p className="textDescription">
            Since 2020, Terra Learning has trained over 350 thousand African
            youths in various fields across Engineering, Marketing, Product and
            Design.
          </p>
          <button className="signUp">Sign up for FREE</button>
        </div>

        <div className="features-grid">
          <div className="feature-box">
            {/* <BiCertificate className="feature-icon" /> */}
            <h3>Earn a certificate</h3>
            <p>
              All Terra Learning finalists will be awarded a paid certificate of
              completion at the end of the Internship.
            </p>
          </div>
          <div className="feature-box">
            <h3>Get hands-on experience</h3>
            <p>
              During the Terra Learning Internship, you will be assigned
              projects and team assignments that will give you the needed
              experience, and help you build your portfolio, teamwork, and
              communication skills.
            </p>
          </div>
          <div className="feature-box">
            <h3>Learn from the very best</h3>
            <p>
              Learning is a wonderful experience, and learning from the best
              makes everything ten times easier. The Terra Learning mentors and
              lead instructors are all here to make your Internship experience
              unforgettable.
            </p>
          </div>
          <div className="feature-box">
            <h3>Be a part of a startup</h3>
            <p>
              During the bootcamp, all Terra Learning finalists will have the
              opportunity to build a fast-paced start-up.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGain;
