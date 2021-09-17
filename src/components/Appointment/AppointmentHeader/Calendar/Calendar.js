import React from 'react';
import './Calendar.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const CalendarArea = ({handleDateChange}) => {
    return (
        <div className='Calendar-Container'>
            <Calendar
                className='textPrimary shadowHard'
                minDate={new Date()}
                maxDate={new Date(new Date(). getTime() + 24 * 60 * 60 * 4000)}
                onChange={handleDateChange}
                value={new Date()}
            />
        </div>
    );
};

export default CalendarArea;