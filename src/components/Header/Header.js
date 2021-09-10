import React from 'react';
import HeaderMain from '../Header-main/HeaderMain';
import IntroInfo from '../IntroInfo/IntroInfo';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <IntroInfo></IntroInfo>
            {/* <BusinessInfo></BusinessInfo> */}
        </div>
    );
};

export default Header;