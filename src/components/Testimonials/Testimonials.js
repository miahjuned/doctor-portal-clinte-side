import React from 'react';
import { Container } from 'react-bootstrap';
import TestimonialData from '../../Data/testimonials';
import TestimonialDetails from '../Testimonials/TestimonialDetails';
import './Testimonials.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const testimonials = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

    return (
        <section className='my-5 py-5'>
            <Container>
                <div className='testimonial-title'>
                    <h5 className='textPrimary text-uppercase'>Testimonial</h5>
                    <h1>What Our Patients <br/> Says </h1>
                </div>
                <Slider {...settings}>
                    {
                        TestimonialData.map((testimonial, idx) => (<TestimonialDetails testimonial={testimonial} key={idx}></TestimonialDetails>))
                    }
                </Slider>
            </Container>
        </section>
    );
};

export default testimonials;