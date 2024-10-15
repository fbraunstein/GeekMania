// src/components/Modal.jsx
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ModalExample = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Detalhes do Produto
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Detalhes do Produto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Aqui vai a descrição detalhada do produto. Por exemplo:</p>
          <p>Produto: Camiseta Deadpool</p>
          <p>Preço: R$ 50,00</p>
          <p>Material: Algodão 100%</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Comprar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalExample;
