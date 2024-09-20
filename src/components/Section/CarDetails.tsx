import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { Car } from './Cars';

interface CarDetailsProps {
  car: Car | null;
}

const CarDetails: React.FC<CarDetailsProps> = ({ car }) => {
  return (
    <div>
      {car && (
        <>
          <Table striped bordered hover>
            <tbody>
              <tr>
                <td colSpan={2} className="text-center">
                  Aluguel do Carro: 140 reais por dia
                </td>
              </tr>
              <tr>
                <td>Modelo</td>
                <td>{car.model}</td>
              </tr>
              <tr>
                <td>Marca</td>
                <td>{car.mark}</td>
              </tr>
              <tr>
                <td>Ano</td>
                <td>{car.year}</td>
              </tr>
              <tr>
                <td>Portas</td>
                <td>{car.doors}</td>
              </tr>
              <tr>
                <td>Transmissão</td>
                <td>{car.transmission}</td>
              </tr>
              <tr>
                <td>Combustível</td>
                <td>{car.fuel}</td>
              </tr>
            </tbody>
          </Table>
          <Button variant="primary">Reservar Agora</Button>
        </>
      )}
    </div>
  );
};

export default CarDetails;
