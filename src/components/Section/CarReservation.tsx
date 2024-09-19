import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faMapMarkerAlt, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { Cars } from './Cars'; 
import { Cities } from './Cities'; 

const CarReservation: React.FC = () => {
  return (
    <Container className="text-center my-5">
      <h4>Reserve Seu Carro</h4>
      <Row className="justify-content-center mt-4">
        <Col xs={12} md={3}>
          <Form.Group controlId="carSelection">
            <Form.Label>
              <FontAwesomeIcon icon={faCar} className="me-2" />
              Escolha o Carro
            </Form.Label>
            <Form.Control as="select" className="custom-select-width">
              <option value="" disabled selected>Escolher Carro</option>
              {Cars.map((car) => (
                <option key={car.id} value={car.id}>
                  {car.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
        <Col xs={12} md={3}>
          <Form.Group controlId="cityPickup">
            <Form.Label>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
              Cidade de Retirada
            </Form.Label>
            <Form.Control as="select" className="custom-select-width">
              <option value="" disabled selected>Escolher Cidade de Retirada</option>
              {Cities.map((city) => (
                <option key={city.id} value={city.id}>
                  {city.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
        <Col xs={12} md={3}>
          <Form.Group controlId="cityDelivery">
            <Form.Label>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
              Cidade de Entrega
            </Form.Label>
            <Form.Control as="select" className="custom-select-width">
              <option value="" disabled selected>Escolher Cidade de Entrega</option>
              {Cities.map((city) => (
                <option key={city.id} value={city.id}>
                  {city.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col xs={12} md={3}>
          <Form.Group controlId="pickupDate">
            <Form.Label>
              <FontAwesomeIcon icon={faCalendar} className="me-2" />
              Data de Retirada
            </Form.Label>
            <Form.Control type="date" className="custom-select-width" />
          </Form.Group>
        </Col>
        <Col xs={12} md={3}>
          <Form.Group controlId="deliveryDate">
            <Form.Label>
              <FontAwesomeIcon icon={faCalendar} className="me-2" />
              Data de Entrega
            </Form.Label>
            <Form.Control type="date" className="custom-select-width" />
          </Form.Group>
        </Col>
        <Col xs={12} md={3} className="d-flex align-items-end">
          <Button variant="primary" className="w-100">Procurar Carros Disponíveis</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CarReservation;
