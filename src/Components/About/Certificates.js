import React from "react";
import "./About.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Certificates = () => {
  return (
    <div>
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button custom-accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              The Complete 2024 Web Development Bootcamp
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
               <a href="https://www.udemy.com/certificate/UC-0369b360-8634-4c65-88b3-4bbccc928857/" class="card-link"><FontAwesomeIcon icon={faLink}/> Full Stack Development</a>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Machine Learning
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
               <a href="https://drive.google.com/file/d/17RK4ZXG9QDdXyI_o2wBnQhDaKXkC8GOq/view" class="card-link"><FontAwesomeIcon icon={faLink}/> Internship training by Codegnan IT Solutions Pvt.Ltd.</a>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              HackerRank Python (Basic) Certificate
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
               <a href="https://www.hackerrank.com/certificates/30b68352f1f2" class="card-link"><FontAwesomeIcon icon={faLink}/> Certificate link</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
