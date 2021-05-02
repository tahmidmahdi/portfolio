import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './MainNav.css'
import logo2 from '../../images/logo2.png'

const MainNav = () => {
    return (
       
            <Navbar className="container mt-3" expand="lg" >
                
                <img className="logo" src={logo2} alt=""/>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="  main-nav mx-5">
                        <a href="#home" className="nav-link" >01_Home</a>
                        <a href="#about" className="nav-link ">02_About</a>
                        <a href="#project" className="nav-link ">03_Projects</a>
                        <a href="" className="nav-link ">04_Contract</a>
                        <a href="#blog" className="nav-link ">05_Blog</a>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
       
    );
};

export default MainNav;