import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './MainNav.css'
import logo2 from '../../images/logo2.png'
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MainNav = () => {
    return (
       
        <div>
                <Navbar className="container mt-3" expand="lg" data-aos="fade-down">
                    
                    <img className="logo" src={logo2} alt=""/>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="  main-nav mx-5">
                            <a href="#home" className="nav-link" >01_Home</a>
                            <a href="#about" className="nav-link ">02_About</a>
                            <a href="#project" className="nav-link ">03_Projects</a>
                            <a href="#contract" className="nav-link ">04_Contract</a>
                            <a href="#blog" className="nav-link ">05_Blog</a>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div class="fixed-bottom  mx-5  bottom-icon">
                    <a href='https://github.com/tahmidmahdi' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faGithub} className="fontawesome-icon" size='2x'/></a>
                    <br/> <br/>
                    <a href='https://www.linkedin.com/in/tahmidmahdi/' rel="noreferrer" target='_blank'><FontAwesomeIcon icon={faLinkedin} className="fontawesome-icon" size='2x'/></a>
                    <br/> <br/>
                    <a href='https://www.instagram.com/tahmidalif/' rel="noreferrer" target='_blank'><FontAwesomeIcon icon={faInstagram} className="fontawesome-icon" size='2x'/></a>
                    <br/> <br/>
                    <a href='https://www.facebook.com/tahmidalif.mahdi/' rel="noreferrer" target='_blank'><FontAwesomeIcon icon={faFacebook} className="fontawesome-icon" size='2x'/></a>
                    <br/> <br/>
                </div>

        </div>
       
    );
};

export default MainNav;