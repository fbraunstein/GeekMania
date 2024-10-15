// src/components/Modal.jsx
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ModalExample = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      
    </>
  );
};

export default ModalExample;
