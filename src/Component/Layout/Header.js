import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Button, Col } from 'react-bootstrap';
import './header.css';
export const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#">Billetera virtual</Navbar.Brand>
      <Navbar.Brand href="#">Bienvenido</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Productos" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#">Pagos divididos</NavDropdown.Item>
            <NavDropdown.Item href="#">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#">Pagos</NavDropdown.Item>
            <NavDropdown.Item href="#">Recacudo</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Compañia" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#">Partners</NavDropdown.Item>
            <NavDropdown.Item href="#">Recursos Gráficos</NavDropdown.Item>
            <NavDropdown.Item href="#">Constacto</NavDropdown.Item>
            <NavDropdown.Item href="#">Nosotros</NavDropdown.Item>
            <NavDropdown.Item href="#">Preguntas Frecuentes</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#">Soporte</Nav.Link>
          <NavDropdown title="Desarrollador" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#">Documentación</NavDropdown.Item>
            <NavDropdown.Item href="#">Plugins</NavDropdown.Item>
            <NavDropdown.Item href="">SDKs</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="">Tarifas</Nav.Link>
          <Nav.Link href="">Blog</Nav.Link>
        </Nav>
        <Col className="menu_login">
          <Nav>
            <Nav.Link eventKey={2} href="#">
              <Link to="/login">
                <Button className="btn_crear_cuenta"> Iniciar Sesión</Button>
              </Link>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#">
              <Link to="/register">
                <Button className="btn_crear_cuenta"> Crear Cuenta</Button>
              </Link>
            </Nav.Link>
          </Nav>
        </Col>
      </Navbar.Collapse>
    </Navbar>
  );
};
