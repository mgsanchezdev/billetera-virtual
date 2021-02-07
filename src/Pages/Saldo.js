import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2';
import { HeaderComponent } from '../Component/Layout/HeaderComponent';
import './pages.css';

export const Saldo = () => {
  const handlerConsultarSAldoSaldo = async (e) => {
    e.preventDefault();
    let mensaje = '';
    let dataString = '';
    let indiceInicio = 0;
    let indiceFin = 0;
    const [documento, celular] = e.target;

    let xmls = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://service.soap.com/">
    <soapenv:Header/>
    <soapenv:Body>
       <ser:consultarSaldo>
          <!--Optional:-->
          <celular>${celular.value}</celular>
          <!--Optional:-->
          <documento>${documento.value}</documento>
       </ser:consultarSaldo>
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
        dataString = JSON.stringify(res.data);
        indiceInicio = dataString.indexOf('<return>');
        indiceFin = dataString.indexOf('</return>');
        mensaje = dataString.substring(indiceInicio + 8, indiceFin);
        Swal.fire('', `${mensaje}`, 'success');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <HeaderComponent />
      <Container className="form-login">
        <Form onSubmit={handlerConsultarSAldoSaldo}>
          <Form.Group
            controlId="formBasicEmail"
            className=" dinero-margin-top input-width"
          >
            <Form.Label>Ingrese el documento </Form.Label>
            <Form.Control type="text" placeholder="52015620" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail" className=" input-width">
            <Form.Label>Ingrese el numero de celular </Form.Label>
            <Form.Control type="text" placeholder="55454545" />
          </Form.Group>
          <Button className="bt-login" variant="success" type="submit">
            Cargar saldo
          </Button>
        </Form>
      </Container>
    </>
  );
};
