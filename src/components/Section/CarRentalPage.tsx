import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Cars } from './Cars'; 
import CarList from './CarList';
import CarImage from './CarImage';
import CarDetails from './CarDetails';
import { Car } from './Cars'; 

const CarRentalPage: React.FC = () => {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null); 

  return (
    <section>
      <Container id="modelos">
        <Row className="text-center">
          <Col>
            <h4>Disponível para Aluguel</h4>
            <h1>Escolha Seu Carro</h1>
            <p>Selecione um carro da lista abaixo:</p>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <CarList cars={Cars} onSelect={setSelectedCar} />
          </Col>
          <Col md={4}>
            <CarImage car={selectedCar} />
          </Col>
          <Col md={4}>
            <CarDetails car={selectedCar} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CarRentalPage;
