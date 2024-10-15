// src/components/Footer.jsx
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <Container>
        <p>Loja de Produtos &copy; 2024. Todos os direitos reservados.</p>
        <p>DC Comics, Marvel e Animes - Produtos Fictícios para Estudo</p>
      </Container>
    </footer>
  );
};

export default Footer;
