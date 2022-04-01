import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';

const Header = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Rolê</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="ustify-content-end">
                        <Nav className="container-fluid">
                            <Nav.Item className="ms-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );

};

export default Header;