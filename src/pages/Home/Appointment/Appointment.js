import React, { useState } from 'react';
import AppointmentHeader from '../../../components/Appointment/AppointmentHeader/AppointmentHeader';
import BookAppointment from '../../../components/Appointment/AppointmentHeader/BookAppointment/BookAppointment';
import Footer from '../../../components/Footer/Footer';
import NavbarArea from '../../../components/Navbar/Navbar';

const Appointment = () => {
    const [selectedDate, setSelectedDate] =useState(new Date())
    const handleDateChange = date => {
        setSelectedDate(date)
    }

    return (
        <div>
            <NavbarArea></NavbarArea>
            <AppointmentHeader handleDateChange={handleDateChange}></AppointmentHeader>
            <BookAppointment selectedDate={selectedDate}></BookAppointment>
            <Footer></Footer>
            
        </div>
    );
};

export default Appointment;