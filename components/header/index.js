import React, { useEffect } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Rolê Social</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Empresa" id="collasible-nav-dropdown">
              <NavDropdown.Item href="quem-somos">Quem somos</NavDropdown.Item>
              <NavDropdown.Item href="O-que-oferecemos">
                O que oferecemos
              </NavDropdown.Item>
              <NavDropdown.Item href="como-o-role-social-funciona">
                Como o role social funciona
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="relacao-com-investidores">
                Relação com investidores
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="blog">Blog</Nav.Link>
            <Nav.Link href="carreiras">Carreiras</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/login">Fazer login</Nav.Link>
            <Nav.Link eventKey={2} href="cadastre-se">
              Cadastre-se
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default header;
