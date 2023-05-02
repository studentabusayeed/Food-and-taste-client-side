import React, { useEffect, useState } from 'react';
import ChefCard from '../ChefCard/ChefCard';
import { Container } from 'react-bootstrap';

const Chef = () => {
    const [food, setFood] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/food')
            .then(res => res.json())
            .then(data => setFood(data))
            .catch(error => console.error(error));
    }, []);
    return (
        <Container className='my-5'>
            <div className='text-center'>
            <h2 className='text-center text-success fw-bold'>Our Chefs</h2>
            <hr className='fw-bold text-center' />
            </div>
            <div className='row row-cols-3'>
                {
                    food.map(chef => <ChefCard
                        key={chef.id}
                        chef={chef}
                    ></ChefCard>)
                }
            </div>
        </Container>
    );
};

export default Chef;