import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
// import { useRouter } from 'next/router';

const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Rolê</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="ustify-content-end">
            <Nav className="container-fluid">
              <Nav.Item className="ms-auto"></Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
