import React from "react";
import "./Hero.css";
import profile from "../../assets/profile-pic.png";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-6">
            <div className="text-start p-3 p-md-5 m-md-3 text-white details">
              <h1 className="display-3 fw-bold">I am Sanjay Pothuraju,</h1>
              <h3><Typewriter
                options={{
                  strings: ["A Full Stack Aspirant", "A ML Aspirant","Aspiring Software Engineer"],
                  autoStart: true,
                  loop: true,
                }}
              /></h3>
              <div className="d-flex gap-3 lead fw-normal mt-4 buttons">
                <a
                  className="btn btn-dark"
                  href="https://drive.google.com/file/d/1Cg7uoHniLMATTPBGrRUZzFO4j8DjCt1R/view?usp=sharing"
                >
                  Resume
                </a>
                <a
                  className="btn btn-dark"
                  href="https://github.com/PSanjay333"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 p-lg-5 my-5 text-center img-container">
            <img src={profile} alt="pic" className="img-fluid1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
