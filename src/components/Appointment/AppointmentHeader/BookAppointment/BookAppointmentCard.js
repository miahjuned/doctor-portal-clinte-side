import React from 'react';
import { Card, Col } from 'react-bootstrap';

const BookAppointmentCard = ({booking, selectedDate}) => {
    return (
        <Col className='mb-5' md={4} >
            <Card className='p-3'>
                <Card.Body className='text-center'>
                    <Card.Title>
                        <h5 className='textPrimary'>{booking.subject}</h5>
                        <h6>{booking.visitingHour}</h6>
                        <p>{booking.totalSpace} SPACES AVAILABLE</p>
                    </Card.Title>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default BookAppointmentCard;