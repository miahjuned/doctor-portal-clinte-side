import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarkerAlt, faPhoneAlt, } from '@fortawesome/free-solid-svg-icons'
import { Col} from 'react-bootstrap';

const IntroInfoCard = props => {
    const {title, icon, description , bg } = props.info;
    return (
        <Col className="text-white mb-2" md={4}>
            <div className={`${bg}  py-4  px-5  d-flex align-items-center rounded`}>
                <FontAwesomeIcon className="icon me-4" icon={
                        icon === 'clock' ? faClock :
                        icon === 'location' ? faMapMarkerAlt :
                        faPhoneAlt
                } />
                <div>
                    <h6>{title}</h6>
                    <p className="small m-0">{description}</p>
                </div>

            </div>
            
        </Col>
    );
};

export default IntroInfoCard;