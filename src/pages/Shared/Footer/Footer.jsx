import React from 'react';
import Card from 'react-bootstrap/Card';
import logo from '../../../assets/logo2.png'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaYoutube, FaDribbble } from 'react-icons/fa';

const Footer = () => {
    return (
        <Card className="text-center rounded-0" bg="dark" variant="dark">
            <Card.Header className='footer-logo'>
                <img src={logo} alt="" />
            </Card.Header>
            <Card.Footer className="text-muted">
                <div>
                    <footer className="text-center text-white">

                        <div className="container">

                            <section className="mb-5 mt-4">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-lg-8">
                                        <p>
                                        The site also features fantastic recipe videos that are often displayed on social media platforms such as Snapchat, Facebook, and TikTok. The site allows users with an account to save recipes, share their creations, and make shopping lists.
                                        </p>
                                    </div>
                                </div>
                            </section>
                            <section className="text-center mb-5">
                                <h3 className='text-light mb-4 text-center'>Get Social with Us</h3>
                                <a href="" className="text-white me-4">
                                    <FaFacebook style={{ fontSize: '30px' }}></FaFacebook>
                                </a>
                                <a href="" className="text-white me-4">
                                    <FaGithub style={{ fontSize: '30px' }}></FaGithub>
                                </a>
                                <a href="" className="text-white me-4">
                                    <FaInstagram style={{ fontSize: '30px' }}></FaInstagram>
                                </a>
                                <a href="" className="text-white me-4">
                                    <FaLinkedin style={{ fontSize: '30px' }}></FaLinkedin>
                                </a>
                                <a href="" className="text-white me-4">
                                    <FaYoutube style={{ fontSize: '30px' }}></FaYoutube>
                                </a>
                                <a href="" className="text-white me-4">
                                    <FaDribbble style={{ fontSize: '30px' }}></FaDribbble>
                                </a>
                            </section>
                        </div>
                        <div
                            className="text-center p-3"
                        >
                            <a className='text-decoration-none text-white'>© Copyright 2015 All Rights Reserved by</a>
                        </div>
                    </footer>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default Footer;