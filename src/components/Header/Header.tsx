import React, { useState } from "react";
import { Container, Nav, Button } from "react-bootstrap";
import Logo from "../../assets/HeaderImages/car rental ts.png";
import LoginButton from "./LoginButton";
import CreateAccountButton from "./CreateAccountButton";
import ProfileModal from "./ProfileModal";
import ChangePasswordModal from "./ChangePasswordModal";
import ChangeUserModal from "./ChangeUserModal";
import { FaUserCircle } from 'react-icons/fa';

// CSS Imports
import "../../assets/styles/GlobalStyles.css";
import "./Header.css";

const Header: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
  const [showChangeUserModal, setShowChangeUserModal] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <header className="header py-2">
      <Container>
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={Logo} alt="Logo" className="img-fluid logo-img" />
          </div>

          {/* Navegação Central */}
          <Nav className="nav-center">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#sobre">Sobre</Nav.Link>
            <Nav.Link href="#modelos">Modelos de Veículos</Nav.Link>
            <Nav.Link href="#depoimentos">Depoimentos</Nav.Link>
            <Nav.Link href="#contato">Contato</Nav.Link>
          </Nav>

          {/* Login e Criar Conta */}
          <div className="nav-right">
            {!isLoggedIn ? (
              <>
                <LoginButton onLogin={handleLogin} />
                <CreateAccountButton />
              </>
            ) : (
              <>
                <Button className="btn-custom" onClick={() => setShowProfileModal(true)}>
                  <FaUserCircle />
                </Button>
                <Button  className="btn-logout"  onClick={handleLogout}>
                  Logout
                </Button>
              </>
            )}
          </div>
        </div>
      </Container>

      {/* Modais */}
      <ProfileModal
        show={showProfileModal}
        onHide={() => setShowProfileModal(false)}
        onChangePassword={() => {
          setShowProfileModal(false);
          setShowChangePasswordModal(true);
        }}
        onChangeUser={() => {
          setShowProfileModal(false);
          setShowChangeUserModal(true);
        }}
      />
      <ChangePasswordModal
        show={showChangePasswordModal}
        onHide={() => setShowChangePasswordModal(false)}
        onLogout={handleLogout}
      />
      <ChangeUserModal
        show={showChangeUserModal}
        onHide={() => setShowChangeUserModal(false)}
        onLogout={handleLogout}
      />
    </header>
  );
};

export default Header;
