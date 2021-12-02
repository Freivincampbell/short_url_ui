import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";

const NavBar = ({setShowForm}) => {

  const handleClickHome = () => {
    setShowForm(false);
  }

  const handleClickCreate = () => {
    setShowForm(true);
  }
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={handleClickHome}>Short Urls Top</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={handleClickCreate}>Create Short Link</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar;
