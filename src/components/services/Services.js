import React from 'react';
import { Container, Row } from 'react-bootstrap';
import services from '../../Data/services';
import ServiceDetail from './ServiceDetail';
import './Services.css';
const Services = () => {
    return (
        <section className="services-container mt-5">
            <Container>
                <div className="section-header text-center">
                    <h5> Our services</h5>
                    <h1>Services we provide</h1>
                </div>
                <Row className="mt-5 pt-5">
                    {
                        services.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                    }
                </Row>
            </Container>
        </section>
    );
};

export default Services;