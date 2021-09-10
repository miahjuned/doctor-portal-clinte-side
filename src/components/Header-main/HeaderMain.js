import React from 'react';
import './HeaderMain.css';
import chair from '../../images/chair.png';
import {Link} from 'react-router-dom';
import { Col, Container, Row } from "react-bootstrap";
const HeaderMain = () => {
    return (
        <section>
            <Container >
                <Row className="align-items-center header-row" >
                    <Col md={5}>
                        <div className="header-content">
                            <h1>Your smile <br/> Starts Here </h1>
                            <p className="text-secondary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the</p>
                            <Link className="btn btn-appointment">GET APPOINTMENT</Link>
                        </div>
                    </Col>
                    <Col md={7}>
                        <div className="header-img">
                            <img className="img-fluid" src={chair} alt="chair banner" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default HeaderMain;
