import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import './register.css';

const Register = () => {
  const history = useHistory();
  const handlerRegister = (e) => {
    e.preventDefault();
    const [
      name,
      lastName,
      documento,
      telefono,
      email,
      password,
      passwordRepeat,
    ] = e.target;
    let xmls = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://service.soap.com/">
    <soapenv:Header/>
    <soapenv:Body>
       <ser:createCliente>
          <!--Optional:-->
          <client>
             <!--Optional:-->
             <celular>${telefono.value}</celular>
             <!--Optional:-->
             <documento>${documento.value}</documento>
             <!--Optional:-->
             <email>${email.value}</email>
             <id>?</id>
             <!--Optional:-->
             <nombres>${name.value} ${lastName.value}</nombres>
          </client>
       </ser:createCliente>
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
        //desde aca sirve
        let dataString = JSON.stringify(res.data);
        let indice = dataString.indexOf('<return>');
        let indicefin = dataString.indexOf('</return>');
        let extraida = dataString.substring(indice + 8, indicefin);
      })
      .catch((err) => {
        console.log(err);
      });
    //Aca va un  if pregundo si EXTRAIDA es igual a USUARIO REGISTRADO o tambien que las contraseñas no coinciden
    history.push(`/login`);
  };

  return (
    <>
      <Container className="register-margin-top">
        <Row>
          <Col className="form-register">
            <Form onSubmit={handlerRegister} className="input-width-register ">
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
                  Ingrese su documento
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="50123520"
                  name="documento"
                />
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
              <Button className="bt-register " type="submit" variant="success">
                Registrar
              </Button>
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
