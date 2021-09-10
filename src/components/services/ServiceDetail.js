import React from 'react';
import { Col } from 'react-bootstrap';

const ServiceDetail = (props) => {
    const {name, img, description} = props.service;
    return (
        <Col className="text-center mb-5" md={4}>
            <img src={img} alt="services" height="70"/>
            <h4 className="my-4">{name}</h4>
            <p className="text-secondary">{description}</p>
            
        </Col>
    );
};

export default ServiceDetail;