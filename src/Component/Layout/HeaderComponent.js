import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button, Col } from 'react-bootstrap';
import './header.css';
export const HeaderComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Billetera virtual</Navbar.Brand>
      <Navbar.Brand href="#">Bienvenido Juan Perez</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Col className="menu_login">
          <Nav>
            <Nav.Link eventKey={2} href="#">
              <Link to="/home">
                <Button className="btn_crear_cuenta btn_heacer_componet">
                  {' '}
                  Home
                </Button>
              </Link>
            </Nav.Link>
          </Nav>
        </Col>
      </Navbar.Collapse>
    </Navbar>
  );
};
