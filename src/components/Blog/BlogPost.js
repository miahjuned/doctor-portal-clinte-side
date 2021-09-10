import React from 'react';
import { Card, Col } from 'react-bootstrap';

const BlogPost = (props) => {
    console.log(props.blog)
    const {title, description, author, authorImg , date} = props.blogPost;
    return (
        <Col md={4}>
            <Card className='shadow'>
                <Card.Header className='d-flex  align-items-center'>
                    <img className='mx-3' src={authorImg} alt=''  width="60"/>
                    <div>
                        <h6 className='textPrimary'>{author}</h6>
                        <p className='m-0'>{date}</p>
                    </div>
                </Card.Header>     
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description} </Card.Text>
                <button className='btn '>Read More</button> 
                </Card.Body>      
            </Card>
        </Col>
    );
};

export default BlogPost;