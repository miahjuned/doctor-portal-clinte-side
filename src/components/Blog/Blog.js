import React from 'react';
import BlogPost from './BlogPost';
import blogData from '../../Data/blogs';
import {Container} from 'react-bootstrap';
import './Blog.css';

const Blog = () => {
    return (
        <section className='blogs my-5'>
            <Container>
                <div className='section-header text-center'>
                    <h5 className='textPrimary text-uppercase'>our blog</h5>
                    <h1>From Our Blog News</h1>
                </div>
                <div className='row pb-5 mt-5'>
                    {
                        blogData.map((blogPost, idx) => (
                            <BlogPost key={idx} blogPost={blogPost}></BlogPost>
                        ))
                    }
                </div>
            </Container>
        </section>
    );
};

export default Blog;