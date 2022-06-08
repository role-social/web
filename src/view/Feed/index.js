import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import { StatefulTooltip } from 'baseui/tooltip';
import { Button, KIND, SHAPE } from 'baseui/button';
import { PLACEMENT, Toast, toaster, ToasterContainer } from 'baseui/toast';
import {
  addParticipante,
  updateQtdeAtualSocial,
  auth,
  getSociais,
  getSociaisInscritas,
} from '../../firebase';
import participante from './compose/PARTICIPANTE.js';
import 'react-toastify/dist/ReactToastify.css';

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

    toast.success('Inscrição realizada com sucesso!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });

    // TODO utilizar o toast do UBER
    // toaster.positive('aopa');
  };

  const checkIsInscrito = (id_social) => inscricoes.includes(id_social);

  return (
    <Container>
      <ToastContainer />
      <ToasterContainer placement={PLACEMENT.topRight} />
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
                      <StatefulTooltip
                        content={() => 'Limite da social atingido!'}
                        showArrow
                        popoverMargin={6}
                        autoFocus
                      >
                        <Button shape={SHAPE.pill} kind={KIND.tertiary}>
                          Inscrito
                        </Button>
                      </StatefulTooltip>
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
