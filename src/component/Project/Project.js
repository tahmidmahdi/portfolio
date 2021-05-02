import React from 'react';
import './Project.css'

const Project = ({project}) => {
    return (
       <div className='col-md-6 cart' data-aos="zoom-in">
           <div class="box mb-5">
                <img src={project.img} alt=""/>
                <br/>
                <h4>{project.title}</h4>
                <p>{project.details}</p>
                <br/>
                <a href={project.github} target="_blank"><button className='button'>Github </button></a> {' '}
                <a href={project.liveSite} target="_blank"><button className="button">LiveSite</button></a>
           </div>
       </div>
    );
};

export default Project;