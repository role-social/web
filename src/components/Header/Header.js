import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, logout } from '../../firebase';
import { headerContent } from './compose/content';
import { AppNavBar, setItemActive } from 'baseui/app-nav-bar';
import { useStyletron } from 'baseui';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  let navigate = useNavigate();

  const logoutUser = () => {
    logout();
  };

  const userItems = [
    { label: 'Adicionar Social', url: 'adicionar-social' },
    { label: 'Sair', url: '' },
  ];

  return (
    <AppNavBar
      title={<label onClick={() => navigate('/')}>Rolê Social</label>}
      userItems={userItems}
      username="Osvaldo Cabral"
      usernameSubtitle="5.0"
      userImgUrl=""
      onUserItemSelect={(item) => navigate(item.url)}
    />
    // <Navbar bg="dark" variant="dark" expand="lg">
    //   <Container>
    //     <Navbar.Brand href="/">Rolê Social</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="navbarScroll" />
    //     <Navbar.Collapse id="navbarScroll">
    //       <Nav className="me-auto">
    //         <NavDropdown title="Empresa" id="collasible-nav-dropdown">
    //           {headerContent.map((item, index) => (
    //             <NavDropdown.Item href={item.href} key={index}>
    //               {item.title}
    //             </NavDropdown.Item>
    //           ))}
    //         </NavDropdown>

    //         <Nav.Link href="seguranca">Segurança</Nav.Link>
    //         <Nav.Link href="ajuda">Ajuda</Nav.Link>
    //       </Nav>

    //       <Nav>
    //         {!user && (
    //           <>
    //             <Nav.Link href="login">Fazer login</Nav.Link>
    //             <Nav.Link href="cadastro">Cadastre-se</Nav.Link>
    //           </>
    //         )}
    //         {user && (
    //           <Nav.Link href="/login" onClick={() => logoutUser()}>
    //             Sair
    //           </Nav.Link>
    //         )}
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
};

export default Header;
