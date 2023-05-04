import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {
    const { id, image, name, numRecipes, yearsOfExperience, Likes } = chef;
    return (
        <div>
            <div className='mb-5 m-2'>
                <Card style={{ width: '22rem' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>Name: {name}</Card.Title>
                        <Card.Text>
                            <h4>Years of experience: {yearsOfExperience}</h4>
                            <h6>Numbers of recipes: {numRecipes}</h6>
                            <p>Likes: {Likes}</p>
                        </Card.Text>
                        <Link to={`/view-recipe/${id}`}>
                            <Button variant="primary">View Recipes Button</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default ChefCard;