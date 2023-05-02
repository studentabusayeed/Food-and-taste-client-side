import React from 'react';
import Banner from '../Banner/Banner';
import Chef from '../Chef/Chef';
import Testimonials from '../Testimonials/Testimonials';
import LogoBanner from '../LogoBanner/LogoBanner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Chef></Chef>
            <Testimonials></Testimonials>
            <LogoBanner></LogoBanner>
        </div>
    );
};

export default Home;