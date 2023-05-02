import React from 'react';
import logo1 from '../../../assets/p1.png';
import logo2 from '../../../assets/p2.png';
import logo3 from '../../../assets/p3.png';
import logo4 from '../../../assets/p4.png';
import logo5 from '../../../assets/p5.png';
import { Container } from 'react-bootstrap';
import './LogoBanner.css';

const LogoBanner = () => {
    return (
        <Container>
            <h4 className=' text-center text-success mb-2 fw-semi-bold fs-2'>Restaurant Logo</h4>
            <hr />
            <div className='banner-item my-4 py-5'>
                <div className='d-flex justify-content-center align-items-center banner-logo mr-5'>
                    <img src={logo1} alt="" />
                    <img src={logo2} alt="" />
                    <img src={logo3} alt="" />
                    <img src={logo4} alt="" />
                    <img src={logo5} alt="" />
                </div>
            </div>
        </Container>
    );
};

export default LogoBanner;