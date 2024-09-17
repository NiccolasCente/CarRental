import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

interface ProfileModalProps {
  show: boolean;
  onHide: () => void;
  onChangePassword: () => void;
  onChangeUser: () => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ show, onHide, onChangePassword, onChangeUser }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Perfil do Usuário</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Foto de Perfil</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Nome de Usuário</Form.Label>
            <Form.Control type="text" placeholder="Nome de Usuário" disabled />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" disabled />
          </Form.Group>
          <Button variant="link" onClick={onChangePassword}>
            <b>Trocar Senha</b>
          </Button>
          <Button variant="link" onClick={onChangeUser}>
            <b>Esqueci Usuário/E-mail</b>
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ProfileModal;
