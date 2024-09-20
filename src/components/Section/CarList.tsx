import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Car } from './Cars';
import '../../assets/styles/CarGlobal.css'; // Importando o CSS para estilização

interface CarListProps {
  cars: Car[];
  onSelect: (car: Car) => void;
}

const CarList: React.FC<CarListProps> = ({ cars, onSelect }) => {
  const [selectedCarId, setSelectedCarId] = useState<number | null>(null);

  const handleSelect = (car: Car) => {
    setSelectedCarId(car.id);
    onSelect(car);
  };

  return (
    <ListGroup>
      {cars.map(car => (
        <ListGroup.Item
          key={car.id}
          onClick={() => handleSelect(car)}
          className={`custom-list-item ${selectedCarId === car.id ? 'active' : ''}`}
        >
          {car.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default CarList;
