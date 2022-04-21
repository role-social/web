import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { headerContent } from './compose/content';

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
                {headerContent.map((item, index) => (
                  <>
                    <NavDropdown.Item href={item.href} key={index}>
                      {item.title}
                    </NavDropdown.Item>
                  </>
                ))}
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
