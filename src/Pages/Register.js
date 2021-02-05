import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './register.css';

const Register = () => {
  return (
    <>
      <Container className="register-margin-top">
        <Row>
          <Col className="form-register">
            <Form className="input-width-register ">
              <Form.Group>
                <Form.Label className="text-form">Ingrese su nombre</Form.Label>
                <Form.Control type="text" placeholder="Juan" name="name" />
              </Form.Group>
              <Form.Group>
                <Form.Label className="text-form">
                  Ingrese su apellido
                </Form.Label>
                <Form.Control type="text" placeholder="Perez" name="lastName" />
              </Form.Group>
              <Form.Group>
                <Form.Label className="text-form">
                  Ingrese su telefono
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="+54-2155-521656"
                  name="telefono"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="text-form">
                  Ingrese su usuario
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="usuario@usuario.com"
                  name="email"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="text-form">
                  Ingrese su contraseña
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="*****************"
                  name="password"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="text-form">
                  Repita la contraseña su contraseña
                </Form.Label>
                <Form.Control
                  type="password"
                  placeholder="*****************"
                  name="passwordRepeat"
                />
              </Form.Group>
              <Link to="/login" className="link-login">
                <Button className="bt-register" type="submit" variant="success">
                  Registrar
                </Button>
              </Link>
            </Form>
          </Col>
        </Row>
      </Container>
      <Container className="container-link-login">
        <Row>
          <Col>
            <Link to="/login" className="link-login">
              Iniciar sesíon
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Register;
