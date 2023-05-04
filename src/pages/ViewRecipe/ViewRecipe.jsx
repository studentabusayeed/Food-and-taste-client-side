import React from 'react';
import { Container, Image } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './ViewRecipe.css';
import { FaHeart } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ViewRecipe = () => {
    const notify = () => toast("Fovorite Clicked!");
    const recipe = useLoaderData();
    const { image, name, yearsOfExperience, img1, img2, img3, name1, name2, name3, ingredients, rating } = recipe;
    return (
        <div>
            <Container className='d-flex mb-5 mt-4'>
                <div>
                    <img src={image} alt="" />
                </div>
                <div className='banner p-5 d-flex align-items-center'>
                    <div className='ms-4 mt-5 p-3'>
                        <h3>Name: {name}</h3>
                        <button className='btn btn-primary mt-2 mb-2 px-3 py-2'>All Food</button>
                        <p className='fs-5 fw-semi-bold'>Years Of Experience: {yearsOfExperience}</p>
                    </div>
                </div>
            </Container>
            <Container className='mb-5'>
                <CardGroup>
                    <Card className='mx-2 border rounded'>
                        {/* <Card.Img variant="top" src={img1} /> */}
                        <Image className='recipe' src={img1} fluid />
                        <Card.Body>
                            <Card.Title>Recipe Name: {name1}</Card.Title>
                            <Card.Text>
                                <p>Rating: {rating}</p>
                                <div>
                                    <button onClick={notify}>Favorite <FaHeart /> </button>
                                    <ToastContainer />
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='mx-2 border rounded'>
                        {/* <Card.Img variant="top" src={img2} /> */}
                        <Image className='recipe' src={img2} fluid />
                        <Card.Body>
                            <Card.Title>Recipe Name: {name2}</Card.Title>
                            <Card.Text>
                                <p>Rating: {rating}</p>
                                <div>
                                    <button onClick={notify}>Favorite <FaHeart /> </button>
                                    <ToastContainer />
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='mx-2 border rounded'>
                        {/* <Card.Img variant="top" src={img3} /> */}
                        <Image className='recipe' src={img3} fluid />
                        <Card.Body>
                            <Card.Title>Recipe Name: {name3}</Card.Title>
                            <Card.Text>
                                <p>Rating: {rating}</p>
                                <div>
                                    <button onClick={notify}>Favorite <FaHeart /> </button>
                                    <ToastContainer />
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Container>
        </div>
    );
};

export default ViewRecipe;