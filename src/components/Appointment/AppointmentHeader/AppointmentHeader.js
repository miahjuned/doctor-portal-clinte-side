import React from 'react';
import chair from '../../../images/chair.png';
import {Link} from 'react-router-dom';
import { Col, Container, Row } from "react-bootstrap";
import './Calendar/Calendar.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppointmentHeader = ({handleDateChange}) => {
  
    return (
        <main>
            <Container >
                <Row className="align-items-center header-row" >

                    <Col lg={5} md={5} sm={12} xl={5} xs={12} xxl={5}>
                        <div className="header-content">
                            <h1 className='textPrimary'>Appointment</h1>
                            <div className='Calendar-Container'>
                                <Calendar
                                    className='textPrimary shadowHard'
                                    minDate={new Date()}
                                    maxDate={new Date(new Date(). getTime() + 24 * 60 * 60 * 4000)}
                                    onChange={handleDateChange}
                                    value={new Date()}
                                />
                            </div>
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