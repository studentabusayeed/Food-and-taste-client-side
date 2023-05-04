import React, { useEffect, useState } from 'react';
import ChefCard from '../ChefCard/ChefCard';
import { Container } from 'react-bootstrap';
import SpinnerL from '../spinner/SpinnerL';

const Chef = () => {
    const [food, setFood] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    {isLoading ? < SpinnerL/> : ''}

    useEffect(() => {
        setIsLoading(true);
        fetch('https://food-and-taste-server-side-studentabusayeed.vercel.app/food')
            .then(res => res.json())
            .then(data => {
                setFood(data)
                setIsLoading(false)
            })
            .catch(error => {
                console.error(error)
                setIsLoading(false)
            })
    }, []);
    return (
        <Container className='my-5'>
            <div className='text-center'>
            <h2 className='text-center text-success fw-semi-bold'>Our Chefs</h2>
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