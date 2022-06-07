import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { getSociais } from '../../firebase';

function Feed() {
  const [sociais, setSociais] = useState([]);
  const loadSociais = async () => setSociais(await getSociais());

  useEffect(() => {
    loadSociais();
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          {sociais.map((role, key) => {
            return (
              <center>
                <Card key={key}>
                  <Card.Img variant="top" src={role.img} />
                  <Card.Body>
                    <Card.Title>{role.titulo}</Card.Title>
                    <Card.Text>{role.descricao}</Card.Text>
                    <Button variant="primary">Inscrever-se</Button>
                  </Card.Body>
                </Card>
              </center>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}

export default Feed;
