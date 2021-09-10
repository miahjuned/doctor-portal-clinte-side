import React from 'react';
import Blog from '../../components/Blog/Blog';
import FeaturedService from '../../components/FeaturedService/FeaturedService';
import Header from '../../components/Header/Header';
import HomeAppointmentBanner from '../../components/HomeAppointmentBanner/HomeAppointmentBanner';
import OurDoctor from '../../components/OurDoctor/OurDoctor';
import Services from '../../components/services/Services';
import Testimonials from '../../components/Testimonials/Testimonials';
import Contract from '../../components/Contact/Contact';
import './Home.css'
import Footer from '../../components/Footer/Footer';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <FeaturedService></FeaturedService>
            <HomeAppointmentBanner></HomeAppointmentBanner>
            <Testimonials></Testimonials>
            <Blog></Blog>
            <OurDoctor></OurDoctor>
            <Contract></Contract>
            <Footer></Footer>
        </div>
    );
};

export default Home;