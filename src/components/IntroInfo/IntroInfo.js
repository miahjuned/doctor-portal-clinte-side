import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './IntroInfo.css';
import IntroData from '../../Data/IntroInfo.js';
import IntroInfoCard from './IntroInfoCard';

const IntroInfo = () => {
    return (
        <div className="Intro-infos">
            <Container>
                <Row className="row">
                    {
                        IntroData.map(info => <IntroInfoCard info={info}/>)
                    }
                </Row>
            </Container>
            
        </div>
    );
};

export default IntroInfo;