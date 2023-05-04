import React from 'react';
import banner from '../../../assets/food-1.jpg';
import { Container } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <Container className='d-flex hello'>
            <div className='banner-container'>
                <img src={banner} alt="" />
            </div>
            <div className='banner p-2'>
            <div className='ms-4 mt-5'>
                <h3>Chicken Bhuna</h3>
                <button className='btn btn-primary mt-2 mb-5 px-3 py-2'>Bangladesh Food</button>
                <p className='fs-5 fw-normal'>Chicken Bhuna is a spicy and flavorful dish that originated in Bangladesh. It is made with tender chicken pieces cooked in a rich blend of spices and tomatoes, and is often served with rice or naan bread.</p>
            </div>
            </div>
        </Container>
    );
};

export default Banner;