import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
  addParticipante,
  updateQtdeAtualSocial,
  auth,
  getSociais,
} from '../../firebase';
import participante from './compose/PARTICIPANTE.js';

function Feed() {
  const [user, loading, error] = useAuthState(auth);
  const [sociais, setSociais] = useState([]);
  const loadSociais = async () => setSociais(await getSociais());

  useEffect(() => {
    loadSociais();
  }, []);

  const inscreverse = async ({ key, quantidade_max, quantidade_atual }) => {
    if (quantidade_atual >= quantidade_max) {
      alert('Não deu pra se inscrever não!');
      return;
    }

    participante.social = key;
    participante.usuario = user.uid;

    await addParticipante(participante);
    await updateQtdeAtualSocial(key);

    console.log('Participante adicionado com sucesso!');
    loadSociais();
  };

  return (
    <Container>
      <Row>
        <Col>
          {sociais.map((role, key) => {
            return (
              <center key={key}>
                <Card>
                  <Card.Img variant="top" src={role.img} />
                  <Card.Body>
                    <Card.Title>{role.titulo}</Card.Title>
                    <Card.Text>{role.descricao}</Card.Text>
                    <Button
                      variant="primary"
                      onClick={() => inscreverse(role)}
                      disabled={role.quantidade_atual >= role.quantidade_max}
                    >
                      Inscrever-se
                    </Button>
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
