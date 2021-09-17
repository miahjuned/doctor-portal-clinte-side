import React from 'react';
import chair from '../../../images/chair.png';
import {Link} from 'react-router-dom';
import { Col, Container, Row } from "react-bootstrap";
import CalendarArea from './Calendar/Calendar';

const AppointmentHeader = () => {
  
    return (
        <main>
            <Container >
                <Row className="align-items-center header-row" >
                    <Col lg={5} md={5} sm={12} xl={5} xs={12} xxl={5}>
                        <div className="header-content">
                            <h1 className='textPrimary'>Appointment</h1>
                            <CalendarArea></CalendarArea>
                        </div>
                    </Col>
                    <Col lg={7} md={7} sm={12} xl={7} xs={12} xxl={7}>
                        <div className="header-img">
                            <img className="img-fluid" src={chair} alt="chair banner" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </main>
    );
};

export default AppointmentHeader;