import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import doctor from '../../images/doctor.png'
import './HomeAppointmentBanner.css';

const HomeAppointmentBanner = () => {
    return (
        <section className='HomeAppointmentBanner'>
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={12} xl={6} xs={12} xxl={6} >

                        <div className='d-none d-md-block '>
                            <img className='img-fluid' src={doctor} alt='Home Appointment Banner' />
                        </div>

                    </Col>
                    <Col lg={6} md={6} sm={12} xl={6} xs={12} xxl={6}>

                        <div className='text-white py-5 section-content'>
                            <h5>APPOINTMENT</h5>
                            <h1 className='my-4'>Make an Appointment <br/> Today</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque magnam ad consequuntur assumenda saepe hic amet nemo ea facere a!</p>
                            <button className='btn btn-primary'>Learn More</button>
                        </div>

                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default HomeAppointmentBanner;