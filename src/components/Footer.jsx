// src/components/Footer.jsx
import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer">
      <style>{`
        .footer {
          background-color: #1F3B73; /* Azul para o fundo */
          padding: 20px 0;
        }
        .footer-text {
          color: #F1C40F; /* Amarelo para o texto */
          margin: 0;
          text-align: center;
          transition: color 0.3s;
        }
        .footer-text:hover {
          color: #BDC3C7; /* Azul Claro para o hover */
        }
      `}</style>
      <Container>
        <p className="footer-text">Loja Geek &copy; 2024. Todos os direitos reservados.</p>
        <p className="footer-text">DC Comics, Marvel e Animes - Produtos Fictícios para Estudo</p>
      </Container>
    </footer>
  );
};

export default Footer;
