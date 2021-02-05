import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderComponent } from '../Component/Layout/HeaderComponent';
import { Form, Button, Container } from 'react-bootstrap';
import '../Pages/Login/login.css';

export const Compra = () => {
  return (
    <>
      <HeaderComponent />
      <Container className="form-login">
        <Form>
          <Form.Group
            controlId="formBasicEmail"
            className="login-margin-top input-width"
          >
            <Form.Label>CUIT Negocio </Form.Label>
            <Form.Control type="text" placeholder="254458555" />
            <Form.Label>Monto de la compra </Form.Label>
            <Form.Control type="text" placeholder="1000" />
          </Form.Group>

          <Link to="/home">
            <Button className="bt-login" variant="success" type="submit">
              Pagar compra
            </Button>
          </Link>
        </Form>
      </Container>
    </>
  );
};
