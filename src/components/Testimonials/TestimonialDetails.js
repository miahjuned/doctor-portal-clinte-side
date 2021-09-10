import React from 'react';
import './TestimonialDetails.css';

const TestimonialDetails = (props) => {
    const {quote, name ,from, img} = props.testimonial;
    return (
        <div className='testimonial-item'>
             <p>{quote}</p>
             <div className='testimonial-person d-flex  align-items-center'> 
                    <img className='mx-3' src={img} alt='card img' width="60"/>
                 <div>
                     <h6 className='textPrimary'>{name}</h6>
                     <span className='m-0'>{from}</span>
                 </div>
             </div>
            
        </div>
    );
};

export default TestimonialDetails;