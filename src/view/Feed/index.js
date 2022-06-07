import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
  addParticipante,
  updateQtdeAtualSocial,
  auth,
  getSociais,
  getSociaisInscritas,
} from '../../firebase';
import participante from './compose/PARTICIPANTE.js';

function Feed() {
  const [user, loading, error] = useAuthState(auth);
  const [sociais, setSociais] = useState([]);
  const [inscricoes, setInscricoes] = useState([]);

  const loadSociais = async () => setSociais(await getSociais());
  const loadSociaisInscritas = async (uid_user) =>
    setInscricoes(await getSociaisInscritas(uid_user));

  useEffect(() => {
    if (loading) return;

    loadSociais();
    loadSociaisInscritas(user.uid);
  }, [loading, user]);

  const inscreverse = async ({ key }) => {
    participante.social = key;
    participante.usuario = user.uid;

    await addParticipante(participante);
    await updateQtdeAtualSocial(key);

    console.log('Participante adicionado com sucesso!');
    loadSociais();
    loadSociaisInscritas(user.uid);
  };

  const checkIsInscrito = (id_social) => inscricoes.includes(id_social);

  return (
    <Container>
      {sociais.map((role, key) => {
        return (
          <Row key={key}>
            <Col>
              <center>
                <Card>
                  <Card.Img variant="top" src={role.img} />
                  <Card.Body>
                    <Card.Title>{role.titulo}</Card.Title>
                    <Card.Text>
                      {role.descricao}
                      <br />
                      <small>
                        {role.quantidade_atual}/{role.quantidade_max}
                      </small>
                    </Card.Text>
                    {checkIsInscrito(role.key) ? (
                      <Button variant="success">Inscrito</Button>
                    ) : (
                      <Button
                        variant="primary"
                        onClick={() => inscreverse(role)}
                        disabled={role.quantidade_atual >= role.quantidade_max}
                      >
                        Inscrever-se
                      </Button>
                    )}
                  </Card.Body>
                </Card>
              </center>
            </Col>
          </Row>
        );
      })}
    </Container>
  );
}

export default Feed;
