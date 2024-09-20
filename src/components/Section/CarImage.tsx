import React from 'react';
import { Image } from 'react-bootstrap';
import { Car } from './Cars';
import '../../assets/styles/CarGlobal.css'; 

interface CarImageProps {
  car: Car | null;
}

const CarImage: React.FC<CarImageProps> = ({ car }) => {
  return (
    <div className="text-center">
      {car && (
        <Image src={car.image} alt={car.name} fluid className="car-image" />
      )}
    </div>
  );
};

export default CarImage;
