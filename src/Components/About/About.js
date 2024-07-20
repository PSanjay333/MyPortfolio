import React from "react";
import me from "../../assets/me.jpg";
import "./About.css";

import Certificates from "./Certificates";
import Skills from "./Skills";
import Education from "./Education";

const About = () => {
  return (
    <section id="about" className="about-wraper">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-5 mb-4 mb-lg-0">
            <img src={me} alt="pic" className="img-fluid mt-5 mb-5 img" />
          </div>
          <div className="col-lg-7 ps-lg-5 text-center text-lg-start text-white">
            <div className="my-3 mb-lg-0 details">
              <p><span>My about details</span></p>
              <h1><span>About me</span></h1>
              <p>
                IT enthusiast at CBIT with skills in Java, Machine Learning, and
                the MERN Stack.
              </p>
              <p>
                Passionate about learning and technology, always eager to
                explore and grow in the tech world.
              </p>
            </div>
            <div className="pt-4">
              <ul
                className="nav nav-pills justify-content-center justify-content-lg-between mb-3"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-skill-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-skill"
                    type="button"
                    role="tab"
                    aria-controls="pills-skill"
                    aria-selected="true"
                  >
                    Main Skills
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    Certification
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-contact-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-contact"
                    type="button"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                  >
                    Education
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-skill"
                  role="tabpanel"
                  aria-labelledby="pills-skill-tab"
                  tabIndex="0"
                >
                  <Skills />
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                  tabIndex="0"
                >
                  <Certificates />
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-contact"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab"
                  tabIndex="0"
                >
                  <Education />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
