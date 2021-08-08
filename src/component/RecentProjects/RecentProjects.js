import React from "react";
import './RecentProjects.css'
import travel from "../../images/travelxp.png";
import fresh from "../../images/freshgarden.png";
import metro from "../../images/metro.png";
import twurs from "../../images/twurs.png";
// import doctor from '../../images/doctors.png'
import Project from "../Project/Project";
// import Project from '../Project/Project';

const projects = [
  {
    id: 1,
    img: twurs,
    title: "Twurs-Tech-Shop",
    details: "An Ecommerce shop to buy different products",
    github: "https://github.com/tahmidmahdi/twurs-tech-shop-client/",
    liveSite: "https://twurs-tech-shop.netlify.app/",
  },
  {
    id: 2,
    img: travel,
    title: "TravelXp",
    details:
      "Travel Xp is a fully functional website where you can book a tourism package.",
    github: "https://github.com/tahmidmahdi/TravelXp-Client",
    liveSite: "https://travelxp.netlify.app",
  },
  {
    id: 3,
    img: fresh,
    title: "Fresh Garden",
    details:
      "An E-commerce site where a user can buy products and see his/her order list.",
    github: "https://github.com/tahmidmahdi/FreshGarden-Client",
    liveSite: "https://freshgarden.netlify.app/",
  },
  {
    id: 4,
    img: metro,
    title: "Metro Riders",
    details: "Metro Rider is a ride sharing app.",
    github: "https://github.com/tahmidmahdi/metro-riders",
    liveSite: "https://metroriders.netlify.app/",
  },
];

const RecentProjects = () => {
  return (
    <div className=" recent-project-div" id="project">
      <h1>
        <span className="span-text">03</span> Recent Projects
      </h1>
      <br />

      {/* <div className="d-flex justify-content-start flex-wrap">

               

                    {
                        projects.map(project => <Project key={project.id} project={project}></Project>)
                    }
                
            </div> */}

      {/* <div className="row row-cols-1 row-cols-md-2  g-4 mx-auto">
                {
                    projects.map(project => <Project key={project.id} project={project}></Project>)
                }
            </div> */}
      <div class="row row-cols-1 content row-cols-md-2 mx-auto g-4 ">
        <div class="col" style={{width:'20rem'}}>
          <div class="card">
            <img src={projects[0].img} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
          <img src={projects[1].img} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
          <img src={projects[2].img} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
          <img src={projects[3].img} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
