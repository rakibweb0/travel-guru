import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/logo.png'
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { NavDropdown } from 'react-bootstrap';

const Header = () => {
    const location = useLocation();
    const { user, userLogout } = useContext(AuthContext);

    const handleLogout = () => {
        userLogout()
            .then(result => console.log('Logout Successful'))
            .catch(err => console.log(err))

    }
    return (
        <Navbar expand="lg" variant="dark">
            <Container>
                <Link className='flex-grow-1' to="/"><img src={Logo} style={{ width: "110px" }} alt="" /></Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    {location.pathname == "/user/login" || location.pathname == "/user/register" ? '' : <Form className="d-flex me-lg-3">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-warning">Search</Button>
                    </Form>
                    }
                    <Nav
                        className="me-auto my-2 my-lg-0 text-right align-items-md-center"
                        style={{ maxHeight: '100vh' }}
                        navbarScroll
                    >
                        <Link to="/page/packages" className='text-white text-decoration-none me-md-3'>Packages</Link>
                        <Link to="/booking" className='text-white text-decoration-none me-md-3'>Booking</Link>
                        <Link to="" className='text-white text-decoration-none me-md-3'>Blog</Link>
                        <Nav.Link className='text-white' href="#action2">Contact</Nav.Link>
                        <div>
                            {user ?
                                <NavDropdown title={user.email} id="navbarScrollingDropdown">
                                    <NavDropdown.Item>
                                        Profile
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={handleLogout}>
                                        Logout
                                    </NavDropdown.Item>
                                </NavDropdown>
                                : <Link to="/page/login"><Button className='btn-warning btn-sm ms-5'>Login</Button></Link>}
                        </div>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;