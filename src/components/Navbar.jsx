// src/components/Navbar.jsx
import { Navbar as BootstrapNavbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FaHome, FaProductHunt, FaPhone, FaGamepad, FaShoppingCart, FaUserAlt } from 'react-icons/fa';

const CustomNavbar = () => {
  const navLinkStyle = {
    color: '#f1c40f',
    transition: 'color 0.3s ease',
    textDecoration: 'none',
  };

  const hoverStyle = {
    color: '#bdc3c7',
  };

  const dropdownStyle = {
    backgroundColor: '#1f3b73',
  };

  const dropdownItemHoverStyle = {
    backgroundColor: '#f1c40f',
    color: '#1f3b73',
  };

  const logoStyle = {
    color: '#f1c40f',
    fontSize: '1.8rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
    transition: 'color 0.3s ease',
  };

  return (
    <BootstrapNavbar expand="lg" style={{ backgroundColor: '#1f3b73' }} className="py-3">
      <Container>
        <BootstrapNavbar.Brand
          href="#"
          style={logoStyle}
          onMouseEnter={(e) => (e.target.style.color = logoHoverStyle.color)}
          onMouseLeave={(e) => (e.target.style.color = logoStyle.color)}
        >
          GeekMania
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" style={{ borderColor: '#f1c40f' }} />
        <BootstrapNavbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-between">
          <Nav className="mx-auto"> {/* Centralizando os botões */}
            <Nav.Link
              href="#"
              style={navLinkStyle}
              onMouseEnter={(e) => (e.target.style.color = hoverStyle.color)}
              onMouseLeave={(e) => (e.target.style.color = navLinkStyle.color)}
            >
              <FaHome className="me-2" /> Home
            </Nav.Link>
            <Nav.Link
              href="#"
              style={navLinkStyle}
              onMouseEnter={(e) => (e.target.style.color = hoverStyle.color)}
              onMouseLeave={(e) => (e.target.style.color = navLinkStyle.color)}
            >
              <FaProductHunt className="me-2" /> Produtos
            </Nav.Link>
            <Nav.Link
              href="#"
              style={navLinkStyle}
              onMouseEnter={(e) => (e.target.style.color = hoverStyle.color)}
              onMouseLeave={(e) => (e.target.style.color = navLinkStyle.color)}
            >
              <FaPhone className="me-2" /> Contato
            </Nav.Link>
            <NavDropdown
              title={<span style={navLinkStyle}><FaGamepad className="me-2" /> Categorias</span>}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item
                href="#"
                style={dropdownStyle}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = dropdownItemHoverStyle.backgroundColor;
                  e.target.style.color = dropdownItemHoverStyle.color;
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = dropdownStyle.backgroundColor;
                  e.target.style.color = navLinkStyle.color;
                }}
              >
                Jogos
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#"
                style={dropdownStyle}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = dropdownItemHoverStyle.backgroundColor;
                  e.target.style.color = dropdownItemHoverStyle.color;
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = dropdownStyle.backgroundColor;
                  e.target.style.color = navLinkStyle.color;
                }}
              >
                HQs
              </NavDropdown.Item>
              <NavDropdown.Item
                href="#"
                style={dropdownStyle}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = dropdownItemHoverStyle.backgroundColor;
                  e.target.style.color = dropdownItemHoverStyle.color;
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = dropdownStyle.backgroundColor;
                  e.target.style.color = navLinkStyle.color;
                }}
              >
                Eletrônicos
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="ms-auto"> {/* Mantendo o carrinho e login à direita */}
            <Nav.Link
              href="#"
              style={navLinkStyle}
              onMouseEnter={(e) => (e.target.style.color = hoverStyle.color)}
              onMouseLeave={(e) => (e.target.style.color = navLinkStyle.color)}
            >
              <FaShoppingCart className="me-2" /> Carrinho
            </Nav.Link>
            <Nav.Link
              href="#"
              style={navLinkStyle}
              onMouseEnter={(e) => (e.target.style.color = hoverStyle.color)}
              onMouseLeave={(e) => (e.target.style.color = navLinkStyle.color)}
            >
              <FaUserAlt className="me-2" /> Login
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default CustomNavbar;