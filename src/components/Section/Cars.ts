export interface Car {
  id: number;
  name: string;
  model: string;
  mark: string;
  year: number;
  doors: number;
  transmission: string;
  fuel: string;
  image: string;
}

import CivicImage from '../../assets/SectionImages/Civic.png';
import CorollaImage from '../../assets/SectionImages/Corolla.png';
import CruzeImage from '../../assets/SectionImages/Cruze.png';
import MustangImage from '../../assets/SectionImages/Mustang.png';
import TeslaImage from '../../assets/SectionImages/Tesla.png';


export const Cars: Car[] = [
  { id: 1, name: 'Honda Civic', model: 'Civic', mark: 'Honda', year: 2020, doors: 4, transmission: 'Automático', fuel: 'Gasolina', image: CivicImage },
  { id: 2, name: 'Toyota Corolla', model: 'Corolla', mark: 'Toyota', year: 2021, doors: 4, transmission: 'Automático', fuel: 'Híbrido', image: CorollaImage },
  { id: 3, name: 'Chevrolet Cruze', model: 'Cruze', mark: 'Chevrolet', year: 2019, doors: 4, transmission: 'Manual', fuel: 'Gasolina', image: CruzeImage },
  { id: 4, name: 'Ford Mustang', model: 'Mustang', mark: 'Ford', year: 2022, doors: 2, transmission: 'Automático', fuel: 'Gasolina', image: MustangImage },
  { id: 5, name: 'Tesla Model 3', model: 'Model 3', mark: 'Tesla', year: 2023, doors: 4, transmission: 'Automático', fuel: 'Elétrico', image: TeslaImage },
];
