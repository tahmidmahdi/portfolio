import { faBootstrap, faCss3, faCss3Alt, faDocker, faGit, faHtml5, faJsSquare, faNodeJs, faNpm, faPython, faReact, faSass } from '@fortawesome/free-brands-svg-icons';
import { faFireAlt, faParagraph, faTerminal } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className="row about " id='about' >
            <div className="col-md-6 about-responsive" data-aos="fade-up"
                data-aos-duration="1500">
                <h1><span className="span-text">02 </span>About Me</h1>
                <p className="mt-5">Hello I am <span className='span-text'>Mahdi</span>. A Full Stack Web Developer. Who has passion in web.  As a tech enthusiast, I always love to learn things. I have graduated from <span className='span-text'>Daffodil International University. </span> I love to create web things also love to write about web. Participated programming contests and many activities through out my whole university life. I have experience in AI, Ml and Natural Language Processing. Currently I am working with Web Development Found Love in <span className='span-text'>MERN Stack</span>.
                I want to work with an organization where I can contribute with their growth also can accelerate my learning curve while developing my own skill.
                </p>

            </div>
            <div className="col-md-6  about-skill" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500">
                <h5>Here are some few Technologies I have worked with</h5>
                <div className="d-flex justify-content-around text-center mt-3">
                    <div className="skill-div">
                        <span>>JavaScript</span>
                        <br />
                        <span>>React Js</span>
                        <br />
                        <span>>Node Js</span>
                        <br />
                        <span>>Express Js</span>
                        <br />
                        <span>>Redux </span>
                        <br />
                        <span>>Firebase</span>
                        <br />
                        <span>>HTML & CSS</span>
                        <br />
                        <span>>Git</span>
                        <br />
                        <span>>Rest API</span>
                    </div>
                    <div className="skill-div">
                        <span> >Github</span>
                        <br />
                        <span>>Bootstrap</span>
                        <br />
                        <span> >Material UI</span>
                        <br />
                        <span>>ES6</span>
                        <br />
                        <span> >MongoDB</span>
                        <br />
                        <span>>NPM</span>
                        <br />
                        <span> >Terminal</span>
                        <br />
                        <span> >Python</span>
                        <br />
                        <span>>SASS</span>
                    </div>
                </div>
            </div>


            <div className='skill-icon'>
                <FontAwesomeIcon icon={faHtml5} size="2x" className="fontawesome-icon mt-5"/> { ' '}
                <FontAwesomeIcon icon={faCss3Alt} size="2x" className="fontawesome-icon mt-5"/> { ' '}
                <FontAwesomeIcon icon={faNodeJs} size="2x" className="fontawesome-icon mt-5"/> { ' ' }
                <FontAwesomeIcon icon={faJsSquare} size="2x" className="fontawesome-icon mt-5"/> { ' ' }
                <FontAwesomeIcon icon={faFireAlt} size="2x" className="fontawesome-icon mt-5"/> { ' ' }
                <FontAwesomeIcon icon={faGit} size="2x" className="fontawesome-icon mt-5"/> { ' ' }
                <FontAwesomeIcon icon={faBootstrap} size="2x" className="fontawesome-icon mt-5"/> { ' ' }
               
                <br/>
                <FontAwesomeIcon icon={faNpm} size="2x" className="fontawesome-icon mt-5"/> { ' ' }
                <FontAwesomeIcon icon={faPython} size="2x" className="fontawesome-icon mt-5"/> { ' ' }
                <FontAwesomeIcon icon={faReact} size="2x" className="fontawesome-icon mt-5"/> { ' ' }
                <FontAwesomeIcon icon={faTerminal} size="2x" className="fontawesome-icon mt-5"/> { ' ' }
                <FontAwesomeIcon icon={faDocker} size="2x" className="fontawesome-icon mt-5"/> { ' ' }
                <FontAwesomeIcon icon={faSass} size="2x" className="fontawesome-icon mt-5"/> { ' ' }

            </div>
        </div>
    );
};

export default About;