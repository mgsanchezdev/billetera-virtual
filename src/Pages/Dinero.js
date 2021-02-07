import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';
import { HeaderComponent } from '../Component/Layout/HeaderComponent';
import '../Pages/Login/login.css';

export const Dinero = () => {
  const handlerCargaSaldo = async (e) => {
    let xmls = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://service.soap.com/">
    <soapenv:Header/>
    <soapenv:Body>
       <ser:cargarSaldo>
          <!--Optional:-->
          <documento>30437161</documento>
          <!--Optional:-->
          <celular>2314610149</celular>
          <saldo>500</saldo>
       </ser:cargarSaldo>
    </soapenv:Body>
 </soapenv:Envelope>`;

    axios
      .post(
        'http://localhost:8080/BilleteraVirtual/ClienteService?wsdl',
        xmls,
        {
          headers: { 'Content-Type': 'text/xml' },
        }
      )
      .then((res) => {
        let dataString = JSON.stringify(res.data);
        let indice = dataString.indexOf('<return>');
        let indicefin = dataString.indexOf('</return>');
        let extraida = dataString.substring(indice + 8, indicefin);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {' '}
      <HeaderComponent />
      <Container className="form-login">
        <Form onSubmit={handlerCargaSaldo}>
          <Form.Group
            controlId="formBasicEmail"
            className="login-margin-top input-width"
          >
            <Form.Label>Ingrese el documento </Form.Label>
            <Form.Control type="text" placeholder="52015620" />
          </Form.Group>
          <Form.Group
            controlId="formBasicEmail"
            className="login-margin-top input-width"
          >
            <Form.Label>Ingrese el Email </Form.Label>
            <Form.Control type="email" placeholder="1200" />
          </Form.Group>
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
