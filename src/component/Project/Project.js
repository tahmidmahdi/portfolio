import React from "react";
// import './Project.css'

const Project = ({ project }) => {
  return (
    <div className="col h-auto w-auto text-center" data-aos="zoom-in ">
      {/* <div class="box mb-5">
                <img src={project.img} alt=""/>
                <br/>
                <h4>{project.title}</h4>
                <p>{project.details}</p>
                <br/>
                <a href={project.github} rel="noreferrer" target="_blank"><button className='button github'>Github </button></a> {' '}
                <a href={project.liveSite} rel="noreferrer" target="_blank"><button className="button livesite">LiveSite</button></a>
           </div> */}
      {/* <div class="card" style={{width: '40rem', border:'1px solid white'}}>
        <img src={project.img} style={{width: "400px"}} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div> */}
      <div class="card bg-transparent" style={{width: "25rem"}}>
         <img src={project.img} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  );
};

export default Project;
