import React, { useState, useEffect } from "react";
import { Modal, Form, Button, Alert } from "react-bootstrap";

interface ChangeUserModalProps {
  show: boolean;
  onHide: () => void;
  onLogout: () => void;
}

const ChangeUserModal: React.FC<ChangeUserModalProps> = ({ show, onHide, onLogout }) => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSuccessMessage("Mensagem: Enviado para o e-mail com sucesso.");
      setTimeout(() => {
        onLogout();
        onHide();
      }, 2000); 
    }, 1000); 
  };

  useEffect(() => {
    if (show) {
      setSuccessMessage(null); 
    }
  }, [show]);

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Esqueci Usuário/E-mail</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Digite seu e-mail" required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Usuário</Form.Label>
            <Form.Control type="text" placeholder="Digite seu usuário" required />
          </Form.Group>
          <Button variant="primary" type="submit" disabled={isLoading}>
            {isLoading ? "Enviando..." : "Enviar"}
          </Button>
        </Form>
        {successMessage && (
          <Alert variant="success" className="mt-3">
            {successMessage}
          </Alert>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default ChangeUserModal;
