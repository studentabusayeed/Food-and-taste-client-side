import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';
import { updateProfile } from 'firebase/auth';

const Register = () => {

    const { createUser } = useContext(AuthContext);

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = (event) => {
        event.preventDefault();
        setSuccess('');
        setError('');
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please add at least one uppercase');
            return;
        }
        else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError('Please add at least two numbers');
            return;
        }
        else if (password.length < 6) {
            setError('Please add at least 6 characters in your password');
            return;
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setError('');
                form.reset();
                setSuccess('User has been created successfully');
                updateUserData(result.user, name);
            })
            .catch(error => {
                console.error(error.message);
                setError(error.message);
            })
    }

    
    const updateUserData = (user, name) => {
        updateProfile(user, {
            displayName: name
        })
        .then( () => {
            console.log('user name updated');
        })
        .catch(error => {
            setError(error.message);
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

                <Form.Group className="mb-1" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Text className="text-success">
                    {success}
                </Form.Text>
                <Form.Text className="text-danger mb-2">
                    {error}
                </Form.Text>
                <Form.Group className="mb-3 mt-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name='accept' label="Accept Terms and Conditions" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-success">
                    Already Have an Account? <Link to="/login">Login</Link>
                </Form.Text>
                {/* <br />
                <Form.Text className="text-success">
                    {success}
                </Form.Text>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text> */}
            </Form>
        </Container>
    );
};

export default Register;