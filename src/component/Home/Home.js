import React from 'react';
import Typewriter from 'typewriter-effect';
import './Home.css'
import img from '../../images/image 12.png'
import img2 from '../../images/fbImg.jpg'

const Home = () => {
    return (
        <div className=" home row d-flex align-items-center" id='home'>
            <div className="col-md-6 ">
                <p>Hi, This is 👋 </p>
                <h1>Tahmid Mahdi </h1>
                <Typewriter
                    options={{
                        strings:['<span>Writing Codes For Web</span>','<span>Web Developer</span>', '<span>Programmer</span>'],
                        delay: 120,
                        autoStart: true,
                        loop: true,
    
                    }}
                /> 
                <br/>
              <a href='../../images/Resume.pdf' download>  <button className="button">Resume</button></a>
            </div>
            <div className="col-md-6 ">
               <img className="img" src={img} alt=""/>
            </div>
            {/* <Typewriter
                onInit={(typewriter) => {
                    
                    typewriter.typeString('<h3>Building Things For Web!</h3>')
                        .pauseFor(300)
                        .deleteAll()
                        typewriter.typeString('<h3>I am A Web Developer</h3>')
                        .pauseFor(300)
                        .deleteChars(14)
                        typewriter.typeString(' <h3>Programmer</h3>')
                        // .loop(true)
                        .deleteAll()
                        .start();
                }}
            /> */}




        </div>
    );
};

export default Home;