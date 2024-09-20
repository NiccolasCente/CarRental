import React from "react";
import "./TravelPlanning.css"; 

import CarIcon from "../../assets/SectionImages/CarIcon.png";
import SupportIcon from "../../assets/SectionImages/SupportIcon.png"
import TrackIcon from "../../assets/SectionImages/TrackIcon.png";

const TravelPlanning: React.FC = () => {
  return (
    <section className="my-section">
      <div className="container text-center">
        <h4>Planeje sua viagem agora</h4>
        <h1>Sistema Rápido e prático</h1>

        <div className="row mt-4">
          <div className="col-md-4">
            <img src={CarIcon} alt="Image 1" className="img-fluid" />
            <h5>Escolha Um Carro</h5>
            <p>Nós oferecemos uma grande frota de veículos para todas as suas necessidades.
                Nós temos o carro perfeito para as suas necessidades!
            </p>
          </div>
          <div className="col-md-4">
            <img src={SupportIcon} alt="Image 2" className="img-fluid" />
            <h5>Suporte 24 Horas</h5>
            <p>Nossos operadores experientes e amigáveis estão sempre prontos para
                ajudar com quaisquer problemas e duvidas.</p>
          </div>
          <div className="col-md-4">
            <img src={TrackIcon} alt="Image 3" className="img-fluid" />
            <h5>Rastreamento 24 Horas</h5>
            <p>Não se preocupe com sua segurança, caso haja algum problema, além do suporte, temos
                rastreamento, e por meio dele podemos ir até você caso haja algo grave.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelPlanning;
