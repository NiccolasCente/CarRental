import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Car } from './Cars';

interface CarListProps {
  cars: Car[];
  onSelect: (car: Car) => void;
}

const CarList: React.FC<CarListProps> = ({ cars, onSelect }) => {
  return (
    <ListGroup>
      {cars.map(car => (
        <ListGroup.Item key={car.id} onClick={() => onSelect(car)}>
          {car.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default CarList;
