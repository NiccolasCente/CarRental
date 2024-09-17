// src/components/CreateAccountButton.tsx
import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const CreateAccountButton: React.FC = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="btn-custom" onClick={handleShow}>
        Criar Conta
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Criar Conta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Digite seu email" required />
            </Form.Group>

            <Form.Group controlId="formBasicUsername">
              <Form.Label>Nome de Usuário</Form.Label>
              <Form.Control type="text" placeholder="Digite seu nome de usuário" required />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" placeholder="Digite sua senha" required />
            </Form.Group>

            <Button className="btn-custom" type="submit">
              Criar Conta
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateAccountButton;
