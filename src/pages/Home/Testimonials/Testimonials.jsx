import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import food5 from '../../../assets/food5.jpg'
import food6 from '../../../assets/food6.jpg'
import food3 from '../../../assets/food3.jpg'
import test1 from '../../../assets/test-1.jpg'
import test2 from '../../../assets/test-2.jpg'
import test3 from '../../../assets/test-3.jpg'
import { Image } from 'react-bootstrap';
import './Testimonials.css';

const Testimonials = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item className='container-item'>
                    <div className='item'>
                        <img
                            className="d-block w-100"
                            src={food5}
                            alt="First slide"
                        />
                    </div>
                    {/* <Image src={food} fluid alt="First slide" /> */}
                    <Carousel.Caption className='content'>
                        <h3 className='text-warning fw-bold fs-2'>Clients' Testimonials</h3>
                        <p className='text-white fw-bold fs-5'>What others say about us</p>
                        <div>
                            <Image className="item-1" src={test1} roundedCircle />
                        </div>
                        <h6 className='text-warning fw-bold fs-5'>Jeff Hammer</h6>
                        <p className='text-warning fw-bold fs-6'>"Outstanding work!"
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='container-item'>
                    <div className='item'>
                        <img
                            className="d-block w-100"
                            src={food6}
                            alt="First slide"
                        />
                    </div>

                    <Carousel.Caption className='content'>
                        <h3 className='text-warning fw-bold fs-2'>Clients' Testimonials</h3>
                        <p className='text-white fw-bold fs-5'>What others say about us</p>
                        <div>
                            <Image className="item-1" src={test2} roundedCircle />
                        </div>
                        <h6 className='text-warning fw-bold fs-5'>Richard Brooke</h6>
                        <p className='text-warning fw-bold fs-6'>"Nice work!"
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='container-item'>
                    <div className='item'>
                        <img
                            className="d-block w-100"
                            src={food3}
                            alt="First slide"
                        />
                    </div>

                    <Carousel.Caption className='content'>
                        <h3 className='text-warning fw-bold fs-2'>Clients' Testimonials</h3>
                        <p className='text-white fw-bold fs-5'>What others say about us</p>
                        <div>
                            <Image className="item-1" src={test3} roundedCircle />
                        </div>
                        <h6 className='text-warning fw-bold fs-5'>William Hence</h6>
                        <p className='text-warning fw-bold fs-6'>"great job"
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Testimonials;