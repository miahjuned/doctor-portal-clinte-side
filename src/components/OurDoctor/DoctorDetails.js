import React from 'react';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhoneAlt, } from '@fortawesome/free-solid-svg-icons';


const DoctorDetails = (props) => {
    const {name, phone, icon, img} =props.doctor;

    return (
        <Col className='text-center' lg={4} md={4} sm={12} xl={4} xs={12} xxl={4}>

            <div className='doctor-img' >
                <img className='img-fluid mb-3' src={img} alt='doctor'/>
            </div>    

            <h4>{name}</h4>  
            <p>
                <FontAwesomeIcon className="icon me-2 textPrimary" 
                icon={icon === 'contact' ? faPhoneAlt: '@' } /> 
                {phone}
            </p>      
        </Col>
    );
};

export default DoctorDetails;