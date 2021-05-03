import React from 'react';
import './RecentProjects.css'
import travel from '../../images/travelxp.png'
import fresh from '../../images/freshgarden.png'
import metro from '../../images/metro.png'
import doctor from '../../images/doctors.png'
import Project from '../Project/Project';


const projects = [
    {
        id: 1,
        img: travel,
        title: 'TravelXp',
        details: 'Travel Xp is a fully functional website where you can book a tourism package. Google Signin method is implemented where exist two different dashboard for admin and user. A user can write review and book a package. An admin can delete bookings, edit it and can change the status of it. Admin can add a new package',
        github: 'https://github.com/tahmidmahdi/TravelXp-Client',
        liveSite: 'https://travelxp.netlify.app'
    },
    {
        id: 2,
        img: fresh,
        title: 'Fresh Garden',
        details: 'An E-commerce site where a user can buy products and see his/her order list. Google, Facebook and Email based sign in is implemented. Two Different dashboard for admin and user. A user can view his/her order based on their logged in email and a admin can delete a user also the products he/she booked',
        github: 'https://github.com/tahmidmahdi/FreshGarden-Client',
        liveSite: 'https://freshgarden.netlify.app/'
    },
    {
        id: 3,
        img: metro,
        title: 'Metro Riders',
        details: 'Metro Rider is a ride sharing app. It is used for transporting user from one place to another through different approaches.This site is fully secured and it is possible using serverless auth. Google Map is implemented in this project to show a user where he/she can go ',
        github: 'https://github.com/tahmidmahdi/metro-riders',
        liveSite: 'https://metroriders.netlify.app/'
    },
    {
        id: 4,
        img: doctor,
        title: 'Doctors Portal',
        details: 'Doctors portal is a site where a patient can take a doctors appointment',
        github: 'https://github.com/tahmidmahdi/doctors-portal',
        liveSite: 'https://doctors-portal-main.netlify.app/'
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