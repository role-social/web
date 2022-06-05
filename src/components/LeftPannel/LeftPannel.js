import React, { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';

function LeftPannel() {
  const [showLeftPannel, setShowLeftPannel] = useState(false);

  const handleEvent = () => {
    setShowLeftPannel(!showLeftPannel);
  };

  const styleButton = {
    position: 'absolute',
    bottom: '20px',
    right: '20px',
  };

  return (
    <>
      <Button variant="primary" onClick={handleEvent} style={styleButton}>
        Pesquisar
      </Button>
      <Offcanvas show={showLeftPannel} onHide={handleEvent}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Buscar Rolês</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>Blablalba</Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default LeftPannel;
