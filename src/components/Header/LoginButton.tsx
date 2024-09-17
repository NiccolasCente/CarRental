import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

interface LoginButtonProps {
  onLogin: () => void; // Prop para notificar login
}

const LoginButton: React.FC<LoginButtonProps> = ({ onLogin }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
    handleClose();
  };

  return (
    <>
      <Button className="btn-custom" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formBasicEmailOrUsername">
              <Form.Label>Email ou Nome de Usuário</Form.Label>
              <Form.Control type="text" placeholder="Digite seu email ou nome de usuário" required />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" placeholder="Digite sua senha" required />
            </Form.Group>

            <Button className="btn-custom" type="submit">
              Login
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

export default LoginButton;
