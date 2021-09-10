import React from 'react';
import { Container, Row } from 'react-bootstrap';
import doctor from '../../Data/Doctor';
import DoctorDetails from './DoctorDetails';
import './Ourdoctor.css'
const OurDoctor = () => {
    return (
        <section className='pb-5'>
            <Container>
                <h5 className='text-center textPrimary mb-5'>Our Doctors</h5>
                <Row>
                    {
                        doctor.map((doctor, idx) =>(<DoctorDetails key={idx} doctor={doctor}>
                            </DoctorDetails>))
                    }
                </Row>
            </Container>
            
        </section>
    );
};

export default OurDoctor;