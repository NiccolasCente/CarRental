// Essential Imports
import { Container, Row, Col, Button, Nav } from "react-bootstrap";

// CSS Imports
import "../../assets/styles/GlobalStyles.css";
import "./Main.css";

// Import da imagem
import ImageMain from "../../assets/fotoMain.png"; 

const Main = () => {
  return (
    <main className="main-container">
      <Container className="main-content">
        <Row className="align-items-center">
          {/* Texto */}
          <Col md={6}>
            <h3>Planeje suas próximas viagens</h3>
            <h1>
              Economize seu <strong>dinheiro</strong> com aluguéis de carros
            </h1>
            <p>
              Alugue o carro de seus sonhos. Melhores preços, opções flexíveis de escolhas e muito mais.
            </p>
            <Nav>
              <Nav.Link href="#reservar-carro">
                <Button variant="primary" className="btn-custom">Reservar Carro</Button>
              </Nav.Link>
              <Nav.Link href="#saiba-mais">
                <Button variant="secondary" className="btn-custom">Saiba Mais</Button>
              </Nav.Link>
            </Nav>
          </Col>
          {/* Imagem */}
          <Col md={6} className="d-flex justify-content-end position-relative">
            <div className="image-container">
              <img src={ImageMain} alt="Imagem Exemplo" />
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Main;
