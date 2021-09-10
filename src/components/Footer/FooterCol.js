import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FooterCol = (props) => {
    const {menuItem, menuTitle, link} = props;
    return (
        <Col md={3}>
            <h6 className="textPrimary menu-title">
                {menuTitle ? menuTitle : " "}
            </h6>
            <ul className='list-unstyled mt-4'>
                {
                    menuItem.map((item, idx) =>
                     <li key={idx}>
                         <Link to={link} className="text-secondary menu-item">{item.name}</Link>
                    </li>)
                }
                {
                    props.children && props.children
                }
            </ul>
            
        </Col>
    );
};

export default FooterCol;