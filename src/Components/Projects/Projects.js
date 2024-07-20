import React from 'react';
import "./Projects.css";
import projects from '../../assets/MyProjects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  return (
    <section id='projects' className='project-wraper text-light'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 text-center mb-4 project-details'>
            <p><span className='subtitle'>My Projects</span></p>
            <h1><span>Projects</span></h1>
          </div>
        </div>
        <div className='row'>
          {projects.map((project, index) => (
            <div key={index} className='col-lg-4 col-md-6 mb-4 d-flex'>
              <div className='card bg-dark text-light'>
                <div className='card-body text-md-start text-center'>
                  <img src={project.img} alt='project' className='img-fluid mb-3 project-img'/>
                  <h3><span>{project.Name}</span></h3>
                  <p>{project.desc}</p>
                  <a href={project.link} className='btn btn-light link'><p>Click here<FontAwesomeIcon icon={faArrowRight} style={{marginLeft:"10px", marginTop:"10px"}}/></p></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects;
