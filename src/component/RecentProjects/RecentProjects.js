import React from 'react';
import './RecentProjects.css'
import travel from '../../images/travelxp.png'
import fresh from '../../images/freshgarden.png'
import metro from '../../images/metro.png'
import twurs from '../../images/twurs.png'
import doctor from '../../images/doctors.png'
import Project from '../Project/Project';
// import Project from '../Project/Project';


const projects = [
    {
        id: 1,
        img: twurs,
        title: 'Twurs-Tech-Shop',
        details: 'An Ecommerce shop to buy different products',
        github: 'https://github.com/tahmidmahdi/twurs-tech-shop-client/',
        liveSite: 'https://twurs-tech-shop.netlify.app/'
    },
    {
        id: 2,
        img: travel,
        title: 'TravelXp',
        details: 'Travel Xp is a fully functional website where you can book a tourism package.',
        github: 'https://github.com/tahmidmahdi/TravelXp-Client',
        liveSite: 'https://travelxp.netlify.app'
    },
    {
        id: 3,
        img: fresh,
        title: 'Fresh Garden',
        details: 'An E-commerce site where a user can buy products and see his/her order list.',
        github: 'https://github.com/tahmidmahdi/FreshGarden-Client',
        liveSite: 'https://freshgarden.netlify.app/'
    },
    {
        id: 4,
        img: metro,
        title: 'Metro Riders',
        details: 'Metro Rider is a ride sharing app.',
        github: 'https://github.com/tahmidmahdi/metro-riders',
        liveSite: 'https://metroriders.netlify.app/'
    },
    

]

const RecentProjects = () => {
    return (
        <div className=" recent-project-div" id='project'>

            <h1><span className="span-text">03</span> Recent Projects</h1>
            <br />



            <div className=" row">

               

                    {
                        projects.map(project => <Project key={project.id} project={project}></Project>)
                    }
                
            </div>

           
        </div>
    );
};

export default RecentProjects;