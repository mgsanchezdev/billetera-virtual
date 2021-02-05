import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';
import { HeaderComponent } from '../Component/Layout/HeaderComponent';
import '../Pages/Login/login.css';

export const Dinero = () => {
  return (
    <>
      {' '}
      <HeaderComponent />
      <Container className="form-login">
        <Form>
          <Form.Group
            controlId="formBasicEmail"
            className="login-margin-top input-width"
          >
            <Form.Label>
              Cargue el saldo que desea a su billetera virtual{' '}
            </Form.Label>
            <Form.Control type="text" placeholder="1200" />
          </Form.Group>

          <Link to="/home">
            <Button className="bt-login" variant="success" type="submit">
              Cargar saldo
            </Button>
          </Link>
        </Form>
      </Container>
    </>
  );
};
