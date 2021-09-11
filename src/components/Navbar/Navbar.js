import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavbarArea = () => {
    return (
        <Navbar collapseOnSelect expand="lg"  variant="light"className=" text-white">
            <Container fluid>
                <Link className="navbar-brand me-auto ms-5" to="/"><h4>Doctor's <strong className='textPrimary'>Portal</strong></h4></Link>
                <button className="navbar-toggler textPrimary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto pe-5 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link ms-5 active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-5" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-5 " href="#">Dental Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-5 text-white" href="#">Reviews</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-5 text-white" href="#">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-5 text-white" href="#">Contract us</a>
                        </li>
                    </ul>
                </div>
            </Container>
        </Navbar>
    );
};

export default NavbarArea;