import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar} from 'react-bootstrap';
import './Header.css';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProviders';


const Header = () => {
    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(error => console.error(error));
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home" className='fw-bold fs-4 text-success fst-italic'>Food & Taste Recipe</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className='text-decoration-none fs-5 fw-bold  text-black' to="/">Home</Link>
                        <Link className='mx-4  text-decoration-none fs-5 fw-bold text-black' to="/blog">Blog</Link>
                    </Nav>
                    <Nav>

                        {
                            user ?
                                <>
                                    <FaUserAlt title='hello' style={{ fontSize: '2rem' }}></FaUserAlt>
                                    <Button className='ms-2' onClick={handleLogout} variant="primary">Sign Out</Button></> :
                                <Link to="/login">
                                    <Button variant="primary">Login</Button>
                                </Link>
                        }
                        <Link to="/register">
                            <Button className='ms-3' variant="primary">Register</Button>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;