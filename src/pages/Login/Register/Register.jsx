import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';

const Register = () => {

    const {createUser} = useContext(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email =form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
        })
        .catch(error => {
            console.error(error.message);
        })
    }

    return (
        <Container className='w-25 mx-auto my-3 py-4'>
            <h3>Please Register</h3>
            <Form onSubmit={handleRegister} className='bg-light border px-5 py-3 rounded'>
                <Form.Group className="mb-3" controlId="formBasicEmail1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your Name" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail2">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Photo URL" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name='accept' label="Accept Terms and Conditions" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-success">
                    Already Have an Account? <Link to="/login">Login</Link>
                </Form.Text>
                <Form.Text className="text-success">
                </Form.Text>
                <Form.Text className="text-danger">
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;