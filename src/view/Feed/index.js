import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { addParticipante, auth, getSociais } from '../../firebase';

function Feed() {
  const [user, loading, error] = useAuthState(auth);
  const [sociais, setSociais] = useState([]);
  const loadSociais = async () => setSociais(await getSociais());

  useEffect(() => {
    loadSociais();
  }, []);

  const inscreverse = async (sociail_id) => {
    const participante = {
      social: sociail_id,
      usuario: user.uid,
      categoria_usuario: '',
      media_avaliacao_social: 3.0,
      media_avaliacao_participante: 3.0,
    };

    const retorno_addParticipante = await addParticipante(participante);
    console.log(retorno_addParticipante);
    alert('Participante adicionado com sucesso!');
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
                      onClick={() => inscreverse(role.key)}
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
