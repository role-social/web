import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, logout } from '../../firebase';
import { headerContent } from './compose/content';
import { AppNavBar, setItemActive } from 'baseui/app-nav-bar';
import { useStyletron } from 'baseui';
import { useNavigate } from 'react-router-dom';
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem,
} from 'baseui/header-navigation';
import { StyledLink } from 'baseui/link';
import { Button } from 'baseui/button';

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  let navigate = useNavigate();

  const [userName, setUserName] = useState();

  const logoutUser = () => {
    logout();
    // navigate('/');
  };

  const onUserItemSelect = (item) => {
    if (item.url) navigate(item.url);

    if (item.logout) logoutUser();
  };

  const userItems = [
    { label: 'Adicionar Social', url: '/adicionar-social' },
    { label: 'Sair', logout: logoutUser },
  ];

  useEffect(() => {
    if (loading) return;
    if (user) setUserName(user.displayName);
  }, [user]);

  return (
    <>
      {user && (
        <AppNavBar
          title={<label onClick={() => navigate('/')}>Rolê Social</label>}
          userItems={userItems}
          username={userName}
          usernameSubtitle="5.0"
          userImgUrl=""
          onUserItemSelect={(item) => onUserItemSelect(item)}
        />
      )}
      {!user && (
        <HeaderNavigation>
          <StyledNavigationList $align={ALIGN.left}>
            <StyledNavigationItem>Rolê Social</StyledNavigationItem>
          </StyledNavigationList>
          <StyledNavigationList $align={ALIGN.center} />
          <StyledNavigationList $align={ALIGN.right}>
            <StyledNavigationItem>
              <StyledLink href="/login">Sobre</StyledLink>
            </StyledNavigationItem>
            <StyledNavigationItem>
              <StyledLink href="/login">Login</StyledLink>
            </StyledNavigationItem>
          </StyledNavigationList>
          <StyledNavigationList $align={ALIGN.right}>
            <StyledNavigationItem>
              <Button onClick={() => navigate('/cadastro')}>Cadastre-se</Button>
            </StyledNavigationItem>
          </StyledNavigationList>
        </HeaderNavigation>
      )}
    </>
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
