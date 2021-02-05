import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button, Col } from 'react-bootstrap';
export const HeaderRegister = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Billetera virtual</Navbar.Brand>
      <Navbar.Brand href="#">Bienvenido Juan Perez</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Col className="menu_login">
          <Nav>
            <Nav.Link eventKey={2} href="#">
              <Link to="/compra">
                <Button className="btn_crear_cuenta btn_header_component">
                  {' '}
                  Hacer compra
                </Button>
              </Link>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#">
              <Link to="/saldo">
                <Button className="btn_crear_cuenta btn_header_component">
                  {' '}
                  Consultar saldo
                </Button>
              </Link>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#">
              <Link to="/dinero">
                <Button className="btn_crear_cuenta btn_header_component">
                  {' '}
                  Cargar dinero
                </Button>
              </Link>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#">
              <Link to="/">
                <Button className="btn_crear_cuenta btn_header_component">
                  {' '}
                  Salir
                </Button>
              </Link>
            </Nav.Link>
          </Nav>
        </Col>
      </Navbar.Collapse>
    </Navbar>
  );
};
