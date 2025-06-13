import { useState } from "react";
import image from "../assets/images/dashboard.png";
import "../styles/WhatYouGain.css";

const WhatYouGain = () => {
  const [perksOpen, setPerksOpen] = useState(false);

  const toggleAccordion = () => setPerksOpen(!perksOpen);

  return (
    <section className="whatYouWillGainSection">
      {/* Start of What you stand to gain */}
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
          <button className="signUp desktop-only">Sign up for FREE</button>
        </div>

        <div className="features-grid">
          <div className="feature-box">
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

        {/* Mobile-only button after the grid */}
        <div className="mobile-only mobile-signup-button">
          <button className="signUp">Sign up for FREE</button>
        </div>
      </div>
      {/* End of What you stand to gain */}

      {/* Start Learn in-demand skills seamlessly Section */}
      <div className="secondContainer">
        <div className="card1">
          <img src={image} alt="Dashboard" className="cardImage" />
        </div>

        <div className="card2">
          <div className="cardText">
            <h2 className="titleText">
              <span className="green">Learn</span> in-<br></br>demand skills
              seamlessly
            </h2>
            <p className="textDescription">
              Imagine learning in an environment built to give you the best
              learning experience.
            </p>
            <p className="textDescription">
              A blend of self-paced and instructor-led training with lots of
              hands-on experience to ensure you are well-rounded in the track of
              your choice.
            </p>

            {/* Start Perks Accordion Section */}
            <div className="perksAccordion">
              <div
                className={`accordionHeader ${perksOpen ? "active" : ""}`}
                onClick={toggleAccordion}
              >
                <span style={{ color: perksOpen ? "green" : "#2f2f2f" }}>
                  Perks
                </span>
                <span
                  className="icon"
                  style={{ color: perksOpen ? "green" : "#2f2f2f" }}
                >
                  {perksOpen ? "−" : "+"}
                </span>
              </div>
              {perksOpen && (
                <ul className={`accordionContent ${perksOpen ? "show" : ""}`}>
                  <li>
                    Earn a certificate of completion at the end of the
                    Internship
                  </li>
                  <li>Build your portfolio in the Terra Learning bootcamp</li>
                  <li>
                    Take part in team projects and create world-class projects
                  </li>
                </ul>
              )}
            </div>
            {/* End Perks Accordion Section */}

            <button className="signUp">Sign up for FREE</button>
          </div>
        </div>
      </div>
      {/* End Learn in-demand skills seamlessly Section */}
    </section>
  );
};

export default WhatYouGain;
