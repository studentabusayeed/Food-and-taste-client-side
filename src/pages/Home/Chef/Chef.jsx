import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Chef = () => {
    const [food, setFood] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/food')
        .then(res => res.json())
        .then(data => setFood(data))
        .catch(error => console.error(error));
    }, []);
    return (
        <div>
           
        </div>
    );
};

export default Chef;