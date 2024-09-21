import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../../assets/styles/GlobalStyles.css";
import "./AboutUs.css";
import AboutUsCar from "../../assets/SectionImages/AboutUsCar.png";
import Icon1 from "../../assets/SectionImages/CrossCrountryDriveIcon.png"; 
import Icon2 from "../../assets/SectionImages/CoinIcon.png";
import Icon3 from "../../assets/SectionImages/ReembolsoIcon.png";

const AboutUs: React.FC = () => {
  return (
    <section id="aboutUs-section">
      <Container fluid className="bg-dark text-white text-center py-5">
        <h1>Economize dinheiro com os aluguéis mais baratos do mercado</h1>
        <h4>Principais aeroportos. Fornecedores locais. Suporte 24 Horas</h4>
      </Container>

      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <img src={AboutUsCar} alt="Descrição da imagem" className="img-fluid image-spacing" />
          </Col>
        </Row>

        <Row className="align-items-stretch mt-4">
          <Col md={6} className="d-flex flex-column justify-content-between text-center">
            <div className="mx-auto"> 
              <h3>Por que nós?</h3>
              <h2>Melhores negócios que você irá encontra no mercado</h2>
              <p>Descrição sobre o que você oferece.</p>

            <Button variant="primary" className="btn-custom "> 
              Mais Detalhes
            </Button>
            </div>         
          </Col>

          <Col md={6} className="d-flex flex-column justify-content-between">
            <div>
              <Row className="align-items-center">
                <Col xs={4} className="text-center">
                  <img src={Icon1} alt="Descrição Ícone 1" className="icon-image" />
                </Col>
                <Col xs={8}>
                  <h5>Veículos Modernos</h5>
                  <p>Viaje o país com os carros mais atuais do mercado e com tecnologia moderna!</p>
                </Col>
              </Row>
              <Row className="align-items-center mt-3">
                <Col xs={4} className="text-center">
                  <img src={Icon2} alt="Descrição Ícone 2" className="icon-image" />
                </Col>
                <Col xs={8}>
                  <h5>Reembolso</h5>
                  <p>Caso fique insatisfeito com o serviço devido algum problema, solicite o reembolso pelo suporte!</p>
                </Col>
              </Row>
              <Row className="align-items-center mt-3">
                <Col xs={4} className="text-center">
                  <img src={Icon3} alt="Descrição Ícone 3" className="icon-image" />
                </Col>
                <Col xs={8}>
                  <h5>Sem Custos Adicionais</h5>
                  <p>Aproveite suas viagens tranquilamente, pois prezamos sempre a transparência com 
                    os clientes e não cobramos custos adicionais algum!
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
