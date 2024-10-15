// src/components/ProductTable.jsx

import { useState } from 'react';
import { Table as BootstrapTable, Button, Modal } from 'react-bootstrap';

const ProductTable = () => {
  const productData = [
    { id: 1, nome: 'Boneco Batman', preco: 'R$ 40,00', descricao: 'Boneco do Batman com 15cm de altura.' },
    { id: 2, nome: 'Boneco Iron Man', preco: 'R$ 50,00', descricao: 'Boneco do Iron Man com luzes de LED.' },
    { id: 3, nome: 'Boneco Deadpool', preco: 'R$ 500,00', descricao: 'Edição limitada do boneco Deadpool.' },
    { id: 4, nome: 'Boneco Hulk', preco: 'R$ 60,00', descricao: 'Boneco do Hulk com braços articulados.' },
    { id: 5, nome: 'Boneco Superman', preco: 'R$ 400,00', descricao: 'Boneco do Superman em posição de voo.' },
    { id: 6, nome: 'Boneco Spiderman', preco: 'R$ 150,00', descricao: 'Boneco do Spiderman com teias removíveis.' },
    { id: 7, nome: 'Boneco Pantera Negra', preco: 'R$ 50,00', descricao: 'Boneco do Pantera Negra com detalhes em vibranium.' },
    { id: 8, nome: 'Boneco Venom', preco: 'R$ 400,00', descricao: 'Boneco do Venom com língua móvel.' },
    { id: 9, nome: 'Boneco Arqueiro Verde', preco: 'R$ 200,00', descricao: 'Boneco do Arqueiro Verde com arco e flecha.' },
  ];

  // Estado para controlar o modal
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Função para abrir o modal e definir o produto selecionado
  const handleShowModal = (produto) => {
    setSelectedProduct(produto);
    setShowModal(true);
  };

  // Função para fechar o modal
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  return (
    <div style={tableContainerStyle}>
      <h2 style={tableTitleStyle}>Tabela de Preços:</h2>
      <BootstrapTable bordered hover style={tableStyle}>
        <thead>
          <tr>
            <th>#</th>
            <th>Produto</th>
            <th>Preço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {productData.map((produto) => (
            <tr
              key={produto.id}
              style={rowStyle}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#BDC3C7')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#1F3B73')}
            >
              <td>{produto.id}</td>
              <td>{produto.nome}</td>
              <td>{produto.preco}</td>
              <td>
                <Button
                  variant="primary"
                  style={buttonStyle}
                  onClick={() => handleShowModal(produto)}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = '#BDC3C7')}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = '#F1C40F')}
                >
                  Ver Detalhes
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </BootstrapTable>

      {/* Modal */}
      {selectedProduct && (
        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton style={modalHeaderStyle}>
            <Modal.Title style={modalTitleStyle}>{selectedProduct.nome}</Modal.Title>
          </Modal.Header>
          <Modal.Body style={modalBodyStyle}>
            <p>{selectedProduct.descricao}</p>
            <p>
              <strong>Preço:</strong> {selectedProduct.preco}
            </p>
          </Modal.Body>
          <Modal.Footer style={modalFooterStyle}>
            <Button variant="secondary" style={buttonCloseStyle} onClick={handleCloseModal}>
              Fechar
            </Button>
            <Button variant="primary" style={buttonBuyStyle}>
              Comprar
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

// Estilos inline
const tableContainerStyle = {
  margin: '20px auto',
  width: '80%',
};

const tableTitleStyle = {
  textAlign: 'center',
  color: '#1F3B73', // Azul
  marginBottom: '20px',
};

const tableStyle = {
  backgroundColor: '#1F3B73', // Azul
  color: '#F1C40F', // Amarelo
};

const rowStyle = {
  backgroundColor: '#1F3B73', // Azul
  color: '#F1C40F', // Amarelo
};

const buttonStyle = {
  backgroundColor: '#F1C40F', // Amarelo
  border: 'none',
  color: '#1F3B73', // Azul
  transition: 'background-color 0.3s ease',
};

const modalHeaderStyle = {
  backgroundColor: '#1F3B73', // Azul
  borderBottom: '1px solid #F1C40F',
};

const modalTitleStyle = {
  color: '#F1C40F', // Amarelo
};

const modalBodyStyle = {
  backgroundColor: '#1F3B73', // Azul
  color: '#F1C40F', // Amarelo
};

const modalFooterStyle = {
  backgroundColor: '#1F3B73', // Azul
  borderTop: '1px solid #F1C40F',
};

const buttonCloseStyle = {
  backgroundColor: '#BDC3C7', // Azul Claro
  border: 'none',
  color: '#1F3B73', // Azul
};

const buttonBuyStyle = {
  backgroundColor: '#F1C40F', // Amarelo
  border: 'none',
  color: '#1F3B73', // Azul
};

export default ProductTable;
