import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './login.css';
export const Login = () => {
  return (
    <>
      <Container className="form-login">
        <Form>
          <Form.Group
            controlId="formBasicEmail"
            className="login-margin-top input-width"
          >
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Link to="/home">
            <Button className="bt-login" variant="success" type="submit">
              Iniciar sesión
            </Button>
          </Link>
        </Form>
      </Container>
      <Container className="container-link-register">
        <Row>
          <Col>
            <Link to="/register" className="link-register">
              Crear cuenta
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};
