import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import '../../assets/styles/GlobalStyles.css';

const Footer: React.FC = () => {
  return (
    <footer id="contato" style={{marginTop :"12em"}}>
      <Container>
        <Row className="text-center">
          <Col className="footer-col">
            <h5>Aluguel de Carro</h5>
            <p>Texto explicativo sobre o aluguel de carros.</p>
            <p><FaPhone /> (11) 1234-5678</p>
            <p><FaEnvelope /> contato@aluguelcarro.com</p>
          </Col>

          <Col className="footer-col">
            <h5>Escritórios</h5>
            <p>Santo André</p>
            <p>São Bernardo</p>
            <p>São Caetano</p>
            <p>Diadema</p>
            <p>Guarulhos</p>
          </Col>

          <Col className="footer-col">
            <h5>Horário de Serviço</h5>
            <p>Suporte 24 horas</p>
          </Col>

          <Col className="footer-col">
            <h5>Inscreva-se</h5>
            <p>Inscreva seu e-mail para ter atualizações sobre nossos serviços:</p>
            <Form className="justify-content-center">
              <Form.Control type="email" placeholder="Seu e-mail" className="mr-2" />
              <Button variant="primary" className="btn-custom">Inscrever</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
