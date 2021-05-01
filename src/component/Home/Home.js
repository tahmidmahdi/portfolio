import React, { useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import './Home.css'
import img from '../../images/image 12.png'
import img2 from '../../images/fbImg.jpg'
import Particles from 'react-particles-js';
import Aos from 'aos';
// import Aos from 'aos';


const Home = () => {

    useEffect(() =>{
        Aos.init({duration: 2000})
    })
    var style = {
        width: "100vw",
        height: "100vh",
    };
    
    return (


        <div style={style}>
            <Particles id="particles-js"
                    params={{
                        "particles": {
                            "number": {
                                "value": 250,
                                density: {
                                    enable: true,
                                    value_area: 2000
                                }
                            },

                            "size": {
                                "value": 3
                            }
                        },

                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            }
                        }
                    }}
                    
                />
            
            <div className=" home row d-flex align-items-center scale-in-center" id='home welcome' data-aos="zoom-in">
                <div className="col-md-6 ">
                    <p>Hi, This is 👋 </p>
                    <h1>Tahmid Mahdi </h1>
                    <Typewriter
                        options={{
                            strings: ['<span>Writing Codes For Web</span>', '<span>Web Developer</span>', '<span>Programmer</span>'],
                            delay: 120,
                            autoStart: true,
                            loop: true,

                        }}
                    />
                    <br />
                    <a href='../../images/Resume.pdf' download>  <button className="button">Resume</button></a>
                </div>
                <div className="col-md-6 ">
                    <img className="img" src={img} alt="" />
                    
                </div>
               






            </div>


        </div>


    );
};

export default Home;