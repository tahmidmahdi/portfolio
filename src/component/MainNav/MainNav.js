import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MainNav.css'
import logo from '../../images/logo.jpg';
import logo2 from '../../images/logo2.png'

const MainNav = () => {
    return (
       
            <Navbar className="container mt-3" expand="lg" >
                {/* <Navbar.Brand href="#home"><h1 className="text-design">Mahdi</h1></Navbar.Brand> */}
                <img className="logo" src={logo2} alt=""/>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="  main-nav mx-5">
                        {/* <Link to="/" className="nav-link "> 01_Home</Link>
                        <Link to="/" className="nav-link "> 02_AboutMe</Link>
                        <Link to="/" className="nav-link "> 03_Home</Link>
                        <Link to="/" className="nav-link "> 04_Home</Link>
                        <Link to="/" className="nav-link "> 05_Home</Link> */}
                        <a href="#home" className="nav-link" >01_Home</a>
                        <a href="#about" className="nav-link ">02_About</a>
                        <a href="/" className="nav-link ">03_Home</a>
                        <a href="/" className="nav-link ">04_Home</a>
                        <a href="/" className="nav-link ">05_Home</a>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
       
    );
};

export default MainNav;