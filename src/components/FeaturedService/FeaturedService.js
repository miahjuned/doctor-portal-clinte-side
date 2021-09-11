import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import feturedImg from '../../images/feturedImg.png';

const FeaturedService = () => {
    return (
        <section className="pb-0 pb-md-5 my-5">
            <Container className="mb-5">
                <Row>
                    <Col className="mb-4 m-md-0" lg={5} md={5} sm={12} xl={5} xs={12} xxl={5}>
                        <img className="img-fluid" src={feturedImg} alt="fetured img" />
                    </Col>
                    <Col className="align-self-center" lg={7} md={7} sm={12} xl={7} xs={12} xxl={7}>
                        <h1>Exponetional Dental Care, on your Term</h1>
                        <p className="text-secondary my-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore efacere amet aperiam non odio. Temporibus, nemo quasi quisquam ipsa distinctio saepe sed veniam incidunt, tempora mollitia, dignissimos repellendus expedita. Obcaecati minima, reiciendis optio aspernatur autem pariatur soluta illum velit, eligendi dolorem consequuntur sapiente rerum accusamus aut nulla praesentium! Neque autem animi, voluptatem magnam nesciunt officia nemo nam, delectus minima velit beatae iste praesentium ad repudiandae, similique excepturi sapiente.
                        </p>
                        <button className="btn btn-primary">Learn More</button>
                    </Col>
                </Row>
            </Container>
            
        </section>
    );
};

export default FeaturedService;