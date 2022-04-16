import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Rolê Social</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Empresa" id="collasible-nav-dropdown">
                <NavDropdown.Item href="quem-somos">
                  Quem somos
                </NavDropdown.Item>
                <NavDropdown.Item href="o-que-oferecemos">
                  O que oferecemos
                </NavDropdown.Item>
                <NavDropdown.Item href="como-o-role-social-funciona">
                  Como o Rolê Social funciona
                </NavDropdown.Item>
                <NavDropdown.Item href="relacoes-com-investidores">
                  Relações com investidores
                </NavDropdown.Item>
                <NavDropdown.Item href="blog">Blog</NavDropdown.Item>
                <NavDropdown.Item href="carreiras">Carreiras</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="seguranca">Segurança</Nav.Link>
              <Nav.Link href="ajuda">Ajuda</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="login">Fazer login</Nav.Link>
              <Nav.Link href="cadastro">Cadastre-se</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
