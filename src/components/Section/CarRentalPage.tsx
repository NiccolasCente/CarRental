import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Cars } from './Cars'; // Importa seu array de carros
import CarList from './CarList';
import CarImage from './CarImage';
import CarDetails from './CarDetails';
import { Car } from './Cars'; // Importa a interface Car

const CarRentalPage: React.FC = () => {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null); // Corrigido aqui

  return (
    <section>
      <Container>
        <Row className="text-center">
          <Col>
            <h4>Disponível para Aluguel</h4>
            <h2>Escolha Seu Carro</h2>
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
