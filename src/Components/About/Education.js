import React from 'react'
import "./About.css"

const Education = () => {
  return (
    <div>
        <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Bachelor of Engineering 
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
               <p><span style={{fontWeight:"bold"}}>College Name: </span> Chaitanya Bharathi Institute of Technology</p>
               <p><span style={{fontWeight:"bold"}}>Branch: </span> Information technology</p>
               <p><span style={{fontWeight:"bold"}}>CGPA: </span> 9.23 / 10</p>
               <p><span style={{fontWeight:"bold"}}>Duration: </span> 2021-2025</p>
               <p><span style={{fontWeight:"bold"}}>Address: </span> Gandipet, Hyderabad, Telangana</p>
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
              Intermediate
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
               <p><span style={{fontWeight:"bold"}}>College Name: </span> Sri Chaitanya Junior Kalasala</p>
               <p><span style={{fontWeight:"bold"}}>Group: </span> Maths, Physics, Chemistry (MPC)</p>
               <p><span style={{fontWeight:"bold"}}>Percentage: </span> 97.2 / 100</p>
               <p><span style={{fontWeight:"bold"}}>Duration: </span> 2019-2021</p>
               <p><span style={{fontWeight:"bold"}}>Address: </span> Narayanaguda, Hyderabad, Telangana</p>
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
              School
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
               <p><span style={{fontWeight:"bold"}}>School Name: </span> Govt Boys High School</p>
               {/* <p><span style={{fontWeight:"bold"}}>Group: </span> Maths, Physics, Chemistry (MPC)</p> */}
               <p><span style={{fontWeight:"bold"}}>CGPA: </span> 9.3 / 10</p>
               <p><span style={{fontWeight:"bold"}}>Duration: </span> 2010-2019</p>
               <p><span style={{fontWeight:"bold"}}>Address: </span> Kavadiguda, Hyderabad, Telangana</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education