import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Clientes1 from "../../assets/SectionImages/Cliente1.png";
import Aspas1 from "../../assets/SectionImages/aspas.webp";

import Clientes2 from "../../assets/SectionImages/Cliente2.png";
import Aspas2 from "../../assets/SectionImages/aspas.webp";

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" style={{ marginTop: '7em' }}>
      <Container className="text-center" style={{ marginTop: '3em' }}>
        <h3 style={{ fontSize: '2rem' }}>Depoimentos</h3>
        <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>O que nossos clientes dizem</h1>
        <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>Confira os feedbacks dos nossos usuários satisfeitos!</p>

        <Row className="justify-content-center align-items-stretch mt-5">
          <Col md={5} className="d-flex flex-column align-items-center mb-5 px-4" style={{ marginTop: '50px', marginRight: '30px' }}>
            <div className="d-flex flex-column justify-content-between h-100 w-100">
              <p className="mb-3" style={{ fontSize: '1.5rem' }}>"O serviço foi incrível! Recomendo a todos!"</p>

              <div className="d-flex align-items-center justify-content-center w-100">
                <img src={Clientes1} alt="Cliente 1" className="img-fluid" style={{ width: '70px', marginRight: '15px' }} />
                
                <div className="text-center" style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '1.75rem' }}>Vitor Hugo</h4>
                  <p style={{ fontSize: '1.2rem' }}>Santo André(SP)</p>
                </div>
                
                <img src={Aspas1} alt="Aspas 1" className="img-fluid" style={{ width: '70px', marginLeft: '15px' }} />
              </div>
            </div>
          </Col>

          <Col md={5} className="d-flex flex-column align-items-center mb-5 px-4" style={{ marginTop: '50px', marginLeft: '30px' }}>
            <div className="d-flex flex-column justify-content-between h-100 w-100">
              <p className="mb-3" style={{ fontSize: '1.5rem' }}>"Experiência maravilhosa, com certeza vou alugar novamente!"</p>

              <div className="d-flex align-items-center justify-content-center w-100">
                <img src={Clientes2} alt="Cliente 2" className="img-fluid" style={{ width: '70px', marginRight: '15px' }} />
                
                <div className="text-center" style={{ flex: 1 }}>
                  <h4 style={{ fontSize: '1.75rem' }}>Paulo Samuel</h4>
                  <p style={{ fontSize: '1.2rem' }}>São Bernardo do Campo(SP)</p>
                </div>
                
                <img src={Aspas2} alt="Aspas 2" className="img-fluid" style={{ width: '70px', marginLeft: '15px' }} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
